import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Animated,
    Dimensions,
    FlatList,
    Platform,
    Pressable,
    RefreshControl,
    StyleSheet,
    View
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import {
    Community,
    CommunityMember,
    deleteCommunity,
    fetchCommunityById,
    fetchCommunityMembers,
    leaveCommunity,
    updateMemberRole
} from '@/services/communityService';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const AVATAR_COLORS = ['#E53935', '#1E88E5', '#FFB300', '#43A047', '#7B1FA2'];
const STATS_ANIMATION_DURATION = 1000;

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
  
  const scaleAnim = new Animated.Value(1);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const getRoleBadge = () => {
    if (member.role === 'owner') {
      return (
        <View style={[styles.memberRoleBadge, { 
          backgroundColor: Colors.light.accent,
          borderColor: Colors.light.accent 
        }]}>
          <Feather name="award" size={10} color="#FFFFFF" />
          <ThemedText type="small" style={{ color: '#FFFFFF', marginLeft: 4, fontWeight: '700' }}>
            Owner
          </ThemedText>
        </View>
      );
    }
    if (member.role === 'admin') {
      return (
        <View style={[styles.memberRoleBadge, { 
          backgroundColor: theme.primary,
          borderColor: theme.primary 
        }]}>
          <Feather name="shield" size={10} color="#FFFFFF" />
          <ThemedText type="small" style={{ color: '#FFFFFF', marginLeft: 4, fontWeight: '700' }}>
            Admin
          </ThemedText>
        </View>
      );
    }
    return (
      <View style={[styles.memberRoleBadge, { 
        backgroundColor: 'transparent',
        borderColor: theme.textSecondary 
      }]}>
        <ThemedText type="small" style={{ color: theme.textSecondary, fontWeight: '500' }}>
          Member
        </ThemedText>
      </View>
    );
  };

  const formatJoinedDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 1) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays/7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.memberCard,
          { 
            backgroundColor: theme.backgroundDefault,
            borderColor: pressed ? theme.primary + '40' : theme.border,
            transform: [{ scale: pressed ? 0.98 : 1 }],
          },
        ]}
      >
        <View style={styles.memberContent}>
          <View style={[styles.memberAvatar, { backgroundColor: avatarColor }]}>
            <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 16 }}>
              {member.username.charAt(0).toUpperCase()}
            </ThemedText>
          </View>
          
          <View style={styles.memberInfo}>
            <View style={styles.memberNameRow}>
              <View style={styles.usernameContainer}>
                <ThemedText type="body" style={{ fontWeight: '600', fontSize: 15 }}>
                  {member.username}
                </ThemedText>
                {isCurrentUser && (
                  <View style={[styles.currentUserBadge, { backgroundColor: theme.primary + '20' }]}>
                    <ThemedText type="small" style={{ color: theme.primary, fontWeight: '600' }}>
                      You
                    </ThemedText>
                  </View>
                )}
              </View>
              <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
                Joined {formatJoinedDate(member.joinedAt)}
              </ThemedText>
            </View>
            
            <View style={styles.memberMeta}>
              {getRoleBadge()}
            </View>
          </View>
          
          {showActions && (
            <View style={styles.memberActions}>
              {member.role === 'member' ? (
                <Pressable
                  onPress={onPromote}
                  style={({ pressed }) => [
                    styles.roleActionButton,
                    { 
                      backgroundColor: pressed ? theme.primary : theme.primary + '15',
                      borderColor: theme.primary,
                    },
                  ]}
                >
                  <Feather name="arrow-up-circle" size={18} color={theme.primary} />
                  <ThemedText type="small" style={{ color: theme.primary, fontWeight: '600', marginLeft: 4 }}>
                    Promote
                  </ThemedText>
                </Pressable>
              ) : member.role === 'admin' ? (
                <Pressable
                  onPress={onDemote}
                  style={({ pressed }) => [
                    styles.roleActionButton,
                    { 
                      backgroundColor: pressed ? theme.textSecondary + '20' : theme.backgroundSecondary,
                      borderColor: theme.textSecondary,
                    },
                  ]}
                >
                  <Feather name="arrow-down-circle" size={18} color={theme.textSecondary} />
                  <ThemedText type="small" style={{ color: theme.textSecondary, fontWeight: '600', marginLeft: 4 }}>
                    Demote
                  </ThemedText>
                </Pressable>
              ) : null}
            </View>
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
}

export default function CommunityDetailScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  
  const communityId = params.id as string;
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [community, setCommunity] = useState<Community | null>(null);
  const [members, setMembers] = useState<CommunityMember[]>([]);
  const [memberCount, setMemberCount] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const [communityData, membersData] = await Promise.all([
        fetchCommunityById(communityId, user?.id),
        fetchCommunityMembers(communityId),
      ]);
      setCommunity(communityData);
      setMembers(membersData);
      setMemberCount(membersData.length);
    } catch (error) {
      console.error('Error loading community:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setStatsVisible(true), 300);
    }
  }, [communityId, user?.id]);

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
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } else {
      Alert.alert('Error', result.error || 'Failed to promote member');
    }
  };

  const handleDemoteMember = async (memberId: string) => {
    const result = await updateMemberRole(communityId, memberId, 'member');
    if (result.success) {
      await loadData();
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    } else {
      Alert.alert('Error', result.error || 'Failed to demote member');
    }
  };

  const StatNumber = ({ value, label, icon }: { value: number | string, label: string, icon: string }) => (
    <View style={styles.statItem}>
      <View style={[styles.statIcon, { backgroundColor: theme.primary + '20' }]}>
        <Feather name={icon as any} size={20} color={theme.primary} />
      </View>
      <ThemedText type="h3" style={{ color: theme.primary, marginTop: 4 }}>
        {value}
      </ThemedText>
      <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
        {label}
      </ThemedText>
    </View>
  );

  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.primary} />
        <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.lg }}>
          Loading community...
        </ThemedText>
      </ThemedView>
    );
  }

  if (!community) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <View style={[styles.errorIcon, { backgroundColor: theme.backgroundSecondary }]}>
          <Feather name="users" size={48} color={theme.textSecondary} />
        </View>
        <ThemedText type="h4" style={{ color: theme.text, marginTop: Spacing.lg }}>
          Community Not Found
        </ThemedText>
        <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
          This community may have been deleted or you don&apos;t have access
        </ThemedText>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backButton, { backgroundColor: theme.primary, marginTop: Spacing.xl }]}
        >
          <ThemedText style={{ color: '#FFFFFF', fontWeight: '600' }}>Go Back</ThemedText>
        </Pressable>
      </ThemedView>
    );
  }

  const isOwner = community.userRole === 'owner';
  const isAdmin = community.userRole === 'admin';
  const canInvite = isOwner || isAdmin;

  const renderHeader = () => (
    <View style={styles.headerContent}>
      {/* Community Banner with Gradient Effect */}
      <View style={styles.communityBanner}>
        <View style={[styles.bannerGradient, { backgroundColor: theme.primary + '40' }]} />
        <View style={styles.bannerContent}>
          <View style={[styles.communityIconContainer, { backgroundColor: theme.primary }]}>
            <Feather name="users" size={32} color="#FFFFFF" />
          </View>
          <ThemedText type="h2" style={styles.communityName}>
            {community.name}
          </ThemedText>
          {community.description ? (
            <ThemedText type="body" style={styles.communityDescription}>
              {community.description}
            </ThemedText>
          ) : null}
        </View>
        
        {/* Stats Row */}
        <View style={styles.statsRow}>
          <StatNumber 
            value={community.memberCount} 
            label="Members" 
            icon="users" 
          />
          <View style={styles.statDivider} />
          <StatNumber 
            value={community.isPrivate ? 'Private' : 'Public'} 
            label="Visibility" 
            icon={community.isPrivate ? 'lock' : 'globe'} 
          />
          <View style={styles.statDivider} />
          <StatNumber 
            value={isOwner ? 'Owner' : isAdmin ? 'Admin' : 'Member'} 
            label="Your Role" 
            icon={isOwner ? 'crown' : isAdmin ? 'shield' : 'user'} 
          />
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Pressable
          onPress={handleTopicsPress}
          style={({ pressed }) => [
            styles.quickActionButton,
            { 
              backgroundColor: theme.backgroundDefault,
              transform: [{ scale: pressed ? 0.95 : 1 }],
            },
          ]}
        >
          <View style={[styles.quickActionIcon, { backgroundColor: theme.primary + '20' }]}>
            <Feather name="message-circle" size={24} color={theme.primary} />
          </View>
          <View style={styles.quickActionContent}>
            <ThemedText type="body" style={{ fontWeight: '600', fontSize: 15 }}>
              Conversations
            </ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
              Join discussions
            </ThemedText>
          </View>
          <Feather name="chevron-right" size={20} color={theme.textSecondary} />
        </Pressable>

        {canInvite && (
          <Pressable
            onPress={handleInvitePress}
            style={({ pressed }) => [
              styles.quickActionButton,
              { 
                backgroundColor: theme.backgroundDefault,
                transform: [{ scale: pressed ? 0.95 : 1 }],
                marginTop: Spacing.md,
              },
            ]}
          >
            <View style={[styles.quickActionIcon, { backgroundColor: Colors.light.accent + '20' }]}>
              <Feather name="user-plus" size={24} color={Colors.light.accent} />
            </View>
            <View style={styles.quickActionContent}>
              <ThemedText type="body" style={{ fontWeight: '600', fontSize: 15 }}>
                Invite Members
              </ThemedText>
              <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
                Grow the community
              </ThemedText>
            </View>
            <Feather name="chevron-right" size={20} color={theme.textSecondary} />
          </Pressable>
        )}
      </View>

      {/* Admin Actions */}
      {(isOwner || isAdmin) && (
        <View style={styles.adminActions}>
          <ThemedText type="h4" style={styles.sectionTitle}>
            Community Management
          </ThemedText>
          <View style={styles.actionButtons}>
            <Pressable
              onPress={handleEditPress}
              style={({ pressed }) => [
                styles.adminActionButton,
                { 
                  backgroundColor: theme.backgroundDefault,
                  borderColor: theme.border,
                  transform: [{ scale: pressed ? 0.95 : 1 }],
                },
              ]}
            >
              <Feather name="edit-2" size={18} color={theme.primary} />
              <ThemedText type="body" style={{ color: theme.primary, fontWeight: '600', marginLeft: Spacing.sm }}>
                Edit Community
              </ThemedText>
            </Pressable>
            
            {isOwner && (
              <Pressable
                onPress={handleDelete}
                style={({ pressed }) => [
                  styles.adminActionButton,
                  { 
                    backgroundColor: Colors.light.error + '10',
                    borderColor: Colors.light.error + '30',
                    transform: [{ scale: pressed ? 0.95 : 1 }],
                  },
                ]}
              >
                <Feather name="trash-2" size={18} color={Colors.light.error} />
                <ThemedText type="body" style={{ color: Colors.light.error, fontWeight: '600', marginLeft: Spacing.sm }}>
                  Delete Community
                </ThemedText>
              </Pressable>
            )}
          </View>
        </View>
      )}

      {/* Members Section Header */}
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleRow}>
          <ThemedText type="h3">Community Members</ThemedText>
          <View style={[styles.memberCountBadge, { backgroundColor: theme.primary + '20' }]}>
            <ThemedText type="small" style={{ color: theme.primary, fontWeight: '700' }}>
              {members.length}
            </ThemedText>
          </View>
        </View>
        <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 4 }}>
          {members.length === 1 ? '1 member' : `${members.length} members`}
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
            { 
              backgroundColor: theme.backgroundSecondary,
              borderColor: Colors.light.error + '30',
              transform: [{ scale: pressed ? 0.95 : 1 }],
            },
          ]}
        >
          <Feather name="log-out" size={20} color={Colors.light.error} />
          <ThemedText type="body" style={{ color: Colors.light.error, fontWeight: '600', marginLeft: Spacing.sm }}>
            Leave Community
          </ThemedText>
        </Pressable>
      ) : (
        <View style={styles.ownerWarning}>
          <Feather name="alert-triangle" size={20} color={Colors.light.accent} />
          <ThemedText type="small" style={{ color: Colors.light.accent, marginLeft: Spacing.sm, flex: 1 }}>
            As the owner, you cannot leave this community. Transfer ownership or delete it instead.
          </ThemedText>
        </View>
      )}
    </View>
  );

  const EmptyMembers = () => (
    <View style={styles.emptyState}>
      <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
        <Feather name="user-plus" size={32} color={theme.textSecondary} />
      </View>
      <ThemedText type="h4" style={{ marginTop: Spacing.lg, textAlign: 'center' }}>
        No Members Yet
      </ThemedText>
      <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
        Invite friends to join your community and start building together
      </ThemedText>
      {canInvite && (
        <Pressable
          onPress={handleInvitePress}
          style={[styles.inviteButton, { backgroundColor: theme.primary, marginTop: Spacing.lg }]}
        >
          <Feather name="user-plus" size={18} color="#FFFFFF" />
          <ThemedText style={{ color: '#FFFFFF', fontWeight: '600', marginLeft: Spacing.sm }}>
            Invite First Member
          </ThemedText>
        </Pressable>
      )}
    </View>
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: community?.name || 'Community',
          headerTransparent: true,
          headerBlurEffect: 'regular',
          headerTintColor: theme.text,
        }}
      />
      
      <ThemedView style={styles.container}>
        <FlatList
          data={members}
          keyExtractor={(item) => item.userId}
          renderItem={({ item, index }) => (
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
          ListEmptyComponent={EmptyMembers}
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
              colors={[theme.primary]}
            />
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    padding: Spacing.xl,
  },
  content: {
    paddingHorizontal: Spacing.lg,
  },
  headerContent: {
    marginBottom: Spacing.lg,
  },
  communityBanner: {
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    marginBottom: Spacing.xl,
    ...Shadows.md,
  },
  bannerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  bannerContent: {
    padding: Spacing.xl,
    alignItems: 'center',
  },
  communityIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
    ...Shadows.sm,
  },
  communityName: {
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  communityDescription: {
    textAlign: 'center',
    marginTop: Spacing.sm,
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Spacing.lg,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statDivider: {
    width: 1,
    height: '60%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'center',
  },
  quickActions: {
    marginBottom: Spacing.xl,
  },
  quickActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    ...Shadows.xs,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  quickActionContent: {
    flex: 1,
  },
  adminActions: {
    marginBottom: Spacing.xl,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
  adminActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  sectionHeader: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    marginBottom: Spacing.sm,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  memberCountBadge: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
  },
  memberCard: {
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    padding: 0,
    overflow: 'hidden',
    ...Shadows.xs,
  },
  memberContent: {
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
    ...Shadows.xs,
  },
  memberInfo: {
    flex: 1,
  },
  memberNameRow: {
    marginBottom: Spacing.xs,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  currentUserBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.xs,
  },
  memberMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberRoleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
  },
  memberActions: {
    marginLeft: Spacing.sm,
  },
  roleActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
  },
  separator: {
    height: Spacing.sm,
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
    borderWidth: 1,
  },
  ownerWarning: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.light.accent + '10',
    borderWidth: 1,
    borderColor: Colors.light.accent + '30',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: Spacing['3xl'],
    paddingHorizontal: Spacing.xl,
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  errorIcon: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
  },
});
