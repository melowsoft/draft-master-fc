import { Feather } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';

import { Button } from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Spacing } from '@/constants/theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { ChallengeWinner, fetchChallengeWinner, resolveDueChallengeWinners } from '@/services/communityService';
import { isSupabaseConfigured, supabase } from '@/services/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

function formatShortDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function ChallengeWinnerScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const { user, refreshProfile } = useAuth();
  const params = useLocalSearchParams();
  const rawId = params.id;
  const id = (Array.isArray(rawId) ? rawId[0] : rawId) || '';

  const [winner, setWinner] = useState<ChallengeWinner | null>(null);
  const [loading, setLoading] = useState(true);

  const hasWinner = !!winner?.winnerLineupId && !!winner?.winnerUserId;

  const title = useMemo(() => {
    if (!winner) return 'Challenge Winner';
    return winner.challengeTitle;
  }, [winner]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      await resolveDueChallengeWinners();
      const data = await fetchChallengeWinner(id);
      if (cancelled) return;
      setWinner(data);
      if (data?.isLegacy && data.winnerUserId && user?.id && data.winnerUserId === user.id) {
        try {
          const key = '@draftmaster_awarded_wins';
          const existing = await AsyncStorage.getItem(key);
          const awarded = new Set<string>(
            existing ? (JSON.parse(existing) as unknown[]).filter((v): v is string => typeof v === 'string') : []
          );

          if (!awarded.has(data.challengeId) && isSupabaseConfigured() && supabase) {
            const { data: profileRow, error: profileError } = await supabase
              .from('profiles')
              .select('winnings_count')
              .eq('id', user.id)
              .maybeSingle();

            if (!profileError) {
              const currentWins =
                typeof (profileRow as any)?.winnings_count === 'number' ? ((profileRow as any).winnings_count as number) : 0;
              const { error: updateError } = await supabase
                .from('profiles')
                .update({ winnings_count: currentWins + 1, updated_at: new Date().toISOString() })
                .eq('id', user.id);

              if (!updateError) {
                awarded.add(data.challengeId);
                await AsyncStorage.setItem(key, JSON.stringify([...awarded]));
                await refreshProfile();
              } else {
                console.warn('Error incrementing winnings_count:', updateError);
              }
            } else {
              console.warn('Error reading current winnings_count:', profileError);
            }
          }
        } catch (e) {
          console.warn('Error awarding legacy win:', e);
        }
      }
      setLoading(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [id, refreshProfile, user?.id]);

  const handleViewLineup = () => {
    if (!winner?.winnerLineupId) return;
    router.push(`/lineup/${winner.winnerLineupId}?isOwner=false&isReadOnly=true`);
  };

  if (loading) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Winner',
            headerTransparent: true,
            headerBlurEffect: 'regular',
          }}
        />
        <ThemedView style={[styles.container, styles.center]}>
          <ActivityIndicator size="large" color={theme.primary} />
        </ThemedView>
      </>
    );
  }

  if (!winner) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Winner',
            headerTransparent: true,
            headerBlurEffect: 'regular',
          }}
        />
        <ThemedView style={styles.container}>
          <View style={[styles.content, { paddingTop, paddingBottom }]}>
            <View style={[styles.card, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
              <View style={[styles.iconBadge, { backgroundColor: theme.backgroundSecondary }]}>
                <Feather name="alert-circle" size={28} color={theme.textSecondary} />
              </View>
              <ThemedText type="h3" style={{ textAlign: 'center', marginTop: Spacing.lg }}>
                Winner Unavailable
              </ThemedText>
              <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
                We couldn’t load this challenge’s result right now.
              </ThemedText>
            </View>
          </View>
        </ThemedView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Winner',
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerBlurEffect: 'regular',
        }}
      />
      <ThemedView style={styles.container}>
        <View style={[styles.content, { paddingTop, paddingBottom }]}>
          <View style={[styles.card, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
            <View style={[styles.iconBadge, { backgroundColor: theme.primary + '20' }]}>
              <Feather name="award" size={28} color={theme.primary} />
            </View>

            <ThemedText type="h3" style={{ textAlign: 'center', marginTop: Spacing.lg }}>
              {hasWinner ? 'Congratulations!' : 'Winner Not Announced'}
            </ThemedText>

            <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
              {title}
            </ThemedText>

            <View style={styles.metaRow}>
              <View style={[styles.metaPill, { backgroundColor: theme.backgroundSecondary }]}>
                <Feather name="tag" size={14} color={theme.textSecondary} />
                <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
                  {winner.challengeTheme}
                </ThemedText>
              </View>
              <View style={[styles.metaPill, { backgroundColor: theme.backgroundSecondary }]}>
                <Feather name="calendar" size={14} color={theme.textSecondary} />
                <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
                  Ended {formatShortDate(winner.challengeEndDate)}
                </ThemedText>
              </View>
            </View>

            {hasWinner ? (
              <>
                <View style={[styles.winnerRow, { backgroundColor: theme.backgroundSecondary }]}>
                  <View style={[styles.winnerAvatar, { backgroundColor: theme.primary }]}>
                    <ThemedText type="small" style={{ color: '#FFFFFF', fontWeight: '800' }}>
                      {(winner.winnerUsername || 'W').slice(0, 1).toUpperCase()}
                    </ThemedText>
                  </View>
                  <View style={{ flex: 1 }}>
                    <ThemedText type="body" style={{ fontWeight: '700' }}>
                      {winner.winnerUsername || 'Winner'}
                    </ThemedText>
                    <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
                      {typeof winner.winnerVotesCount === 'number' ? `${winner.winnerVotesCount.toLocaleString()} votes` : 'Top votes'}
                    </ThemedText>
                  </View>
                </View>

                <Button onPress={handleViewLineup} style={{ marginTop: Spacing.lg }}>
                  View Winning Lineup
                </Button>
              </>
            ) : (
              <Pressable
                onPress={() => router.back()}
                style={({ pressed }) => [
                  styles.secondaryButton,
                  { borderColor: theme.border, opacity: pressed ? 0.8 : 1 },
                ]}
              >
                <ThemedText type="body" style={{ color: theme.text }}>
                  Go Back
                </ThemedText>
              </Pressable>
            )}
          </View>
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'center',
  },
  card: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    padding: Spacing.xl,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginTop: Spacing.lg,
  },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  winnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginTop: Spacing.lg,
  },
  winnerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  secondaryButton: {
    height: 48,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.lg,
  },
});
