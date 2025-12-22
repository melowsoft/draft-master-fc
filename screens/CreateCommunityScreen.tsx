import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform, Pressable, StyleSheet, Switch, TextInput, View } from 'react-native';

import { ScreenKeyboardAwareScrollView } from '@/components/ScreenKeyboardAwareScrollView';
import { ThemedText } from '@/components/ThemedText';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { createCommunity } from '@/services/communityService';

export default function CreateCommunityScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { user } = useAuth();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const isValid = name.trim().length >= 3;

  const handleCreate = async () => {
    if (!user?.id || !isValid) return;

    setIsCreating(true);
    try {
      const result = await createCommunity(
        name.trim(),
        description.trim() || null,
        user.id,
        isPrivate
      );

      if (result.success && result.community) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        console.log('Navigating to community:', result.community);
        router.replace(`/community-detail/${result.community.id}`);
      } else {
        Alert.alert('Error', result.error || 'Failed to create community');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to create community');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <ScreenKeyboardAwareScrollView>
      <View style={styles.content}>
        <View style={[styles.iconPreview, { backgroundColor: theme.primary + '20' }]}>
          <View style={[styles.largeIcon, { backgroundColor: theme.primary }]}>
            <Feather name="users" size={40} color="#FFFFFF" />
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <ThemedText type="body" style={{ fontWeight: '600', marginBottom: Spacing.sm }}>
              Community Name *
            </ThemedText>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter community name"
              placeholderTextColor={theme.textSecondary}
              style={[
                styles.input,
                {
                  backgroundColor: theme.backgroundDefault,
                  color: theme.text,
                  borderColor: name.length > 0 && name.length < 3 ? Colors.light.error : theme.border,
                },
              ]}
              maxLength={50}
            />
            {name.length > 0 && name.length < 3 ? (
              <ThemedText type="small" style={{ color: Colors.light.error, marginTop: Spacing.xs }}>
                Name must be at least 3 characters
              </ThemedText>
            ) : null}
          </View>

          <View style={styles.inputGroup}>
            <ThemedText type="body" style={{ fontWeight: '600', marginBottom: Spacing.sm }}>
              Description
            </ThemedText>
            <TextInput
              value={description}
              onChangeText={setDescription}
              placeholder="What's this community about? (optional)"
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
              maxLength={200}
            />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.xs, textAlign: 'right' }}>
              {description.length}/200
            </ThemedText>
          </View>

          <View style={[styles.toggleRow, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
            <View style={styles.toggleInfo}>
              <View style={styles.toggleHeader}>
                <Feather name={isPrivate ? 'lock' : 'globe'} size={20} color={theme.primary} />
                <ThemedText type="body" style={{ fontWeight: '600', marginLeft: Spacing.sm }}>
                  {isPrivate ? 'Private Community' : 'Public Community'}
                </ThemedText>
              </View>
              <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.xs }}>
                {isPrivate 
                  ? 'Only invited members can join and see content'
                  : 'Anyone can find and join this community'
                }
              </ThemedText>
            </View>
            <Switch
              value={isPrivate}
              onValueChange={setIsPrivate}
              trackColor={{ false: theme.backgroundSecondary, true: theme.primary + '50' }}
              thumbColor={isPrivate ? theme.primary : '#FFFFFF'}
            />
          </View>

            <View style={[styles.infoBox, { backgroundColor: theme.backgroundSecondary }]}>
              <Feather name="info" size={16} color={theme.textSecondary} />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.sm, flex: 1 }}>
              You&apos;ll be the owner of this community and can invite other members to join.
            </ThemedText>
          </View>

          <Pressable
            onPress={handleCreate}
            disabled={!isValid || isCreating}
            style={({ pressed }) => [
              styles.createButton,
              {
                backgroundColor: isValid ? theme.primary : theme.backgroundSecondary,
                opacity: (pressed && isValid) ? 0.9 : 1,
              },
            ]}
          >
            {isCreating ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Feather name="plus" size={20} color={isValid ? '#FFFFFF' : theme.textSecondary} />
                <ThemedText 
                  type="body" 
                  style={{ 
                    color: isValid ? '#FFFFFF' : theme.textSecondary, 
                    fontWeight: '600', 
                    marginLeft: Spacing.sm 
                  }}
                >
                  Create Community
                </ThemedText>
              </>
            )}
          </Pressable>
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
    minHeight: 100,
    paddingTop: Spacing.md,
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  toggleInfo: {
    flex: 1,
    marginRight: Spacing.md,
  },
  toggleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoBox: {
    flexDirection: 'row',
    padding: Spacing.md,
    borderRadius: BorderRadius.sm,
  },
  createButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginTop: Spacing.lg,
  },
});
