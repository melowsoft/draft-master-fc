import React, { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  Pressable, 
  FlatList, 
  RefreshControl, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  ActivityIndicator, 
  Alert, 
  Text, 
  Dimensions 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { Spacing, BorderRadius, Colors } from '@/constants/theme';
import { 
  Topic, 
  TopicMessage, 
  fetchTopicById, 
  fetchTopicMessages, 
  postMessage, 
  deleteMessage,
  searchCommunityMembers,
  createMentionNotifications,
  fetchCommunityById,
  uploadChatImage,
} from '@/services/communityService';
import * as ImagePicker from 'expo-image-picker';
import { useAuth } from '@/services/authContext';

type UserProfile = { id: string; username: string };

const AVATAR_COLORS = ['#E53935', '#1E88E5', '#FFB300', '#43A047', '#7B1FA2'];

interface MentionSuggestion {
  userId: string;
  username: string;
  avatarColor: number;
}

function HighlightedText({ 
  text, 
  isOwn,
  highlightColor 
}: { 
  text: string; 
  isOwn: boolean;
  highlightColor: string;
}) {
  const { theme } = useTheme();
  const parts = text.split(/(@\w+)/g);
  
  return (
    <Text style={{ color: isOwn ? '#FFFFFF' : theme.text }}>
      {parts.map((part, index) => {
        if (part.startsWith('@')) {
          return (
            <Text 
              key={index} 
              style={{ 
                color: isOwn ? '#FFD700' : highlightColor,
                fontWeight: '600',
              }}
            >
              {part}
            </Text>
          );
        }
        return <Text key={index}>{part}</Text>;
      })}
    </Text>
  );
}

function formatTime(dateString: string): string {
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

const LINEUP_IMAGE_WIDTH = Dimensions.get('window').width * 0.55;
const LINEUP_IMAGE_ASPECT_RATIO = 420 / (Dimensions.get('window').width - 32);

function LineupPreviewCard({ 
  lineup, 
  isOwn 
}: { 
  lineup: { id: string; name: string; formationId: string; formationName: string; playerCount: number; imageUrl?: string }; 
  isOwn: boolean;
}) {
  const { theme } = useTheme();
  const [imageError, setImageError] = useState(false);

  const renderCardContent = () => (
    <View style={styles.lineupPreviewHeader}>
      <View style={[styles.lineupPreviewIcon, { backgroundColor: isOwn ? '#FFD700' : theme.primary }]}>
        <Feather name="layout" size={14} color={isOwn ? '#1B5E20' : '#FFF'} />
      </View>
      <View style={styles.lineupPreviewInfo}>
        <ThemedText 
          type="small" 
          style={{ 
            fontWeight: '600', 
            color: isOwn ? '#FFFFFF' : theme.text,
          }}
          numberOfLines={1}
        >
          {lineup.name}
        </ThemedText>
        <ThemedText 
          type="small" 
          style={{ 
            fontSize: 11,
            color: isOwn ? 'rgba(255,255,255,0.7)' : theme.textSecondary,
          }}
        >
          {lineup.formationName} - {lineup.playerCount} players
        </ThemedText>
      </View>
    </View>
  );

  if (lineup.imageUrl && !imageError) {
    return (
      <View style={[
        styles.lineupImageCard,
        { 
          backgroundColor: isOwn ? 'rgba(255,255,255,0.1)' : theme.backgroundSecondary,
          borderColor: isOwn ? 'rgba(255,255,255,0.2)' : theme.border,
        }
      ]}>
        <Image
          source={{ uri: lineup.imageUrl }}
          style={styles.lineupImage}
          contentFit="cover"
          transition={200}
          onError={() => setImageError(true)}
        />
        <View style={styles.lineupImageOverlay}>
          <ThemedText 
            type="small" 
            style={{ 
              fontWeight: '600', 
              color: '#FFFFFF',
              textShadowColor: 'rgba(0,0,0,0.5)',
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }}
            numberOfLines={1}
          >
            {lineup.name}
          </ThemedText>
          <ThemedText 
            type="small" 
            style={{ 
              fontSize: 11,
              color: 'rgba(255,255,255,0.9)',
              textShadowColor: 'rgba(0,0,0,0.5)',
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }}
          >
            {lineup.formationName} - {lineup.playerCount} players
          </ThemedText>
        </View>
      </View>
    );
  }

  return (
    <View style={[
      styles.lineupPreviewCard,
      { 
        backgroundColor: isOwn ? 'rgba(255,255,255,0.15)' : theme.backgroundSecondary,
        borderColor: isOwn ? 'rgba(255,255,255,0.2)' : theme.border,
      }
    ]}>
      {renderCardContent()}
    </View>
  );
}

function MessageBubble({ 
  message, 
  isOwn,
  onDelete
}: { 
  message: TopicMessage; 
  isOwn: boolean;
  onDelete?: () => void;
}) {
  const { theme } = useTheme();
  const avatarColor = AVATAR_COLORS[message.authorAvatarColor % AVATAR_COLORS.length];

  const handleLongPress = () => {
    if (isOwn && onDelete) {
      Alert.alert(
        'Delete Message',
        'Are you sure you want to delete this message?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', style: 'destructive', onPress: onDelete },
        ]
      );
    }
  };

  return (
    <View style={[styles.messageRow, { justifyContent: isOwn ? 'flex-end' : 'flex-start' }]}>
      {!isOwn && (
        <View style={[styles.messageAvatar, { backgroundColor: avatarColor }]}>
          <ThemedText type="small" style={{ color: '#FFFFFF', fontWeight: '600' }}>
            {message.authorUsername.charAt(0).toUpperCase()}
          </ThemedText>
        </View>
      )}
      
      <Pressable
        onLongPress={handleLongPress}
        style={[
          styles.messageBubble,
          {
            backgroundColor: isOwn ? theme.primary : theme.backgroundDefault,
            maxWidth: '70%',
          },
        ]}
      >
        {!isOwn && (
          <ThemedText type="small" style={{ fontWeight: '600', color: theme.primary, marginBottom: Spacing.xs }}>
            @{message.authorUsername}
          </ThemedText>
        )}
        
        <View style={{ marginBottom: Spacing.xs }}>
          <HighlightedText 
            text={message.body} 
            isOwn={isOwn}
            highlightColor={theme.primary}
          />
        </View>
        
        {message.lineup ? (
          <LineupPreviewCard lineup={message.lineup} isOwn={isOwn} />
        ) : null}

        {message.imageUrl ? (
          <Image
            source={{ uri: message.imageUrl }}
            style={[
              styles.messageImage,
              {
                marginTop: Spacing.sm,
                marginBottom: Spacing.xs,
              }
            ]}
            contentFit="cover"
          />
        ) : null}
        
        <ThemedText 
          type="small" 
          style={{ 
            color: isOwn ? 'rgba(255,255,255,0.7)' : theme.textSecondary,
            textAlign: 'right',
          }}
        >
          {formatTime(message.createdAt)}
        </ThemedText>
      </Pressable>

      {isOwn && (
        <View style={[styles.messageAvatar, { backgroundColor: theme.primary, marginLeft: Spacing.sm }]}>
          <ThemedText type="small" style={{ color: '#FFFFFF', fontWeight: '600' }}>
            {message.authorUsername.charAt(0).toUpperCase()}
          </ThemedText>
        </View>
      )}
    </View>
  );
}

