import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Platform, Pressable, RefreshControl, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Spacing } from '@/constants/theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import {
    Community,
    CommunityInvitation,
    fetchCommunities,
    fetchPendingInvitations,
    fetchUserCommunities,
    joinCommunity
} from '@/services/communityService';
import { isSupabaseConfigured } from '@/services/supabase';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function CommunityCard({ 
  community, 
  onPress,
  onJoin,
  isJoining
}: { 
  community: Community; 
  onPress: () => void;
  onJoin?: () => void;
  isJoining?: boolean;
}) {
  const { theme, isDark } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const getRoleLabel = (role?: string | null) => {
    if (role === 'owner') return 'Owner';
    if (role === 'admin') return 'Admin';
    return null;
  };

  const roleLabel = getRoleLabel(community.userRole);

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
        styles.communityCard,
        { backgroundColor: theme.backgroundDefault },
        animatedStyle,
      ]}
    >
      <View style={[styles.communityIcon, { backgroundColor: theme.primary + '20' }]}>
        <Feather name="users" size={24} color={theme.primary} />
      </View>
      <View style={styles.communityInfo}>
        <View style={styles.communityHeader}>
          <ThemedText type="body" style={styles.communityName} numberOfLines={1}>
            {community.name}
          </ThemedText>
          {roleLabel ? (
            <View style={[styles.roleBadge, { backgroundColor: theme.primary + '20' }]}>
              <ThemedText type="small" style={{ color: theme.primary, fontSize: 10 }}>
                {roleLabel}
              </ThemedText>
            </View>
          ) : null}
        </View>
        {community.description ? (
          <ThemedText type="small" style={{ color: theme.textSecondary }} numberOfLines={2}>
            {community.description}
          </ThemedText>
        ) : null}
        <View style={styles.communityMeta}>
          <Feather name="user" size={12} color={theme.textSecondary} />
          <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 4 }}>
            {community.memberCount} {community.memberCount === 1 ? 'member' : 'members'}
          </ThemedText>
          {community.isPrivate ? (
            <>
              <View style={styles.dot} />
              <Feather name="lock" size={12} color={theme.textSecondary} />
              <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 4 }}>
                Private
              </ThemedText>
            </>
          ) : null}
        </View>
      </View>
      {community.isMember ? (
        <Feather name="chevron-right" size={20} color={theme.textSecondary} />
      ) : onJoin ? (
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            if (Platform.OS !== 'web') {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            }
            onJoin();
          }}
          disabled={isJoining}
          style={[styles.joinButton, { backgroundColor: theme.primary }]}
        >
          {isJoining ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <ThemedText type="small" style={{ color: '#FFFFFF', fontWeight: '600' }}>
              Join
            </ThemedText>
          )}
        </Pressable>
      ) : null}
    </AnimatedPressable>
  );
}

