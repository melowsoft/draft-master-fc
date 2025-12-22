import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, StyleSheet, Pressable, TextInput, Alert, Platform, ActivityIndicator, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { Spacing, BorderRadius, Colors } from '@/constants/theme';
import { inviteUserToCommunity, searchUsersByUsername } from '@/services/communityService';
import { useAuth } from '@/services/authContext';

const AVATAR_COLORS = ['#E53935', '#1E88E5', '#FFB300', '#43A047', '#7B1FA2'];

interface SearchResult {
  id: string;
  username: string;
  avatarColor: number;
}

export default function InviteMembersScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  const communityId = params.communityId as string | undefined;
  const communityName = (params.communityName as string | undefined) ?? 'this community';

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [invitingUserId, setInvitingUserId] = useState<string | null>(null);
  const [invitedUserIds, setInvitedUserIds] = useState<Set<string>>(new Set());
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (text.length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const results = await searchUsersByUsername(text);
        const filteredResults = results.filter(r => r.id !== user?.id);
        setSearchResults(filteredResults);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsSearching(false);
      }
    }, 300);
  };

  const handleInvite = async (targetUser: SearchResult) => {
    if (!user?.id || !communityId) return;

    setInvitingUserId(targetUser.id);
    try {
      const result = await inviteUserToCommunity(communityId, user.id, targetUser.username);
      
      if (result.success) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        setInvitedUserIds(prev => new Set(prev).add(targetUser.id));
        Alert.alert('Invitation Sent', `An invitation has been sent to @${targetUser.username}`);
      } else {
        Alert.alert('Error', result.error || 'Failed to send invitation');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to send invitation');
    } finally {
      setInvitingUserId(null);
    }
  };

  const renderSearchResult = ({ item }: { item: SearchResult }) => {
    const avatarColor = AVATAR_COLORS[item.avatarColor % AVATAR_COLORS.length];
    const isInvited = invitedUserIds.has(item.id);
    const isInviting = invitingUserId === item.id;

    return (
      <View style={[styles.resultCard, { backgroundColor: theme.backgroundDefault }]}>
        <View style={[styles.resultAvatar, { backgroundColor: avatarColor }]}>
          <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '600' }}>
            {item.username.charAt(0).toUpperCase()}
          </ThemedText>
        </View>
        <View style={styles.resultInfo}>
          <ThemedText type="body" style={{ fontWeight: '500' }}>
            @{item.username}
          </ThemedText>
        </View>
        {isInvited ? (
          <View style={[styles.invitedBadge, { backgroundColor: Colors.light.success + '20' }]}>
            <Feather name="check" size={14} color={Colors.light.success} />
            <ThemedText type="small" style={{ color: Colors.light.success, marginLeft: 4 }}>
              Invited
            </ThemedText>
          </View>
        ) : (
          <Pressable
            onPress={() => handleInvite(item)}
            disabled={isInviting}
            style={[styles.inviteButton, { backgroundColor: theme.primary }]}
          >
            {isInviting ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <>
                <Feather name="send" size={14} color="#FFFFFF" />
                <ThemedText type="small" style={{ color: '#FFFFFF', fontWeight: '600', marginLeft: 4 }}>
                  Invite
                </ThemedText>
              </>
            )}
          </Pressable>
        )}
      </View>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.content, { paddingTop }]}>
        <View style={[styles.searchContainer, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
          <Feather name="search" size={20} color={theme.textSecondary} />
          <TextInput
            value={searchQuery}
            onChangeText={handleSearchChange}
            placeholder="Search by username..."
            placeholderTextColor={theme.textSecondary}
            style={[styles.searchInput, { color: theme.text }]}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 ? (
            <Pressable onPress={() => { setSearchQuery(''); setSearchResults([]); setIsSearching(false); }}>
              <Feather name="x" size={18} color={theme.textSecondary} />
            </Pressable>
          ) : null}
        </View>

        {searchQuery.length > 0 && searchQuery.length < 2 ? (
          <View style={styles.hintContainer}>
            <ThemedText type="small" style={{ color: theme.textSecondary }}>
              Type at least 2 characters to search
            </ThemedText>
          </View>
        ) : null}

        {isSearching ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color={theme.primary} />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.sm }}>
              Searching...
            </ThemedText>
          </View>
        ) : searchResults.length > 0 ? (
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={renderSearchResult}
            contentContainerStyle={[styles.resultsList, { paddingBottom: paddingBottom + Spacing.xl }]}
            showsVerticalScrollIndicator={false}
          />
        ) : searchQuery.length >= 2 ? (
          <View style={styles.emptyContainer}>
            <Feather name="user-x" size={48} color={theme.textSecondary} />
            <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md, textAlign: 'center' }}>
              No users found matching {searchQuery}
            </ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
              Make sure you entered the correct username
            </ThemedText>
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Feather name="user-plus" size={48} color={theme.textSecondary} />
            <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md, textAlign: 'center' }}>
              Invite members to {communityName}
            </ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
              Search for users by their username to send them an invitation
            </ThemedText>
          </View>
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  hintContainer: {
    paddingTop: Spacing.md,
    alignItems: 'center',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing['3xl'],
  },
  resultsList: {
    paddingTop: Spacing.lg,
  },
  resultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.sm,
  },
  resultAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  resultInfo: {
    flex: 1,
  },
  inviteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  invitedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing['3xl'],
  },
});
