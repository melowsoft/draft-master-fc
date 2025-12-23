import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Keyboard,
    Platform,
    Pressable,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

import { ScreenKeyboardAwareScrollView } from '@/components/ScreenKeyboardAwareScrollView';
import { ThemedText } from '@/components/ThemedText';
import { BorderRadius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { createTopic } from '@/services/communityService';

export default function CreateTopicScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  
  // Get parameters from route
  const communityId = params.communityId as string;
  const communityName = params.communityName as string;

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const canSubmit = title.trim().length >= 3 && message.trim().length >= 1;

  useEffect(() => {
    if (Platform.OS === 'web') return;
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleSubmit = async () => {
    if (!canSubmit || !user?.id) return;

    setIsSubmitting(true);
    try {
      const result = await createTopic(
        communityId,
        user.id,
        title.trim(),
        message.trim()
      );

      if (result.success && result.topicId) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        // Navigate to the new topic detail screen
        router.replace(`/topic-detail/${result.topicId}`);
      } else {
        Alert.alert('Error', result.error || 'Failed to create topic');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to create topic');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <>
      {/* Optional: Custom header for this screen */}
      <ScreenKeyboardAwareScrollView
        bottomOffset={Spacing['2xl']}
        extraKeyboardSpace={Spacing.buttonHeight + Spacing['4xl']}
        keyboardShouldPersistTaps="always"
      >
        <View style={[styles.content, isKeyboardVisible ? styles.contentKeyboardVisible : null]}>
          {!isKeyboardVisible ? (
            <View style={[styles.iconPreview, { backgroundColor: theme.primary + '20' }]}>
              <View style={[styles.largeIcon, { backgroundColor: theme.primary }]}>
                <Feather name="message-circle" size={40} color="#FFFFFF" />
              </View>
              <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md }}>
                New conversation in {communityName}
              </ThemedText>
            </View>
          ) : null}

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <ThemedText type="body" style={{ fontWeight: '600', marginBottom: Spacing.sm }}>
                Topic Title
              </ThemedText>
              <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="What's this conversation about?"
                placeholderTextColor={theme.textSecondary}
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.backgroundDefault,
                    color: theme.text,
                    borderColor: theme.border,
                  },
                ]}
                maxLength={100}
                autoFocus
              />
              <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.xs, textAlign: 'right' }}>
                {title.length}/100
              </ThemedText>
            </View>

            <View style={styles.inputGroup}>
              <ThemedText type="body" style={{ fontWeight: '600', marginBottom: Spacing.sm }}>
                Your Message
              </ThemedText>
              <TextInput
                value={message}
                onChangeText={setMessage}
                placeholder="Start the conversation..."
                placeholderTextColor={theme.textSecondary}
                style={[
                  styles.input,
                  styles.textArea,
                  {
                    backgroundColor: theme.backgroundDefault,
                    color: theme.text,
                    borderColor: theme.border,
                  },
                ]}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                maxLength={1000}
              />
              <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.xs, textAlign: 'right' }}>
                {message.length}/1000
              </ThemedText>
            </View>

            <View style={styles.buttonRow}>
              <Pressable
                onPress={handleCancel}
                style={({ pressed }) => [
                  styles.cancelButton,
                  {
                    backgroundColor: theme.backgroundSecondary,
                    opacity: pressed ? 0.9 : 1,
                    borderColor: theme.border,
                  },
                ]}
              >
                <ThemedText 
                  type="body" 
                  style={{ 
                    color: theme.textSecondary,
                    fontWeight: '600', 
                  }}
                >
                  Cancel
                </ThemedText>
              </Pressable>

              <Pressable
                onPress={handleSubmit}
                disabled={!canSubmit || isSubmitting}
                style={({ pressed }) => [
                  styles.submitButton,
                  {
                    backgroundColor: canSubmit ? theme.primary : theme.backgroundSecondary,
                    opacity: pressed ? 0.9 : 1,
                  },
                ]}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="#FFFFFF" />
                ) : (
                  <>
                    <Feather name="send" size={20} color={canSubmit ? '#FFFFFF' : theme.textSecondary} />
                    <ThemedText 
                      type="body" 
                      style={{ 
                        color: canSubmit ? '#FFFFFF' : theme.textSecondary, 
                        fontWeight: '600', 
                        marginLeft: Spacing.sm 
                      }}
                    >
                      Start
                    </ThemedText>
                  </>
                )}
              </Pressable>
            </View>

            {!canSubmit && title.length > 0 ? (
              <ThemedText type="small" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.md }}>
                {title.trim().length < 3 ? 'Title must be at least 3 characters' : 'Please add your first message'}
              </ThemedText>
            ) : null}
          </View>
        </View>
      </ScreenKeyboardAwareScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing['3xl'],
  },
  contentKeyboardVisible: {
    paddingTop: 0,
  },
  iconPreview: {
    alignItems: 'center',
    paddingVertical: Spacing['3xl'],
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.xl,
  },
  largeIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    gap: Spacing.lg,
  },
  inputGroup: {},
  input: {
    borderWidth: 1,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    fontSize: 16,
  },
  textArea: {
    minHeight: 120,
    paddingTop: Spacing.md,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  submitButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
  },
  cancelButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
});
