import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TextInput, Alert, Platform, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';

import { ThemedText } from '@/components/ThemedText';
import { ScreenKeyboardAwareScrollView } from '@/components/ScreenKeyboardAwareScrollView';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, BorderRadius } from '@/constants/theme';
import { createTopic } from '@/services/communityService';
import { useAuth } from '@/services/authContext';

export default function CreateTopicScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  const communityId = params.communityId as string;
  const communityName = params.communityName as string;

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = title.trim().length >= 3 && message.trim().length >= 1;

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

  return (
    <ScreenKeyboardAwareScrollView>
      <View style={styles.content}>
        <View style={[styles.iconPreview, { backgroundColor: theme.primary + '20' }]}>
          <View style={[styles.largeIcon, { backgroundColor: theme.primary }]}>
            <Feather name="message-circle" size={40} color="#FFFFFF" />
          </View>
          <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md }}>
            New conversation in {communityName}
          </ThemedText>
        </View>

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
                  Start Conversation
                </ThemedText>
              </>
            )}
          </Pressable>

          {!canSubmit && title.length > 0 ? (
            <ThemedText type="small" style={{ color: theme.textSecondary, textAlign: 'center', marginTop: Spacing.md }}>
              {title.trim().length < 3 ? 'Title must be at least 3 characters' : 'Please add your first message'}
            </ThemedText>
          ) : null}
        </View>
      </View>
    </ScreenKeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
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
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginTop: Spacing.lg,
  },
});