function InvitationCard({ 
  invitation, 
  onAccept,
  onDecline,
  isResponding
}: { 
  invitation: CommunityInvitation; 
  onAccept: () => void;
  onDecline: () => void;
  isResponding: boolean;
}) {
  const { theme } = useTheme();

  return (
    <View style={[styles.invitationCard, { backgroundColor: theme.primary + '10', borderColor: theme.primary + '30' }]}>
      <View style={styles.invitationContent}>
        <ThemedText type="body" style={{ fontWeight: '600' }}>
          {invitation.communityName}
        </ThemedText>
        <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
          Invited by @{invitation.inviterUsername}
        </ThemedText>
      </View>
      <View style={styles.invitationActions}>
        {isResponding ? (
          <ActivityIndicator size="small" color={theme.primary} />
        ) : (
          <>
            <Pressable
              onPress={onDecline}
              style={[styles.inviteActionButton, { backgroundColor: theme.backgroundSecondary }]}
            >
              <Feather name="x" size={16} color={theme.textSecondary} />
            </Pressable>
            <Pressable
              onPress={onAccept}
              style={[styles.inviteActionButton, { backgroundColor: theme.primary }]}
            >
              <Feather name="check" size={16} color="#FFFFFF" />
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

function SectionHeader({ title, count }: { title: string; count?: number }) {
  const { theme } = useTheme();
  return (
    <View style={styles.sectionHeader}>
      <ThemedText type="h4">{title}</ThemedText>
      {count !== undefined ? (
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          {count}
        </ThemedText>
      ) : null}
    </View>
  );
}

export default function CommunitiesScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const { user, isAuthenticated, session } = useAuth();
  const isGuest = isAuthenticated && !session;
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [myCommunities, setMyCommunities] = useState<Community[]>([]);
  const [discoverCommunities, setDiscoverCommunities] = useState<Community[]>([]);
  const [pendingInvitations, setPendingInvitations] = useState<CommunityInvitation[]>([]);
  const [joiningCommunityId, setJoiningCommunityId] = useState<string | null>(null);
  const [respondingInvitationId, setRespondingInvitationId] = useState<string | null>(null);
  const isConnected = isSupabaseConfigured();

  const loadData = useCallback(async () => {
    if (!isConnected || !user?.id) {
      setLoading(false);
      return;
    }

    try {
      const [userCommunities, allCommunities, invitations] = await Promise.all([
        fetchUserCommunities(user.id),
        fetchCommunities(user.id),
        fetchPendingInvitations(user.id),
      ]);

      setMyCommunities(userCommunities);
      const notMemberCommunities = allCommunities.filter(c => !c.isMember);
      setDiscoverCommunities(notMemberCommunities);
      setPendingInvitations(invitations);
    } catch (error) {
      console.error('Error loading communities:', error);
    } finally {
      setLoading(false);
    }
  }, [isConnected, user?.id]);

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

  const handleCommunityPress = (community: Community) => {
    if (community.isMember) {
      router.push(`/community/${community.id}`);
    }
  };

  const handleJoinCommunity = async (community: Community) => {
    if (!user?.id || isGuest) {
      Alert.alert('Sign In Required', 'Please sign in to join communities.');
      return;
    }

    setJoiningCommunityId(community.id);
    try {
      const result = await joinCommunity(community.id, user.id);
      if (result.success) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        await loadData();
      } else {
        Alert.alert('Error', result.error || 'Failed to join community');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to join community');
    } finally {
      setJoiningCommunityId(null);
    }
  };

  const handleInvitationResponse = async (invitation: CommunityInvitation, accept: boolean) => {
    if (!user?.id) return;

    setRespondingInvitationId(invitation.id);
    try {
      const { respondToInvitation } = await import('@/services/communityService');
      const result = await respondToInvitation(invitation.id, user.id, accept);
      if (result.success) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(
            accept ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning
          );
        }
        await loadData();
      } else {
        Alert.alert('Error', result.error || 'Failed to respond to invitation');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to respond to invitation');
    } finally {
      setRespondingInvitationId(null);
    }
  };

  const handleCreateCommunity = () => {
    if (!isAuthenticated || isGuest) {
      Alert.alert('Sign In Required', 'Please sign in to create a community.');
      return;
    }
    router.push('/create-community');
  };

  if (!isConnected) {
    return (
      <ThemedView style={styles.container}>
        <View style={[styles.emptyContainer, { paddingTop, paddingBottom }]}>
          <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
            <Feather name="users" size={48} color={theme.textSecondary} />
          </View>
          <ThemedText type="h4" style={{ textAlign: 'center', marginTop: Spacing.lg }}>
            Communities Coming Soon
          </ThemedText>
          <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
            Set up Supabase to create and join communities with other football fans.
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  const renderContent = () => {
    const sections: React.ReactNode[] = [];

    if (pendingInvitations.length > 0) {
      sections.push(
        <View key="invitations">
          <SectionHeader title="Pending Invitations" count={pendingInvitations.length} />
          {pendingInvitations.map(inv => (
            <InvitationCard
              key={inv.id}
              invitation={inv}
              onAccept={() => handleInvitationResponse(inv, true)}
              onDecline={() => handleInvitationResponse(inv, false)}
              isResponding={respondingInvitationId === inv.id}
            />
          ))}
        </View>
      );
    }

    sections.push(
      <View key="my-communities">
        <SectionHeader title="My Communities" count={myCommunities.length} />
        {myCommunities.length > 0 ? (
          myCommunities.map(community => (
            <CommunityCard
              key={community.id}
              community={community}
              onPress={() => handleCommunityPress(community)}
            />
          ))
        ) : (
          <View style={[styles.emptySection, { backgroundColor: theme.backgroundSecondary }]}>
            <Feather name="users" size={24} color={theme.textSecondary} />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
              You haven&apos;t joined any communities yet.{'\n'}Create one or join from the list below!
            </ThemedText>
          </View>
        )}
      </View>
    );

    if (discoverCommunities.length > 0) {
      sections.push(
        <View key="discover" style={{ marginTop: Spacing.xl }}>
          <SectionHeader title="Discover Communities" count={discoverCommunities.length} />
          {discoverCommunities.map(community => (
            <CommunityCard
              key={community.id}
              community={community}
              onPress={() => handleCommunityPress(community)}
              onJoin={() => handleJoinCommunity(community)}
              isJoining={joiningCommunityId === community.id}
            />
          ))}
        </View>
      );
    }

    return sections;
  };

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={[{ key: 'content' }]}
        keyExtractor={(item) => item.key}
        renderItem={() => (
          <View>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={theme.primary} />
              </View>
            ) : (
              renderContent()
            )}
          </View>
        )}
        contentContainerStyle={[
          styles.content,
          { paddingTop, paddingBottom: paddingBottom + 80 },
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
      <Pressable
        onPress={handleCreateCommunity}
        style={({ pressed }) => [
          styles.createButton,
          { 
            backgroundColor: theme.primary,
            opacity: pressed ? 0.9 : 1,
            bottom: paddingBottom + Spacing.lg,
          },
        ]}
      >
        <Feather name="plus" size={24} color="#FFFFFF" />
        <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '600', marginLeft: Spacing.sm }}>
          Create Community
        </ThemedText>
      </Pressable>
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
  loadingContainer: {
    paddingVertical: Spacing['4xl'],
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing['3xl'],
  },
  emptyIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptySection: {
    padding: Spacing.xl,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
    marginTop: Spacing.lg,
  },
  communityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
  },
  communityIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  communityInfo: {
    flex: 1,
  },
  communityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  communityName: {
    fontWeight: '600',
    flex: 1,
  },
  roleBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
    marginLeft: Spacing.sm,
  },
  communityMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xs,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#9BA1A6',
    marginHorizontal: Spacing.sm,
  },
  joinButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
    minWidth: 60,
    alignItems: 'center',
  },
  invitationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    marginBottom: Spacing.sm,
  },
  invitationContent: {
    flex: 1,
  },
  invitationActions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  inviteActionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButton: {
    position: 'absolute',
    right: Spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.full,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});
