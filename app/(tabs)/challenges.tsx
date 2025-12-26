import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, RefreshControl, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { ChallengeVotingEntry, EnteredChallenge, fetchChallengeVotingEntries, fetchUserEnteredChallenges, voteForLineup } from '@/services/communityService';
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
  const router = useRouter();
  const remainingDays = daysUntil(item.endDate);
  const isEnded = remainingDays < 0;
  const votes = item.votesCount ?? 0;

  const handlePress = () => {
    router.push(`/lineup/${item.lineupId}?isOwner=true&isReadOnly=true`);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.card, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}
    >
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
          <Feather name="thumbs-up" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            {votes.toLocaleString()}
          </ThemedText>
        </View>
        <View style={styles.metaItem}>
          <Feather name="calendar" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            Ends {formatShortDate(item.endDate)}
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
          <Feather name="clock" size={14} color={theme.textSecondary} />
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
    </Pressable>
  );
}

function VotingRow({
  item,
  userId,
  onVote,
}: {
  item: ChallengeVotingEntry;
  userId: string;
  onVote: (entry: ChallengeVotingEntry) => void;
}) {
  const { theme } = useTheme();
  const votes = item.lineup.votes ?? 0;
  const hasVoted = !!item.lineup.hasVoted;
  const isOwn = item.lineup.userId === userId;

  return (
    <View style={[styles.card, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
      <View style={styles.cardHeader}>
        <View style={[styles.badge, { backgroundColor: theme.primary + '20' }]}>
          <Feather name="award" size={16} color={theme.primary} />
        </View>
        <View style={styles.cardHeaderText}>
          <ThemedText type="h4" numberOfLines={1}>
            {item.lineup.name}
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textSecondary }} numberOfLines={1}>
            {item.challengeTitle}
          </ThemedText>
        </View>
      </View>

      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Feather name="user" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            {item.lineup.username}
          </ThemedText>
        </View>
        <View style={styles.metaItem}>
          <Feather name="thumbs-up" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            {votes.toLocaleString()}
          </ThemedText>
        </View>
      </View>

      <View style={styles.metaRow}>
        <View style={styles.metaItem}>
          <Feather name="calendar" size={14} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
            Ends {formatShortDate(item.challengeEndDate)}
          </ThemedText>
        </View>
        <Pressable
          onPress={hasVoted || isOwn ? undefined : () => onVote(item)}
          style={[
            styles.voteButton,
            {
              backgroundColor: hasVoted || isOwn ? theme.backgroundSecondary : theme.primary,
              borderColor: theme.border,
            },
          ]}
        >
          <ThemedText type="small" style={{ color: hasVoted || isOwn ? theme.textSecondary : '#FFFFFF', fontWeight: '700' }}>
            {isOwn ? 'Your Entry' : hasVoted ? 'Voted' : 'Vote'}
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

export default function ChallengesScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState<'my' | 'voting'>('voting');

  const [myChallenges, setMyChallenges] = useState<EnteredChallenge[]>([]);
  const [votingEntries, setVotingEntries] = useState<ChallengeVotingEntry[]>([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadMyChallenges = useCallback(async () => {
    if (!isSupabaseConfigured() || !user?.id) {
      setMyChallenges([]);
      return;
    }
    const data = await fetchUserEnteredChallenges(user.id);
    setMyChallenges(data);
  }, [user?.id]);

  const loadVotingEntries = useCallback(async () => {
    if (!isSupabaseConfigured() || !user?.id) {
      setVotingEntries([]);
      return;
    }
    const data = await fetchChallengeVotingEntries(user.id);
    setVotingEntries(data);
  }, [user?.id]);

  const loadActiveTab = useCallback(async () => {
    if (!isSupabaseConfigured() || !user?.id) {
      setMyChallenges([]);
      setVotingEntries([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    if (activeTab === 'my') {
      await loadMyChallenges();
    } else {
      await loadVotingEntries();
    }
    setLoading(false);
  }, [activeTab, loadMyChallenges, loadVotingEntries, user?.id]);

  useFocusEffect(
    useCallback(() => {
      loadActiveTab();
    }, [loadActiveTab])
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadActiveTab();
    setRefreshing(false);
  }, [loadActiveTab]);

  useEffect(() => {
    loadActiveTab();
  }, [activeTab, loadActiveTab]);

  const handleVote = useCallback(
    async (entry: ChallengeVotingEntry) => {
      if (!user?.id) return;
      const result = await voteForLineup(entry.lineup.id, user.id);
      if (!result.success) {
        return;
      }

      setVotingEntries((prev) =>
        prev.map((e) =>
          e.lineup.id === entry.lineup.id
            ? {
                ...e,
                lineup: {
                  ...e.lineup,
                  votes: typeof result.newVoteCount === 'number' ? result.newVoteCount : (e.lineup.votes ?? 0) + 1,
                  hasVoted: true,
                },
              }
            : e
        )
      );
    },
    [user?.id]
  );

  const renderTabSwitcher = (
    <View style={[styles.tabSwitcher, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
      <Pressable
        onPress={() => setActiveTab('voting')}
        style={[
          styles.tabButton,
          activeTab === 'voting' && { backgroundColor: theme.backgroundDefault, borderColor: theme.border },
        ]}
      >
        <ThemedText type="small" style={{ fontWeight: '700', color: activeTab === 'voting' ? theme.text : theme.textSecondary }}>
          Challenge Voting
        </ThemedText>
      </Pressable>
        <Pressable
        onPress={() => setActiveTab('my')}
        style={[
          styles.tabButton,
          activeTab === 'my' && { backgroundColor: theme.backgroundDefault, borderColor: theme.border },
        ]}
      >
        <ThemedText type="small" style={{ fontWeight: '700', color: activeTab === 'my' ? theme.text : theme.textSecondary }}>
          My Challenges
        </ThemedText>
      </Pressable>
    </View>
  );

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
      {activeTab === 'my' ? (
        myChallenges.length === 0 ? (
          <View style={{ flex: 1, paddingTop, paddingBottom, paddingHorizontal: Spacing.xl }}>
            {renderTabSwitcher}
            <View style={{ flex: 1, justifyContent: 'center' }}>
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
          </View>
        ) : (
          <FlatList
            data={myChallenges}
            keyExtractor={(item) => `${item.id}:${item.enteredAt}`}
            renderItem={({ item }) => <ChallengeRow item={item} />}
            contentContainerStyle={[styles.listContent, { paddingTop, paddingBottom }]}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={theme.primary} />}
            ListHeaderComponent={
              <View>
                {renderTabSwitcher}
                <View style={styles.header}>
                  <ThemedText type="h3">My Challenges</ThemedText>
                  <ThemedText type="small" style={{ color: theme.textSecondary }}>
                    {myChallenges.length} entered
                  </ThemedText>
                </View>
              </View>
            }
          />
        )
      ) : votingEntries.length === 0 ? (
        <View style={{ flex: 1, paddingTop, paddingBottom, paddingHorizontal: Spacing.xl }}>
          {renderTabSwitcher}
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
              <Feather name="thumbs-up" size={44} color={theme.textSecondary} />
            </View>
            <ThemedText type="h4" style={{ textAlign: 'center', marginTop: Spacing.lg }}>
              No Entries to Vote On
            </ThemedText>
            <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
              Check back once other players submit their entries.
            </ThemedText>
          </View>
        </View>
      ) : (
        <FlatList
          data={votingEntries}
          keyExtractor={(item) => `${item.challengeId}:${item.lineup.id}:${item.submittedAt}`}
          renderItem={({ item }) => <VotingRow item={item} userId={user.id} onVote={handleVote} />}
          contentContainerStyle={[styles.listContent, { paddingTop, paddingBottom }]}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={theme.primary} />}
          ListHeaderComponent={
            <View>
              {renderTabSwitcher}
              <View style={styles.header}>
                <ThemedText type="h3">Challenge Voting</ThemedText>
                <ThemedText type="small" style={{ color: theme.textSecondary }}>
                  {votingEntries.length} entries
                </ThemedText>
              </View>
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
  tabSwitcher: {
    flexDirection: 'row',
    borderRadius: BorderRadius.full,
    padding: 4,
    borderWidth: 1,
    marginBottom: Spacing.xl,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  voteButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: 8,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
});