export default function TopicDetailScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user, profile } = useAuth();
  
  // Get topicId from route params
  const topicId = params.id as string;
  const flatListRef = useRef<FlatList>(null);

  const [topic, setTopic] = useState<Topic | null>(null);
  const [messages, setMessages] = useState<TopicMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [mentionSuggestions, setMentionSuggestions] = useState<MentionSuggestion[]>([]);
  const [showMentions, setShowMentions] = useState(false);
  const [communityName, setCommunityName] = useState('');
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const loadData = useCallback(async () => {
    const [topicData, messagesData] = await Promise.all([
      fetchTopicById(topicId),
      fetchTopicMessages(topicId),
    ]);
    setTopic(topicData);
    setMessages(messagesData);
    
    if (topicData) {
      const community = await fetchCommunityById(topicData.communityId);
      if (community) {
        setCommunityName(community.name);
      }
    }
    setLoading(false);
  }, [topicId]);

  // Use useEffect for initial load
  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [loadData]);

  const handleTextChange = useCallback(async (text: string) => {
    setNewMessage(text);
    
    const lastAtIndex = text.lastIndexOf('@');
    if (lastAtIndex >= 0) {
      const textAfterAt = text.slice(lastAtIndex + 1);
      const hasSpaceAfterAt = textAfterAt.includes(' ');
      
      if (!hasSpaceAfterAt && textAfterAt.length > 0 && topic) {
        const suggestions = await searchCommunityMembers(topic.communityId, textAfterAt);
        setMentionSuggestions(suggestions);
        setShowMentions(suggestions.length > 0);
      } else if (textAfterAt.length === 0) {
        setShowMentions(false);
        setMentionSuggestions([]);
      } else {
        setShowMentions(false);
      }
    } else {
      setShowMentions(false);
      setMentionSuggestions([]);
    }
  }, [topic]);

  const insertMention = useCallback((username: string) => {
    const lastAtIndex = newMessage.lastIndexOf('@');
    if (lastAtIndex >= 0) {
      const newText = newMessage.slice(0, lastAtIndex) + '@' + username + ' ';
      setNewMessage(newText);
    }
    setShowMentions(false);
    setMentionSuggestions([]);
  }, [newMessage]);

  const handleSend = async () => {
    if ((!newMessage.trim() && !selectedImageUri) || !user?.id || sending) return;

    setSending(true);
    const messageText = newMessage.trim();
    let imageUrl: string | undefined = undefined;

    if (selectedImageUri) {
      const uploadResult = await uploadChatImage(selectedImageUri, user.id);
      if (!uploadResult.success) {
        Alert.alert('Error', uploadResult.error || 'Failed to upload image');
        setSending(false);
        return;
      }
      imageUrl = uploadResult.url;
    }

    const result = await postMessage(topicId, user.id, messageText, undefined, imageUrl);
    
    if (result.success) {
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      
      if (topic && profile?.username && messageText) {
        createMentionNotifications(
          topicId,
          user.id,
          profile.username,
          messageText,
          topic.title,
          communityName
        );
      }
      
      setNewMessage('');
      setSelectedImageUri(null);
      setShowMentions(false);
      await loadData();
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    } else {
      Alert.alert('Error', result.error || 'Failed to send message');
    }
    setSending(false);
  };

  const handlePickImage = async () => {
    if (Platform.OS === 'web') {
      Alert.alert('Note', 'Image upload is available on iOS and Android via Expo Go');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    const result = await deleteMessage(messageId);
    if (result.success) {
      setMessages(prev => prev.filter(m => m.id !== messageId));
    } else {
      Alert.alert('Error', result.error || 'Failed to delete message');
    }
  };

  // Customize header based on topic
  useEffect(() => {
    if (topic?.title) {
      // Header is configured in _layout.tsx, but you could use Stack.Screen here
      // or use setOptions if using a header component
    }
  }, [topic]);

  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </ThemedView>
    );
  }

  if (!topic) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <ThemedText type="body" style={{ color: theme.textSecondary }}>
          Topic not found
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <>
      {/* Optional: Custom header configuration */}
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: theme.backgroundRoot }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ThemedView style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MessageBubble 
                message={item} 
                isOwn={item.authorId === user?.id}
                onDelete={item.authorId === user?.id ? () => handleDeleteMessage(item.id) : undefined}
              />
            )}
            ListHeaderComponent={
              <View style={styles.topicHeader}>
                <ThemedText type="h3">{topic.title}</ThemedText>
                <View style={styles.topicMeta}>
                  <ThemedText type="small" style={{ color: theme.textSecondary }}>
                    Started by @{topic.creatorUsername}
                  </ThemedText>
                  <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.md }}>
                    {topic.messageCount} {topic.messageCount === 1 ? 'message' : 'messages'}
                  </ThemedText>
                </View>
              </View>
            }
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center' }}>
                  No messages yet. Start the conversation!
                </ThemedText>
              </View>
            }
            contentContainerStyle={[
              styles.content,
              { paddingTop, paddingBottom: Spacing.lg },
            ]}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={theme.primary}
              />
            }
            onContentSizeChange={() => {
              if (messages.length > 0) {
                flatListRef.current?.scrollToEnd({ animated: false });
              }
            }}
          />

          {user ? (
            <View>
              {showMentions && mentionSuggestions.length > 0 ? (
                <View style={[styles.mentionDropdown, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
                  {mentionSuggestions.map((suggestion) => (
                    <Pressable
                      key={suggestion.userId}
                      style={({ pressed }) => [
                        styles.mentionItem,
                        { backgroundColor: pressed ? theme.backgroundSecondary : 'transparent' }
                      ]}
                      onPress={() => insertMention(suggestion.username)}
                    >
                      <View style={[styles.mentionAvatar, { backgroundColor: AVATAR_COLORS[suggestion.avatarColor % AVATAR_COLORS.length] }]}>
                        <ThemedText type="small" style={{ color: '#FFFFFF', fontWeight: '600' }}>
                          {suggestion.username.charAt(0).toUpperCase()}
                        </ThemedText>
                      </View>
                      <ThemedText type="body" style={{ marginLeft: Spacing.sm }}>
                        @{suggestion.username}
                      </ThemedText>
                    </Pressable>
                  ))}
                </View>
              ) : null}

              {selectedImageUri ? (
                <View style={[styles.selectedImagePreview, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
                  <Image
                    source={{ uri: selectedImageUri }}
                    style={styles.selectedImageThumbnail}
                    contentFit="cover"
                  />
                  <Pressable
                    onPress={() => setSelectedImageUri(null)}
                    style={styles.removeImageButton}
                  >
                    <Feather name="x" size={18} color="#FFFFFF" />
                  </Pressable>
                </View>
              ) : null}
              
              <View style={[styles.composer, { paddingBottom: paddingBottom + Spacing.md, backgroundColor: theme.backgroundDefault, borderTopColor: theme.border }]}>
                <TextInput
                  value={newMessage}
                  onChangeText={handleTextChange}
                  placeholder="Write a message... Use @ to mention"
                  placeholderTextColor={theme.textSecondary}
                  style={[
                    styles.input,
                    {
                      backgroundColor: theme.backgroundSecondary,
                      color: theme.text,
                    },
                  ]}
                  multiline
                  maxLength={1000}
                />
                <Pressable
                  onPress={handlePickImage}
                  disabled={sending || uploadingImage}
                  style={({ pressed }) => [
                    styles.imageButton,
                    {
                      backgroundColor: theme.backgroundSecondary,
                      opacity: pressed ? 0.9 : 1,
                    },
                  ]}
                >
                  <Feather 
                    name="image" 
                    size={20} 
                    color={theme.primary}
                  />
                </Pressable>
                <Pressable
                  onPress={handleSend}
                  disabled={(!newMessage.trim() && !selectedImageUri) || sending}
                  style={({ pressed }) => [
                    styles.sendButton,
                    {
                      backgroundColor: (newMessage.trim() || selectedImageUri) ? theme.primary : theme.backgroundSecondary,
                      opacity: pressed ? 0.9 : 1,
                    },
                  ]}
                >
                  {sending ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Feather 
                      name="send" 
                      size={20} 
                      color={(newMessage.trim() || selectedImageUri) ? '#FFFFFF' : theme.textSecondary} 
                    />
                  )}
                </Pressable>
              </View>
            </View>
          ) : null}
        </ThemedView>
      </KeyboardAvoidingView>
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
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
  },
  topicHeader: {
    marginBottom: Spacing.xl,
    paddingBottom: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  topicMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: Spacing.md,
    paddingHorizontal: Spacing.lg,
  },
  messageBubble: {
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
    marginLeft: Spacing.sm,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyState: {
    paddingVertical: Spacing['3xl'],
    alignItems: 'center',
  },
  composer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    borderTopWidth: 1,
  },
  input: {
    flex: 1,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: 16,
    maxHeight: 100,
    marginRight: Spacing.sm,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  selectedImagePreview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderTopWidth: 1,
  },
  selectedImageThumbnail: {
    width: 50,
    height: 50,
    borderRadius: BorderRadius.sm,
  },
  removeImageButton: {
    marginLeft: Spacing.sm,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: BorderRadius.md,
  },
  mentionDropdown: {
    borderTopWidth: 1,
    paddingVertical: Spacing.sm,
  },
  mentionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },
  mentionAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineupPreviewCard: {
    marginTop: Spacing.sm,
    marginBottom: Spacing.xs,
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
  },
  lineupPreviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineupPreviewIcon: {
    width: 28,
    height: 28,
    borderRadius: BorderRadius.xs,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  lineupPreviewInfo: {
    flex: 1,
  },
  lineupImageCard: {
    marginTop: Spacing.sm,
    marginBottom: Spacing.xs,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    overflow: 'hidden',
  },
  lineupImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: BorderRadius.md - 1,
  },
  lineupImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.sm,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});