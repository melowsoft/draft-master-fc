import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Platform, Pressable, RefreshControl, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { formations } from '@/data/formations';
import { Challenge, Lineup } from '@/data/types';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { fetchActiveChallenges, fetchPublicLineups, fetchUserChallengeEntry, PublicLineup, seedDefaultChallenges } from '@/services/communityService';
import { isSupabaseConfigured, supabase } from '@/services/supabase';

const sampleChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Best XI of All Time',
    description: 'Build your ultimate dream team with players from any era',
    theme: 'legends',
    endDate: '2025-12-15',
    participants: 1234,
  },
  {
    id: '2',
    title: 'Premier League Legends',
    description: 'Create the best XI from Premier League history',
    theme: 'league',
    endDate: '2025-12-20',
    participants: 856,
  },
  {
    id: '3',
    title: 'Under 25 Stars',
    description: 'Build a team with only rising stars under 25',
    theme: 'youth',
    endDate: '2025-12-25',
    participants: 432,
  },
  {
    id: '4',
    title: 'World Cup Winners',
    description: 'Only players who have won the World Cup',
    theme: 'champions',
    endDate: '2025-12-30',
    participants: 678,
  },
  {
    id: '5',
    title: 'Ballon d\'Or Dream Team',
    description: 'Build a squad featuring Ballon d\'Or winners and nominees',
    theme: 'awards',
    endDate: '2026-01-05',
    participants: 921,
  },
];

