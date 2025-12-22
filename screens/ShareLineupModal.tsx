import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { Spacing, BorderRadius } from '@/constants/theme';
import {
  fetchUserCommunities,
  fetchCommunityTopics,
  postMessage,
  uploadLineupImage,
  Community,
  Topic,
  LineupSnapshot,
} from '@/services/communityService';
import { Lineup } from '@/data/types';

interface ShareLineupModalProps {
  visible: boolean;
  onClose: () => void;
  lineup: Lineup;
  capturedImageUri?: string | null;
}

type Step = 'community' | 'topic' | 'message';

export default function ShareLineupModal({ visible, onClose, lineup, capturedImageUri }: ShareLineupModalProps) {
  const { theme, isDark } = useTheme();
  const { user } = useAuth();
  const insets = useSafeAreaInsets();
  
  const [step, setStep] = useState<Step>('community');
  const [communities, setCommunities] = useState<Community[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sharing, setSharing] = useState(false);

  useEffect(() => {
    if (visible && user) {
      loadCommunities();
    }
    return () => {
      setStep('community');
      setSelectedCommunity(null);
      setSelectedTopic(null);
      setMessage('');
    };
  }, [visible, user]);

  const loadCommunities = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await fetchUserCommunities(user.id);
      setCommunities(data);
    } catch (error) {
      console.error('Error loading communities:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTopics = async (communityId: string) => {
    setLoading(true);
    try {
      const data = await fetchCommunityTopics(communityId);
      setTopics(data);
    } catch (error) {
      console.error('Error loading topics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCommunity = (community: Community) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setSelectedCommunity(community);
    loadTopics(community.id);
    setStep('topic');
  };

  const handleSelectTopic = (topic: Topic) => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    setSelectedTopic(topic);
    setStep('message');
  };

  const handleBack = () => {
    if (step === 'topic') {
      setStep('community');
      setSelectedTopic(null);
    } else if (step === 'message') {
      setStep('topic');
    }
  };

  const handleShare = async () => {
    if (!user || !selectedTopic) return;

    setSharing(true);
    try {
      let imageUrl: string | undefined;
      let uploadWarning = false;

      if (capturedImageUri) {
        const uploadResult = await uploadLineupImage(capturedImageUri, lineup.id, user.id);
        if (uploadResult.success && uploadResult.url) {
          imageUrl = uploadResult.url;
        } else {
          console.warn('Image upload failed:', uploadResult.error);
          uploadWarning = true;
        }
      }

      const lineupSnapshot: LineupSnapshot = {
        id: lineup.id,
        name: lineup.name,
        formationId: lineup.formation.id,
        formationName: lineup.formation.name,
        playerCount: Object.keys(lineup.players || {}).length,
        imageUrl,
      };

      const shareMessage = message.trim() || `Check out my lineup: ${lineup.name}`;

      const result = await postMessage(
        selectedTopic.id,
        user.id,
        shareMessage,
        lineupSnapshot
      );

      if (result.success) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        if (uploadWarning) {
          Alert.alert(
            'Shared',
            'Your lineup was shared, but the image could not be uploaded. The lineup details are still visible.'
          );
        } else {
          Alert.alert('Shared', 'Your lineup has been shared to the conversation!');
        }
        onClose();
      } else {
        Alert.alert('Error', result.error || 'Failed to share lineup');
      }
    } catch (error) {
      console.error('Share error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setSharing(false);
    }
  };

  const renderCommunityItem = ({ item }: { item: Community }) => (
    <Pressable
      style={[styles.listItem, { backgroundColor: theme.backgroundSecondary }]}
      onPress={() => handleSelectCommunity(item)}
    >
      <View style={[styles.communityIcon, { backgroundColor: theme.primary }]}>
        <Feather name="users" size={18} color="#FFF" />
      </View>
      <View style={styles.listItemContent}>
        <ThemedText type="h4" style={{ fontSize: 16 }}>{item.name}</ThemedText>
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          {item.memberCount} member{item.memberCount !== 1 ? 's' : ''}
        </ThemedText>
      </View>
      <Feather name="chevron-right" size={20} color={theme.textSecondary} />
    </Pressable>
  );

  const renderTopicItem = ({ item }: { item: Topic }) => (
    <Pressable
      style={[styles.listItem, { backgroundColor: theme.backgroundSecondary }]}
      onPress={() => handleSelectTopic(item)}
    >
      <View style={[styles.topicIcon, { backgroundColor: theme.accent }]}>
        <Feather name="message-circle" size={18} color="#FFF" />
      </View>
      <View style={styles.listItemContent}>
        <ThemedText type="h4" style={{ fontSize: 16 }} numberOfLines={1}>{item.title}</ThemedText>
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          {item.messageCount} message{item.messageCount !== 1 ? 's' : ''}
        </ThemedText>
      </View>
      <Feather name="chevron-right" size={20} color={theme.textSecondary} />
    </Pressable>
  );

  const getTitle = () => {
    switch (step) {
      case 'community': return 'Select Community';
      case 'topic': return selectedCommunity?.name || 'Select Topic';
      case 'message': return 'Add a Message';
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          {step !== 'community' ? (
            <Pressable onPress={handleBack} style={styles.headerButton}>
              <Feather name="arrow-left" size={24} color={theme.text} />
            </Pressable>
          ) : (
            <View style={styles.headerButton} />
          )}
          <ThemedText type="h3" style={styles.headerTitle}>{getTitle()}</ThemedText>
          <Pressable onPress={onClose} style={styles.headerButton}>
            <Feather name="x" size={24} color={theme.text} />
          </Pressable>
        </View>

        <View style={[styles.lineupPreview, { backgroundColor: theme.backgroundSecondary }]}>
          <View style={[styles.lineupBadge, { backgroundColor: theme.primary }]}>
            <Feather name="layout" size={16} color="#FFF" />
          </View>
          <View style={styles.lineupInfo}>
            <ThemedText type="h4" style={{ fontSize: 16 }}>{lineup.name}</ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary }}>
              {lineup.formation.name} - {Object.keys(lineup.players || {}).length} players
            </ThemedText>
          </View>
        </View>

        {step === 'community' && (
          loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={theme.primary} />
            </View>
          ) : communities.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Feather name="users" size={48} color={theme.textSecondary} />
              <ThemedText type="body" style={[styles.emptyText, { color: theme.textSecondary }]}>
                You are not a member of any communities yet
              </ThemedText>
              <ThemedText type="small" style={{ color: theme.textSecondary, textAlign: 'center' }}>
                Join or create a community to share your lineups
              </ThemedText>
            </View>
          ) : (
            <FlatList
              data={communities}
              keyExtractor={(item) => item.id}
              renderItem={renderCommunityItem}
              contentContainerStyle={styles.listContent}
              ItemSeparatorComponent={() => <View style={{ height: Spacing.sm }} />}
            />
          )
        )}

        {step === 'topic' && (
          loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={theme.primary} />
            </View>
          ) : topics.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Feather name="message-circle" size={48} color={theme.textSecondary} />
              <ThemedText type="body" style={[styles.emptyText, { color: theme.textSecondary }]}>
                No conversations in this community
              </ThemedText>
              <ThemedText type="small" style={{ color: theme.textSecondary, textAlign: 'center' }}>
                Start a new conversation to share your lineup
              </ThemedText>
            </View>
          ) : (
            <FlatList
              data={topics}
              keyExtractor={(item) => item.id}
              renderItem={renderTopicItem}
              contentContainerStyle={styles.listContent}
              ItemSeparatorComponent={() => <View style={{ height: Spacing.sm }} />}
            />
          )
        )}

        {step === 'message' && (
          <View style={styles.messageContainer}>
            <ThemedText type="body" style={{ marginBottom: Spacing.sm }}>
              Add an optional message with your lineup:
            </ThemedText>
            <TextInput
              style={[
                styles.messageInput,
                {
                  backgroundColor: theme.backgroundSecondary,
                  color: theme.text,
                  borderColor: theme.border,
                },
              ]}
              placeholder={`Check out my lineup: ${lineup.name}`}
              placeholderTextColor={theme.textSecondary}
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
            <Pressable
              style={[
                styles.shareButton,
                { backgroundColor: theme.primary, opacity: sharing ? 0.5 : 1 }
              ]}
              onPress={handleShare}
              disabled={sharing}
            >
              {sharing ? (
                <ActivityIndicator size="small" color="#FFF" />
              ) : (
                <ThemedText type="body" style={{ color: '#FFF', fontWeight: '600' }}>
                  Share Lineup
                </ThemedText>
              )}
            </Pressable>
          </View>
        )}
      </ThemedView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
  },
  lineupPreview: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: Spacing.md,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  lineupBadge: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  lineupInfo: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyText: {
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  listContent: {
    padding: Spacing.md,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  communityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  topicIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  listItemContent: {
    flex: 1,
  },
  messageContainer: {
    padding: Spacing.md,
    flex: 1,
  },
  messageInput: {
    minHeight: 100,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    fontSize: 16,
  },
  shareButton: {
    marginTop: Spacing.lg,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
