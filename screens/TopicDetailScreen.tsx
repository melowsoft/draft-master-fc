import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FullscreenImageView } from '@/components/FullscreenImageView';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';

import {
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Shadows, Spacing } from '@/constants/theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import {
  Topic,
  TopicMessage,
  createMentionNotifications,
  deleteMessage,
  fetchCommunityById,
  fetchTopicById,
  fetchTopicMessages,
  postMessage,
  searchCommunityMembers,
  uploadChatImage,
} from '@/services/communityService';
import * as ImagePicker from 'expo-image-picker';

type UserProfile = { id: string; username: string };

const AVATAR_COLORS = ['#E53935', '#1E88E5', '#FFB300', '#43A047', '#7B1FA2'];
const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface MentionSuggestion {
  userId: string;
  username: string;
  avatarColor: number;
}

// New improved HighlightedText with better styling
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
    <Text style={{ 
      color: isOwn ? '#FFFFFF' : theme.text,
      fontSize: 15,
      lineHeight: 20,
    }}>
      {parts.map((part, index) => {
        if (part.startsWith('@')) {
          return (
            <Text 
              key={index} 
              style={{ 
                color: isOwn ? '#FFD700' : highlightColor,
                fontWeight: '700',
                backgroundColor: isOwn ? 'rgba(255, 215, 0, 0.15)' : 'rgba(59, 130, 246, 0.1)',
                paddingHorizontal: 4,
                borderRadius: 4,
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

// Improved time formatter
function formatTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 7) return `${diffDays}d`;
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Improved MessageBubble with better visuals
function MessageBubble({ 
  message, 
  isOwn,
  onDelete,
  showAvatar = true,
   onImagePress
}: { 
  message: TopicMessage; 
  isOwn: boolean;
  onDelete?: () => void;
    showAvatar?: boolean;
     onImagePress?: (imageUrl: string | undefined) => void; 
}) {
  const { theme } = useTheme();
  const avatarColor = AVATAR_COLORS[message.authorAvatarColor % AVATAR_COLORS.length];
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleLongPress = () => {
    if (isOwn && onDelete) {
      // Add haptic feedback
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      
      Alert.alert(
        'Delete Message',
        'Are you sure you want to delete this message?',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Delete', 
            style: 'destructive', 
            onPress: () => {
              if (Platform.OS !== 'web') {
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
              }
              onDelete();
            }
          },
        ]
      );
    }
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View 
      style={[
        styles.messageRow, 
        { 
          justifyContent: isOwn ? 'flex-end' : 'flex-start',
          transform: [{ scale: scaleAnim }],
        }
      ]}
    >
      {!isOwn && showAvatar && (
        <View style={[styles.messageAvatar, { backgroundColor: avatarColor }]}>
          <Text style={styles.avatarText}>
            {message.authorUsername.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}
      
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress}
        delayLongPress={300}
        style={({ pressed }) => [
          styles.messageBubble,
          {
            backgroundColor: isOwn ? theme.primary : theme.backgroundDefault,
            maxWidth: SCREEN_WIDTH * 0.75,
            borderBottomLeftRadius: isOwn ? BorderRadius.lg : BorderRadius.xs,
            borderBottomRightRadius: isOwn ? BorderRadius.xs : BorderRadius.lg,
            ...Shadows.sm,
          },
        ]}
      >
        {!isOwn && showAvatar && (
          <View style={styles.messageHeader}>
            <Text style={[styles.authorName, { color: theme.primary }]}>
              @{message.authorUsername}
            </Text>
          </View>
        )}
        
        <View style={styles.messageContent}>
          {message.body ? (
            <HighlightedText 
              text={message.body} 
              isOwn={isOwn}
              highlightColor={theme.primary}
            />
          ) : null}

  {message.imageUrl && onImagePress ? (
    <Pressable
      onPress={() => {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onImagePress(message.imageUrl); // Now this works
      }}
      style={({ pressed }) => [
        styles.imagePressable,
        { opacity: pressed ? 0.9 : 1 }
      ]}
    >
      <Image
        source={{ uri: message.imageUrl }}
        style={styles.messageImage}
        contentFit="cover"
      />
      {/* Zoom indicator */}
      <View style={styles.zoomIndicator}>
        <Feather name="maximize-2" size={14} color="rgba(255,255,255,0.8)" />
      </View>
    </Pressable>
  ) : null}
        </View>

        <View style={styles.messageFooter}>
          <Text style={[
            styles.timeText,
            { color: isOwn ? 'rgba(255,255,255,0.7)' : theme.textSecondary }
          ]}>
            {formatTime(message.createdAt)}
          </Text>
          {isOwn && (
            <Feather 
              name="check" 
              size={12} 
              color={isOwn ? 'rgba(255,255,255,0.7)' : theme.textSecondary} 
              style={{ marginLeft: 4 }}
            />
          )}
        </View>
      </Pressable>

      {isOwn && showAvatar && (
        <View style={[styles.messageAvatar, { backgroundColor: theme.primary }]}>
          <Text style={styles.avatarText}>
            {message.authorUsername.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}
    </Animated.View>
  );
}

// Floating Action Button for new messages
function ScrollToBottomButton({ onPress, unreadCount }: { onPress: () => void; unreadCount: number }) {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isVisible, fadeAnim]);

  return (
    <Animated.View style={[styles.scrollToBottomButton, { opacity: fadeAnim }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.fab,
          {
            backgroundColor: theme.primary,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
      >
        <Feather name="chevron-down" size={20} color="#FFFFFF" />
        {unreadCount > 0 && (
          <View style={styles.fabBadge}>
            <Text style={styles.fabBadgeText}>
              {unreadCount > 9 ? '9+' : unreadCount}
            </Text>
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
}

export default function TopicDetailScreen() {
  const { theme, isDark } = useTheme();
  const { paddingBottom, safeArea } = useScreenInsets();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user, profile } = useAuth();
  const topHeaderInset = safeArea.top;
  
  const topicId = params.id as string;
  const flatListRef = useRef<FlatList>(null);
  const inputRef = useRef<TextInput>(null);

  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

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
      inputRef.current?.focus();
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
      setUploadingImage(true);
      const uploadResult = await uploadChatImage(selectedImageUri, user.id);
      setUploadingImage(false);
      
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
      
      // Scroll to bottom with smooth animation
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
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
      inputRef.current?.focus();
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera permission is needed to take photos');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImageUri(result.assets[0].uri);
      inputRef.current?.focus();
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

  const handleScrollToBottom = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
    setShowScrollButton(false);
    setUnreadCount(0);
  };

  const handleScroll = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isNearBottom = contentOffset.y + layoutMeasurement.height >= contentSize.height - 100;
    setShowScrollButton(!isNearBottom);
    
    // Count unread messages when scrolling up
    if (!isNearBottom && messages.length > 0) {
      const lastVisibleIndex = Math.floor((contentOffset.y + layoutMeasurement.height) / 100);
      const newUnread = Math.max(0, messages.length - lastVisibleIndex - 3);
      setUnreadCount(newUnread);
    }
  };

  // Custom header with community info
  useEffect(() => {
    if (topic) {
      // You could update header options here if needed
    }
  }, [topic]);

  if (loading) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color={theme.primary} />
        <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md }}>
          Loading conversation...
        </ThemedText>
      </ThemedView>
    );
  }

  if (!topic) {
    return (
      <ThemedView style={[styles.container, styles.centerContent]}>
        <Feather name="alert-circle" size={48} color={theme.textSecondary} />
        <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md }}>
          Conversation not found
        </ThemedText>
        <Pressable
          onPress={() => router.back()}
          style={[styles.backButton, { marginTop: Spacing.lg }]}
        >
          <ThemedText type="body" style={{ color: theme.primary }}>
            Go Back
          </ThemedText>
        </Pressable>
      </ThemedView>
    );
  }

  return (
     <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: topic.title,
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <ThemedView style={styles.container}>
          {/* Community Header */}
          <View
            style={[
              styles.communityHeader,
              {
                backgroundColor: theme.backgroundDefault,
                paddingTop: topHeaderInset + Spacing.sm,
              },
            ]}
          >
            <View style={styles.communityInfoRow}>
              <Pressable onPress={() => router.back()} style={styles.backIconButton}>
                <Feather name="arrow-left" size={22} color={theme.text} />
              </Pressable>
              <View style={styles.communityInfo}>
                <Feather name="users" size={16} color={theme.primary} />
                <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 4 }}>
                  {communityName}
                </ThemedText>
              </View>
            </View>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Feather name="message-circle" size={14} color={theme.textSecondary} />
                <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 4 }}>
                  {topic.messageCount} messages
                </ThemedText>
              </View>
              <ThemedText type="small" style={{ color: theme.textSecondary }}>
                Started by @{topic.creatorUsername}
              </ThemedText>
            </View>
          </View>

          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              const previousMessage = index > 0 ? messages[index - 1] : null;
              const showAvatar = !previousMessage || 
                previousMessage.authorId !== item.authorId || 
                (new Date(item.createdAt).getTime() - new Date(previousMessage.createdAt).getTime()) > 5 * 60 * 1000; // 5 minutes
              
              return (
                 <MessageBubble 
    message={item} 
    isOwn={item.authorId === user?.id}
    onDelete={item.authorId === user?.id ? () => handleDeleteMessage(item.id) : undefined}
    onImagePress={(imageUrl) => {
      // Add haptic feedback
      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      setFullscreenImage(imageUrl);
    }}
  />
              );
            }}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
                  <Feather name="message-circle" size={40} color={theme.textSecondary} />
                </View>
                <ThemedText type="h4" style={{ marginTop: Spacing.lg, textAlign: 'center' }}>
                  No messages yet
                </ThemedText>
                <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.sm }}>
                  Start the conversation!
                </ThemedText>
              </View>
            }
            contentContainerStyle={[
              styles.content,
              { paddingTop: Spacing.lg, paddingBottom: Spacing['3xl'] },
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
            onScroll={handleScroll}
            scrollEventThrottle={16}
            onContentSizeChange={() => {
              if (messages.length > 0 && !showScrollButton) {
                setTimeout(() => {
                  flatListRef.current?.scrollToEnd({ animated: false });
                }, 100);
              }
            }}
          />

          {/* Scroll to bottom button */}
          {showScrollButton && (
            <ScrollToBottomButton 
              onPress={handleScrollToBottom} 
              unreadCount={unreadCount} 
            />
          )}

          {/* Mention suggestions dropdown */}
          {showMentions && mentionSuggestions.length > 0 && (
            <BlurView
              intensity={80}
              tint={isDark ? 'dark' : 'light'}
              style={styles.mentionDropdown}
            >
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
                    <Text style={styles.mentionAvatarText}>
                      {suggestion.username.charAt(0).toUpperCase()}
                    </Text>
                  </View>
                  <ThemedText type="body" style={{ marginLeft: Spacing.sm }}>
                    @{suggestion.username}
                  </ThemedText>
                </Pressable>
              ))}
            </BlurView>
          )}

          {/* Selected image preview */}
          {selectedImageUri && (
            <View style={[styles.selectedImagePreview, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
              <Image
                source={{ uri: selectedImageUri }}
                style={styles.selectedImageThumbnail}
                contentFit="cover"
              />
              <View style={styles.selectedImageInfo}>
                <ThemedText type="small" style={{ color: theme.textSecondary }}>
                  Image ready to send
                </ThemedText>
              </View>
              <Pressable
                onPress={() => setSelectedImageUri(null)}
                style={styles.removeImageButton}
              >
                <Feather name="x" size={18} color="#FFFFFF" />
              </Pressable>
            </View>
          )}

          {/* Message composer */}
          {user && (
            <View style={[
              styles.composerContainer,
              { 
                paddingBottom: paddingBottom + Spacing.md,
                backgroundColor: theme.backgroundDefault,
                borderTopColor: theme.border,
              }
            ]}>
              <View style={styles.composer}>
                {/* Attachment button with menu */}
                <Pressable
                  onPress={() => {
                    Alert.alert(
                      'Add Attachment',
                      'Choose an option',
                      [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Photo Library', onPress: handlePickImage },
                        { text: 'Take Photo', onPress: handleTakePhoto },
                      ]
                    );
                  }}
                  disabled={sending || uploadingImage}
                  style={({ pressed }) => [
                    styles.attachmentButton,
                    {
                      backgroundColor: theme.backgroundSecondary,
                      opacity: pressed ? 0.9 : 1,
                    },
                  ]}
                >
                  <Feather 
                    name="plus" 
                    size={22} 
                    color={theme.primary}
                  />
                </Pressable>

                {/* Message input */}
                <TextInput
                  ref={inputRef}
                  value={newMessage}
                  onChangeText={handleTextChange}
                  placeholder="Type a message..."
                  placeholderTextColor={theme.textSecondary}
                  style={[
                    styles.input,
                    {
                      backgroundColor: theme.backgroundSecondary,
                      color: theme.text,
                      borderColor: theme.border,
                    },
                  ]}
                  multiline
                  maxLength={1000}
                  textAlignVertical="center"
                />

                {/* Send button */}
                <Pressable
                  onPress={handleSend}
                  disabled={(!newMessage.trim() && !selectedImageUri) || sending || uploadingImage}
                  style={({ pressed }) => [
                    styles.sendButton,
                    {
                      backgroundColor: (newMessage.trim() || selectedImageUri) ? theme.primary : theme.backgroundSecondary,
                      opacity: pressed ? 0.9 : 1,
                    },
                  ]}
                >
                  {sending || uploadingImage ? (
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
              
              {/* Character counter */}
              {newMessage.length > 0 && (
                <ThemedText type="small" style={{ 
                  color: newMessage.length > 900 ? Colors.light.error : theme.textSecondary, 
                  textAlign: 'right', 
                  marginTop: Spacing.xs,
                  marginHorizontal: Spacing.lg,
                }}>
                  {newMessage.length}/1000
                </ThemedText>
              )}
            </View>
          )}
        </ThemedView>
      </KeyboardAvoidingView>
       <FullscreenImageView
        visible={!!fullscreenImage}
        imageUrl={fullscreenImage || ''}
        onClose={() => setFullscreenImage(null)}
      />
    </GestureHandlerRootView>
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
  },
  communityHeader: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  communityInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  communityInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  backIconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: Spacing.sm,
  },
  messageAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Spacing.sm,
    ...Shadows.xs,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  messageBubble: {
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    ...Shadows.sm,
  },
  messageHeader: {
    marginBottom: Spacing.xs,
  },
  authorName: {
    fontSize: 13,
    fontWeight: '600',
  },
  messageContent: {
    marginBottom: Spacing.xs,
  },
  messageFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  timeText: {
    fontSize: 11,
    fontWeight: '500',
  },
  imageContainer: {
    position: 'relative',
    marginTop: Spacing.sm,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
  },
  messageImage: {
    width: '100%',
    aspectRatio: 1,
    maxWidth: 200,
    borderRadius: BorderRadius.md,
  },
  zoomIndicator: {
  position: 'absolute',
  top: 8,
  right: 8,
  width: 28,
  height: 28,
  borderRadius: 14,
  backgroundColor: 'rgba(0,0,0,0.5)',
  alignItems: 'center',
  justifyContent: 'center',
},
  imageOverlay: {
    position: 'absolute',
    top: Spacing.xs,
    right: Spacing.xs,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    borderRadius: BorderRadius.xs,
  },
  emptyState: {
    paddingVertical: Spacing['4xl'],
    alignItems: 'center',
  },
  emptyIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  composerContainer: {
    borderTopWidth: 1,
    paddingTop: Spacing.md,
  },
  composer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    gap: Spacing.sm,
  },
  attachmentButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    fontSize: 16,
    maxHeight: 120,
    minHeight: 44,
    borderWidth: 1,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedImagePreview: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderTopWidth: 1,
    marginTop: Spacing.md,
  },
  selectedImageThumbnail: {
    width: 60,
    height: 60,
    borderRadius: BorderRadius.md,
  },
  selectedImageInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
   imagePressable: {
    position: 'relative', // For positioning the zoom indicator
    marginTop: Spacing.sm,
    marginBottom: Spacing.xs,
    borderRadius: BorderRadius.md, // Optional: rounded corners
    overflow: 'hidden', // Keeps the image within rounded corners
  },
  removeImageButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.xs,
  },
  mentionDropdown: {
    marginHorizontal: Spacing.lg,
    marginBottom: Spacing.sm,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    ...Shadows.md,
  },
  mentionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
  },
  mentionAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mentionAvatarText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  scrollToBottomButton: {
    position: 'absolute',
    bottom: 100,
    right: Spacing.lg,
    zIndex: 1000,
  },
  fab: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    ...Shadows.md,
  },
  fabBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  fabBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
});
