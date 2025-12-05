import React, { useState, useCallback, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Pressable, 
  FlatList, 
  RefreshControl, 
  Platform, 
  ActivityIndicator, 
  Alert 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, FadeIn } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { Spacing, BorderRadius, Colors } from '@/constants/theme';
import { 
  Community,
  CommunityMember,
  fetchCommunityById,
  fetchCommunityMembers,
  leaveCommunity,
  updateMemberRole,
  deleteCommunity,
  updateCommunity
} from '@/services/communityService';
import { useAuth } from '@/services/authContext';

const AVATAR_COLORS = ['#E53935', '#1E88E5', '#FFB300', '#43A047', '#7B1FA2'];

function MemberCard({ 
  member,
  currentUserRole,
  isCurrentUser,
  onPromote,
  onDemote
}: { 
  member: CommunityMember;
  currentUserRole?: string | null;
  isCurrentUser: boolean;
  onPromote?: () => void;
  onDemote?: () => void;
}) {
  const { theme } = useTheme();
  const avatarColor = AVATAR_COLORS[member.avatarColor % AVATAR_COLORS.length];
  const canManageRoles = currentUserRole === 'owner';
  const showActions = canManageRoles && !isCurrentUser && member.role !== 'owner';

  const getRoleBadge = () => {
    if (member.role === 'owner') {
      return (
        <View style={[styles.memberRoleBadge, { backgroundColor: Colors.light.accent + '30' }]}>
          <Feather name="star" size={10} color={Colors.light.accent} />
          <ThemedText type="small" style={{ color: Colors.light.accent, marginLeft: 2, fontSize: 10 }}>
            Owner
          </ThemedText>
        </View>
      );
    }
    if (member.role === 'admin') {
      return (
        <View style={[styles.memberRoleBadge, { backgroundColor: theme.primary + '20' }]}>
          <Feather name="shield" size={10} color={theme.primary} />
          <ThemedText type="small" style={{ color: theme.primary, marginLeft: 2, fontSize: 10 }}>
            Admin
          </ThemedText>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={[styles.memberCard, { backgroundColor: theme.backgroundDefault }]}>
      <View style={[styles.memberAvatar, { backgroundColor: avatarColor }]}>
        <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '600' }}>
          {member.username.charAt(0).toUpperCase()}
        </ThemedText>
      </View>
      <View style={styles.memberInfo}>
        <View style={styles.memberNameRow}>
          <ThemedText type="body" style={{ fontWeight: '500' }}>
            @{member.username}
          </ThemedText>
          {isCurrentUser ? (
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.sm }}>
              (you)
            </ThemedText>
          ) : null}
        </View>
        <View style={styles.memberMeta}>
          {getRoleBadge()}
        </View>
      </View>
      {showActions ? (
        <View style={styles.memberActions}>
          {member.role === 'member' ? (
            <Pressable
              onPress={onPromote}
              style={[styles.roleActionButton, { backgroundColor: theme.primary + '15' }]}
            >
              <Feather name="arrow-up" size={14} color={theme.primary} />
            </Pressable>
          ) : member.role === 'admin' ? (
            <Pressable
              onPress={onDemote}
              style={[styles.roleActionButton, { backgroundColor: theme.backgroundSecondary }]}
            >
              <Feather name="arrow-down" size={14} color={theme.textSecondary} />
            </Pressable>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

export default function CommunityDetailScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  
  // Get communityId from route params
  const communityId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [community, setCommunity] = useState<Community | null>(null);
  const [members, setMembers] = useState<CommunityMember[]>([]);

  const loadData = useCallback(async () => {
    try {
      const [communityData, membersData] = await Promise.all([
        fetchCommunityById(communityId, user?.id),
        fetchCommunityMembers(communityId),
      ]);
      setCommunity(communityData);
      setMembers(membersData);
    } catch (error) {
      console.error('Error loading community:', error);
    } finally {
      setLoading(false);
    }
  }, [communityId, user?.id]);

  // Use useEffect for initial load since useFocusEffect isn't needed in Expo Router
  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [loadData]);

  const handleEditPress = () => {
    if (community) {
      router.push(`/edit-community/${community.id}`);
    }
  };

  const handleTopicsPress = () => {
    if (community) {
      router.push({
  pathname: `/community-topics/${communityId}`,
  params: { communityName: community.name }
});
    }
  };

  const handleInvitePress = () => {
    if (community) {
      router.push({
        pathname: '/invite-members',
        params: { 
          communityId: community.id, 
          communityName: community.name 
        }
      });
    }
  };

  const handleLeave = () => {
    if (!community || !user?.id) return;

    Alert.alert(
      'Leave Community',
      `Are you sure you want to leave "${community.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Leave',
          style: 'destructive',
          onPress: async () => {
            const result = await leaveCommunity(community.id, user.id);
            if (result.success) {
              if (Platform.OS !== 'web') {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              }
              router.back();
            } else {
              Alert.alert('Error', result.error || 'Failed to leave community');
            }
          },
        },
      ]
    );
  };

  const handleDelete = () => {
    if (!community) return;

    Alert.alert(
      'Delete Community',
      `Are you sure you want to delete "${community.name}"? This action cannot be undone and all members will be removed.`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const result = await deleteCommunity(community.id);
            if (result.success) {
              if (Platform.OS !== 'web') {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              }
              router.back();
            } else {
              Alert.alert('Error', result.error || 'Failed to delete community');
            }
          },
        },
      ]
    );
  };

  const handlePromoteMember = async (memberId: string) => {
    const result = await updateMemberRole(communityId, memberId, 'admin');
    if (result.success) {
      await loadData();
    } else {
      Alert.alert('Error', result.error || 'Failed to promote member');
    }
  };

  const handleDemoteMember = async (memberId: string) => {
    const result = await updateMemberRole(communityId, memberId, 'member');
    if (result.success) {
      await loadData();
    } else {
      Alert.alert('Error', result.error || 'Failed to demote member');
    }
  };

  // Update header title based on community name
  useEffect(() => {
    if (community?.name) {
      // You can set header title dynamically if needed
      // For now, it's handled in _layout.tsx
    }
  }, [community]);

  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </ThemedView>
    );
  }

  if (!community) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <Feather name="alert-circle" size={48} color={theme.textSecondary} />
        <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md }}>
          Community not found
        </ThemedText>
      </ThemedView>
    );
  }

  const isOwner = community.userRole === 'owner';
  const isAdmin = community.userRole === 'admin';
  const canInvite = isOwner || isAdmin;

  const renderHeader = () => (
    <View style={styles.headerContent}>
      <View style={[styles.communityBanner, { backgroundColor: theme.primary + '20' }]}>
        <View style={[styles.largeCommunityIcon, { backgroundColor: theme.primary }]}>
          <Feather name="users" size={40} color="#FFFFFF" />
        </View>
        <ThemedText type="h3" style={{ marginTop: Spacing.lg, textAlign: 'center' }}>
          {community.name}
        </ThemedText>
        {community.description ? (
          <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
            {community.description}
          </ThemedText>
        ) : null}
        <View style={styles.communityStats}>
          <View style={styles.statItem}>
            <ThemedText type="h4" style={{ color: theme.primary }}>
              {community.memberCount}
            </ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary }}>
              {community.memberCount === 1 ? 'Member' : 'Members'}
            </ThemedText>
          </View>
          {community.isPrivate ? (
            <View style={styles.statItem}>
              <Feather name="lock" size={20} color={theme.textSecondary} />
              <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
                Private
              </ThemedText>
            </View>
          ) : (
            <View style={styles.statItem}>
              <Feather name="globe" size={20} color={theme.textSecondary} />
              <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
                Public
              </ThemedText>
            </View>
          )}
        </View>
      </View>

      <Pressable
        onPress={handleTopicsPress}
        style={({ pressed }) => [
          styles.conversationsButton,
          { backgroundColor: theme.backgroundDefault, opacity: pressed ? 0.9 : 1 },
        ]}
      >
        <View style={[styles.conversationsIcon, { backgroundColor: theme.primary + '20' }]}>
          <Feather name="message-circle" size={24} color={theme.primary} />
        </View>
        <View style={styles.conversationsContent}>
          <ThemedText type="body" style={{ fontWeight: '600' }}>
            Conversations
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textSecondary }}>
            Discuss topics with community members
          </ThemedText>
        </View>
        <Feather name="chevron-right" size={20} color={theme.textSecondary} />
      </Pressable>

      <View style={styles.actionButtons}>
        {isOwner || isAdmin ? (
          <Pressable
            onPress={handleEditPress}
            style={({ pressed }) => [
              styles.actionButton,
              { backgroundColor: theme.backgroundDefault, opacity: pressed ? 0.9 : 1, borderColor: theme.border, borderWidth: 1 },
            ]}
          >
            <Feather name="edit-2" size={18} color={theme.primary} />
            <ThemedText type="body" style={{ color: theme.primary, fontWeight: '600', marginLeft: Spacing.sm }}>
              Edit
            </ThemedText>
          </Pressable>
        ) : null}
        {canInvite ? (
          <Pressable
            onPress={handleInvitePress}
            style={({ pressed }) => [
              styles.actionButton,
              { backgroundColor: theme.primary, opacity: pressed ? 0.9 : 1, flex: 1 },
            ]}
          >
            <Feather name="user-plus" size={18} color="#FFFFFF" />
            <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '600', marginLeft: Spacing.sm }}>
              Invite Members
            </ThemedText>
          </Pressable>
        ) : null}
      </View>

      <View style={styles.sectionHeader}>
        <ThemedText type="h4">Members</ThemedText>
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          {members.length}
        </ThemedText>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerActions}>
      {!isOwner ? (
        <Pressable
          onPress={handleLeave}
          style={({ pressed }) => [
            styles.dangerButton,
            { backgroundColor: theme.backgroundSecondary, opacity: pressed ? 0.9 : 1 },
          ]}
        >
          <Feather name="log-out" size={18} color={Colors.light.error} />
          <ThemedText type="body" style={{ color: Colors.light.error, fontWeight: '500', marginLeft: Spacing.sm }}>
            Leave Community
          </ThemedText>
        </Pressable>
      ) : (
        <Pressable
          onPress={handleDelete}
          style={({ pressed }) => [
            styles.dangerButton,
            { backgroundColor: Colors.light.error + '15', opacity: pressed ? 0.9 : 1 },
          ]}
        >
          <Feather name="trash-2" size={18} color={Colors.light.error} />
          <ThemedText type="body" style={{ color: Colors.light.error, fontWeight: '500', marginLeft: Spacing.sm }}>
            Delete Community
          </ThemedText>
        </Pressable>
      )}
    </View>
  );

  return (
    <>
      {/* Optional: You can add a Stack.Screen here to customize header for this specific screen */}
      <ThemedView style={styles.container}>
        <FlatList
          data={members}
          keyExtractor={(item) => item.userId}
          renderItem={({ item }) => (
            <MemberCard
              member={item}
              currentUserRole={community.userRole}
              isCurrentUser={item.userId === user?.id}
              onPromote={() => handlePromoteMember(item.userId)}
              onDemote={() => handleDemoteMember(item.userId)}
            />
          )}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          contentContainerStyle={[
            styles.content,
            { paddingTop, paddingBottom: paddingBottom + Spacing.xl },
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
  },
  headerContent: {
    marginBottom: Spacing.lg,
  },
  communityBanner: {
    paddingVertical: Spacing['3xl'],
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  largeCommunityIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing['4xl'],
    marginTop: Spacing.xl,
  },
  statItem: {
    alignItems: 'center',
  },
  conversationsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.lg,
  },
  conversationsIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  conversationsContent: {
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.xl,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.sm,
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  memberInfo: {
    flex: 1,
  },
  memberNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  memberRoleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  memberActions: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  roleActionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerActions: {
    marginTop: Spacing['3xl'],
    paddingTop: Spacing.xl,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  dangerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
  },
});