import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { EnteredChallenge, fetchUserEnteredChallenges } from '@/services/communityService';
import { isSupabaseConfigured } from '@/services/supabase';

function formatShortDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function daysUntil(dateString: string) {
  return Math.ceil((new Date(dateString).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function ChallengeRow({ item }: { item: EnteredChallenge }) {
  const { theme, isDark } = useTheme();
  const remainingDays = daysUntil(item.endDate);
  const isEnded = remainingDays < 0;

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
      <View style={styles.cardHeader}>
        <View style={[styles.badge, { backgroundColor: theme.primary + '20' }]}>
          <Feather name="flag" size={16} color={theme.primary} />
        </View>
        <View style={styles.cardHeaderText}>
          <ThemedText type="h4" numberOfLines={1}>
            {item.title}
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textSecondary }} numberOfLines={2}>
            {item.description}
          </ThemedText>
        </View>
      </View>

      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Feather name="tag" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            {item.theme}
          </ThemedText>
        </View>
        <View style={styles.metaItem}>
          <Feather name="users" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            {item.participants.toLocaleString()}
          </ThemedText>
        </View>
      </View>

      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Feather name="check-circle" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            Entered {formatShortDate(item.enteredAt)}
          </ThemedText>
        </View>
        <View style={styles.metaItem}>
          <Feather name="calendar" size={14} color={theme.textSecondary} />
          <ThemedText
            type="small"
            style={{
              color: isEnded ? (isDark ? Colors.dark.error : Colors.light.error) : theme.textSecondary,
              marginLeft: 6,
            }}
          >
            {isEnded ? `Ended ${formatShortDate(item.endDate)}` : `${remainingDays}d left`}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}

export default function ChallengesScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const { user } = useAuth();

  const [items, setItems] = useState<EnteredChallenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadData = useCallback(async () => {
    if (!isSupabaseConfigured() || !user?.id) {
      setItems([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const data = await fetchUserEnteredChallenges(user.id);
    setItems(data);
    setLoading(false);
  }, [user?.id]);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [loadData])
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [loadData]);

  if (!isSupabaseConfigured()) {
    return (
      <ThemedView style={styles.container}>
        <View style={[styles.emptyContainer, { paddingTop, paddingBottom }]}>
          <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
            <Feather name="flag" size={44} color={theme.textSecondary} />
          </View>
          <ThemedText type="h4" style={{ textAlign: 'center', marginTop: Spacing.lg }}>
            Challenges Unavailable
          </ThemedText>
          <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
            Set up Supabase to enter challenges and track your entries.
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  if (!user?.id) {
    return (
      <ThemedView style={styles.container}>
        <View style={[styles.emptyContainer, { paddingTop, paddingBottom }]}>
          <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
            <Feather name="user" size={44} color={theme.textSecondary} />
          </View>
          <ThemedText type="h4" style={{ textAlign: 'center', marginTop: Spacing.lg }}>
            Sign In Required
          </ThemedText>
          <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
            Sign in to view the challenges you&apos;ve entered.
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <View style={[styles.loadingContainer, { paddingTop }]}>
          <ActivityIndicator size="large" color={theme.primary} />
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {items.length === 0 ? (
        <View style={[styles.emptyContainer, { paddingTop, paddingBottom }]}>
          <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
            <Feather name="inbox" size={44} color={theme.textSecondary} />
          </View>
          <ThemedText type="h4" style={{ textAlign: 'center', marginTop: Spacing.lg }}>
            No Entries Yet
          </ThemedText>
          <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
            Enter a challenge from Discover to see it here.
          </ThemedText>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => `${item.id}:${item.enteredAt}`}
          renderItem={({ item }) => <ChallengeRow item={item} />}
          contentContainerStyle={[styles.listContent, { paddingTop, paddingBottom }]}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={theme.primary} />
          }
          ListHeaderComponent={
            <View style={styles.header}>
              <ThemedText type="h3">My Challenges</ThemedText>
              <ThemedText type="small" style={{ color: theme.textSecondary }}>
                {items.length} entered
              </ThemedText>
            </View>
          }
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  listContent: {
    paddingHorizontal: Spacing.xl,
  },
  card: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  badge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  cardHeaderText: {
    flex: 1,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
