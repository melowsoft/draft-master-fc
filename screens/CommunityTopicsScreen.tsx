import React, { useState, useCallback, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Pressable, 
  FlatList, 
  RefreshControl, 
  ActivityIndicator 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { Spacing, BorderRadius, Colors } from '@/constants/theme';
import { Topic, fetchCommunityTopics } from '@/services/communityService';
import { useAuth } from '@/services/authContext';

const AVATAR_COLORS = ['#E53935', '#1E88E5', '#FFB300', '#43A047', '#7B1FA2'];

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

function TopicCard({ topic, onPress }: { topic: Topic; onPress: () => void }) {
  const { theme } = useTheme();
  const avatarColor = AVATAR_COLORS[topic.creatorAvatarColor % AVATAR_COLORS.length];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.topicCard,
        { backgroundColor: theme.backgroundDefault, opacity: pressed ? 0.9 : 1 },
      ]}
    >
      <View style={[styles.topicAvatar, { backgroundColor: avatarColor }]}>
        <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '600' }}>
          {topic.creatorUsername.charAt(0).toUpperCase()}
        </ThemedText>
      </View>
      <View style={styles.topicContent}>
        <ThemedText type="body" style={{ fontWeight: '600' }} numberOfLines={2}>
          {topic.title}
        </ThemedText>
        <View style={styles.topicMeta}>
          <ThemedText type="small" style={{ color: theme.textSecondary }}>
            @{topic.creatorUsername}
          </ThemedText>
          <View style={styles.topicStats}>
            <Feather name="message-circle" size={12} color={theme.textSecondary} />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 4 }}>
              {topic.messageCount}
            </ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.md }}>
              {formatTimeAgo(topic.lastActivityAt)}
            </ThemedText>
          </View>
        </View>
      </View>
      <Feather name="chevron-right" size={20} color={theme.textSecondary} />
    </Pressable>
  );
}

export default function CommunityTopicsScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  
  // Get parameters from route
  const communityId = params.id as string;
  const communityName = params.communityName as string;

  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadTopics = useCallback(async () => {
    const data = await fetchCommunityTopics(communityId);
    setTopics(data);
    setLoading(false);
  }, [communityId]);

  // Use useEffect for initial load
  useEffect(() => {
    loadTopics();
  }, [loadTopics]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadTopics();
    setRefreshing(false);
  }, [loadTopics]);

  const handleCreateTopic = () => {
   router.push({
  pathname: '/create-topic',
  params: { 
    communityId: communityId, 
    communityName: communityName 
  }
});
  };

  const handleTopicPress = (topic: Topic) => {
    router.push(`/topic-detail/${topic.id}`);
  };

  // Update header title with community name
  useEffect(() => {
    // Header is configured in _layout.tsx, but we can update it here if needed
  }, [communityName]);

  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </ThemedView>
    );
  }

  return (
    <>
      {/* Optional: Customize header for this screen */}
      <ThemedView style={styles.container}>
        <FlatList
          data={topics}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TopicCard topic={item} onPress={() => handleTopicPress(item)} />
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
                <Feather name="message-circle" size={32} color={theme.textSecondary} />
              </View>
              <ThemedText type="h4" style={{ marginTop: Spacing.lg, textAlign: 'center' }}>
                No Conversations Yet
              </ThemedText>
              <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
                Start the first conversation in this community
              </ThemedText>
            </View>
          }
          contentContainerStyle={[
            styles.content,
            { paddingTop, paddingBottom: paddingBottom + 80 },
            topics.length === 0 && styles.emptyContainer,
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
        
        {user ? (
          <Pressable
            onPress={handleCreateTopic}
            style={({ pressed }) => [
              styles.fab,
              {
                backgroundColor: theme.primary,
                bottom: paddingBottom + Spacing.xl,
                opacity: pressed ? 0.9 : 1,
              },
            ]}
          >
            <Feather name="plus" size={24} color="#FFFFFF" />
          </Pressable>
        ) : null}
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
  },
  topicAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  topicContent: {
    flex: 1,
    marginRight: Spacing.md,
  },
  topicMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.xs,
  },
  topicStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
    paddingHorizontal: Spacing['3xl'],
  },
  emptyIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    right: Spacing.xl,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});