const sampleTrendingLineups: Lineup[] = [
  {
    id: 'trend1',
    name: 'Brazilian Dream Team',
    formation: formations[0],
    players: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 2341,
    isPublic: true,
  },
  {
    id: 'trend2',
    name: 'Golden Generation',
    formation: formations[1],
    players: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 1876,
    isPublic: true,
  },
  {
    id: 'trend3',
    name: 'Modern Legends',
    formation: formations[3],
    players: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: 1543,
    isPublic: true,
  },
];

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function QuickActionCard({ 
  icon, 
  title, 
  description, 
  color, 
  onPress 
}: { 
  icon: keyof typeof Feather.glyphMap;
  title: string;
  description: string;
  color: string;
  onPress: () => void;
}) {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPress={() => {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress();
      }}
      onPressIn={() => { scale.value = withSpring(0.97); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={[
        styles.quickActionCard,
        { backgroundColor: color + '15', borderColor: color + '40' },
        animatedStyle,
      ]}
    >
      <View style={[styles.quickActionIcon, { backgroundColor: color }]}>
        <Feather name={icon} size={20} color="#FFFFFF" />
      </View>
      <ThemedText type="body" style={{ fontWeight: '600' }}>{title}</ThemedText>
      <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
        {description}
      </ThemedText>
    </AnimatedPressable>
  );
}

function ChallengeCard({ challenge, onPress }: { challenge: Challenge; onPress: () => void }) {
  const { theme, isDark } = useTheme();
  const scale = useSharedValue(1);
  
  const daysLeft = Math.max(0, Math.ceil((new Date(challenge.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)));
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPress={() => {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress();
      }}
      onPressIn={() => { scale.value = withSpring(0.98); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={[
        styles.challengeCard,
        { backgroundColor: isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen },
        animatedStyle,
      ]}
    >
      <View style={styles.challengeContent}>
        <ThemedText type="h4" style={styles.challengeTitle} lightColor="#FFFFFF" darkColor="#FFFFFF">
          {challenge.title}
        </ThemedText>
        <ThemedText type="small" style={styles.challengeDesc} lightColor="rgba(255,255,255,0.85)" darkColor="rgba(255,255,255,0.85)">
          {challenge.description}
        </ThemedText>
        <View style={styles.challengeMeta}>
          <View style={styles.metaItem}>
            <Feather name="users" size={14} color="rgba(255,255,255,0.7)" />
            <ThemedText type="small" lightColor="rgba(255,255,255,0.7)" darkColor="rgba(255,255,255,0.7)" style={styles.metaText}>
              {challenge.participants.toLocaleString()}
            </ThemedText>
          </View>
          <View style={styles.metaItem}>
            <Feather name="clock" size={14} color="rgba(255,255,255,0.7)" />
            <ThemedText type="small" lightColor="rgba(255,255,255,0.7)" darkColor="rgba(255,255,255,0.7)" style={styles.metaText}>
              {daysLeft} days left
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={[styles.challengeBadge, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
        <Feather name="award" size={24} color="#FFD700" />
      </View>
    </AnimatedPressable>
  );
}

function TrendingLineupCard({ lineup, onPress }: { lineup: Lineup; onPress: () => void }) {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => { scale.value = withSpring(0.97); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={[
        styles.trendingCard,
        { backgroundColor: theme.backgroundDefault },
        animatedStyle,
      ]}
    >
      <View style={[styles.miniPitch, { backgroundColor: Colors.light.pitchGreen }]}>
        <View style={styles.miniPitchLines}>
          <View style={[styles.centerCircle, { borderColor: 'rgba(255,255,255,0.3)' }]} />
          <View style={[styles.centerLine, { backgroundColor: 'rgba(255,255,255,0.3)' }]} />
        </View>
        {lineup.formation.positions.slice(0, 5).map((pos) => (
          <View
            key={pos.id}
            style={[
              styles.miniPlayer,
              {
                left: `${pos.x - 5}%`,
                top: `${pos.y - 8}%`,
                backgroundColor: '#FFFFFF',
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.trendingInfo}>
        <ThemedText type="body" style={styles.trendingName} numberOfLines={1}>
          {lineup.name}
        </ThemedText>
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          {lineup.formation.name}
        </ThemedText>
        <View style={styles.voteRow}>
          <Feather name="arrow-up" size={14} color={theme.primary} />
          <ThemedText type="small" style={{ color: theme.primary, marginLeft: 4 }}>
            {lineup.votes?.toLocaleString()}
          </ThemedText>
        </View>
      </View>
    </AnimatedPressable>
  );
}

function ComingSoonBanner({ isConnected }: { isConnected: boolean }) {
  const { theme } = useTheme();
  
  if (isConnected) {
    return (
      <View style={[styles.comingSoonBanner, { backgroundColor: theme.primary + '15' }]}>
        <Feather name="check-circle" size={16} color={theme.primary} />
        <ThemedText type="small" style={{ color: theme.primary, marginLeft: Spacing.sm, flex: 1 }}>
          Connected to community! Vote for your favorite lineups and join challenges.
        </ThemedText>
      </View>
    );
  }
  
  return (
    <View style={[styles.comingSoonBanner, { backgroundColor: theme.backgroundSecondary }]}>
      <Feather name="info" size={16} color={theme.textSecondary} />
      <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.sm, flex: 1 }}>
        Set up Supabase to enable community features like voting and leaderboards.
      </ThemedText>
    </View>
  );
}

export default function DiscoverScreen() {
  const { theme, isDark } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const { user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trendingLineups, setTrendingLineups] = useState<PublicLineup[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [challengesError, setChallengesError] = useState<string | null>(null);
  const isConnected = isSupabaseConfigured();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setChallengesError(null);
    try {
      if (isConnected) {
        await seedDefaultChallenges();
        const lineups = await fetchPublicLineups(10, 0);

        let hydratedLineups = lineups;
        if (user?.id && supabase && lineups.length > 0) {
          const lineupIds = lineups.map((l) => l.id);
          const { data: voteRows } = await supabase
            .from('votes')
            .select('lineup_id')
            .eq('user_id', user.id)
            .in('lineup_id', lineupIds);

          const votedLineupIds = new Set((voteRows || []).map((v: any) => v.lineup_id));
          hydratedLineups = lineups.map((l) => ({
            ...l,
            hasVoted: votedLineupIds.has(l.id),
          }));
        }

        setTrendingLineups(hydratedLineups);
        try {
          const activeChallenges = await fetchActiveChallenges();
          setChallenges(activeChallenges);
        } catch (e) {
          setChallenges([]);
          setChallengesError(e instanceof Error ? e.message : 'Failed to load challenges');
        }
      } else {
        setTrendingLineups(sampleTrendingLineups as unknown as PublicLineup[]);
        setChallenges(sampleChallenges);
      }
    } catch (error) {
      console.error('Error loading discover data:', error);
      setTrendingLineups([]);
      setChallenges(isConnected ? [] : sampleChallenges);
      if (isConnected) {
        setChallengesError(error instanceof Error ? error.message : 'Failed to load discover data');
      }
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [isConnected]);

  const handleLineupPress = (lineup: Lineup) => {
    if (!isConnected) {
      return;
    }

    const publicLineup = lineup as PublicLineup;
    const query = [
      'mode=challengeVote',
      'isOwner=false',
      'isReadOnly=true',
      `entryUserId=${encodeURIComponent(publicLineup.userId || '')}`,
      `entryUsername=${encodeURIComponent(publicLineup.username || 'Anonymous')}`,
      `hasVoted=${publicLineup.hasVoted ? 'true' : 'false'}`,
    ].join('&');

    router.push(`/lineup/${publicLineup.id}?${query}`);
  };

  const handleComparePress = () => {
    router.push('/player-comparison');
  };

  const handleChallengePress = async (challenge: Challenge) => {
    if (isConnected && user?.id) {
      const existing = await fetchUserChallengeEntry(challenge.id, user.id);
      if (existing.exists) {
        router.push({
          pathname: '/challenge-submitted',
          params: { challengeId: challenge.id, challengeTitle: challenge.title },
        });
        return;
      }
    }

    router.push({
      pathname: '/create-lineup',
      params: { challengeId: challenge.id, challengeTitle: challenge.title },
    });
  };

  const featuredChallenge = challenges.find(c => c.isFeatured) || challenges[0];
  const remainingChallenges = challenges
    .filter(c => c.id !== featuredChallenge?.id)
    .slice(0, 4);
  const displayLineups = isConnected ? trendingLineups : sampleTrendingLineups;

  const renderHeader = () => (
    <View style={styles.headerContent}>
      <View style={styles.quickActions}>
        <QuickActionCard
          icon="users"
          title="Compare"
          description="Compare player stats"
          color={Colors.light.accent}
          onPress={handleComparePress}
        />
        <QuickActionCard
          icon="plus-circle"
          title="Create"
          description="Build new lineup"
          color={Colors.light.pitchGreen}
          onPress={() => router.push('/create-lineup')}
        />
      </View>

      <View style={styles.sectionHeader}>
        <ThemedText type="h3">Featured Challenge</ThemedText>
      </View>
      
      {featuredChallenge ? (
        <ChallengeCard
          challenge={featuredChallenge}
          onPress={() => handleChallengePress(featuredChallenge)}
        />
      ) : (
        <View style={[styles.emptyState, { backgroundColor: theme.backgroundSecondary }]}>
          <Feather name="flag" size={24} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.sm }}>
            {challengesError ? `Unable to load challenges: ${challengesError}` : 'No active challenges right now.'}
          </ThemedText>
        </View>
      )}
      
      <View style={[styles.sectionHeader, { marginTop: Spacing.xl }]}>
        <ThemedText type="h3">Trending Lineups</ThemedText>
        {loading ? <ActivityIndicator size="small" color={theme.primary} /> : null}
      </View>
      
      {displayLineups.length > 0 ? (
        <FlatList
          horizontal
          data={displayLineups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TrendingLineupCard 
              lineup={item as Lineup} 
              onPress={() => handleLineupPress(item as Lineup)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.trendingList}
          style={styles.trendingContainer}
        />
      ) : (
        <View style={[styles.emptyState, { backgroundColor: theme.backgroundSecondary }]}>
          <Feather name="inbox" size={24} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.sm }}>
            No trending lineups yet. Be the first to share yours!
          </ThemedText>
        </View>
      )}
      
      <ComingSoonBanner isConnected={isConnected} />
      
      <View style={[styles.sectionHeader, { marginTop: Spacing.xl }]}>
        <ThemedText type="h3">Active Challenges</ThemedText>
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          {remainingChallenges.length} available
        </ThemedText>
      </View>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={remainingChallenges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChallengeCard challenge={item} onPress={() => handleChallengePress(item)} />
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={[
          styles.content,
          { paddingTop, paddingBottom },
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.primary}
          />
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Spacing.xl,
  },
  headerContent: {
    marginBottom: Spacing.lg,
  },
  quickActions: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  quickActionCard: {
    flex: 1,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  quickActionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  challengeCard: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  challengeContent: {
    flex: 1,
  },
  challengeTitle: {
    marginBottom: Spacing.xs,
  },
  challengeDesc: {
    marginBottom: Spacing.sm,
  },
  challengeMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.lg,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    marginLeft: Spacing.xs,
  },
  challengeBadge: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Spacing.md,
  },
  trendingContainer: {
    marginHorizontal: -Spacing.xl,
  },
  trendingList: {
    paddingHorizontal: Spacing.xl,
    gap: Spacing.md,
  },
  trendingCard: {
    width: 160,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  miniPitch: {
    height: 100,
    position: 'relative',
  },
  miniPitchLines: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    position: 'absolute',
  },
  centerLine: {
    position: 'absolute',
    width: '100%',
    height: 1,
    top: '50%',
  },
  miniPlayer: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  trendingInfo: {
    padding: Spacing.md,
  },
  trendingName: {
    fontWeight: '600',
    marginBottom: 2,
  },
  voteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xs,
  },
  comingSoonBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginTop: Spacing.lg,
  },
  emptyState: {
    padding: Spacing.xl,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
