import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, Platform, Pressable, StyleSheet, Switch, TextInput, View } from 'react-native';

import { ScreenKeyboardAwareScrollView } from '@/components/ScreenKeyboardAwareScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { fetchCommunityById, updateCommunity } from '@/services/communityService';

export default function EditCommunityScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user } = useAuth();
  const communityId = (params.id ?? params.communityId) as string;

  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  React.useEffect(() => {
    if (Platform.OS === 'web') return;
    const showSub = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
    const hideSub = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  React.useEffect(() => {
    const loadCommunity = async () => {
      try {
        const community = await fetchCommunityById(communityId, user?.id);
        if (community) {
          setDescription(community.description || '');
          setIsPrivate(community.isPrivate);
        }
      } catch (error) {
        console.error('Error loading community:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCommunity();
  }, [communityId, user?.id]);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const result = await updateCommunity(
        communityId,
        description.trim() || null,
        isPrivate
      );

      if (result.success) {
        if (Platform.OS !== 'web') {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        router.back();
      } else {
        Alert.alert('Error', result.error || 'Failed to update community');
      }
    } catch {
      Alert.alert('Error', 'Failed to update community');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large" color={theme.primary} />
      </ThemedView>
    );
  }

  return (
    <ScreenKeyboardAwareScrollView
      bottomOffset={Spacing['4xl']}
      extraKeyboardSpace={Spacing.buttonHeight + Spacing['4xl']}
      keyboardShouldPersistTaps="always"
      contentContainerStyle={{ paddingBottom: isKeyboardVisible ? 100 : 0 }}
    >
      <View style={[styles.content, isKeyboardVisible ? styles.contentKeyboardVisible : null]}>
        {!isKeyboardVisible ? (
          <View style={[styles.iconPreview, { backgroundColor: theme.primary + '20' }]}>
            <View style={[styles.largeIcon, { backgroundColor: theme.primary }]}>
              <Feather name="edit-2" size={40} color="#FFFFFF" />
            </View>
          </View>
        ) : null}

        <View style={styles.form}>
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
              Community name cannot be changed once created.
            </ThemedText>
          </View>

          <Pressable
            onPress={handleSave}
            disabled={isSaving}
            style={({ pressed }) => [
              styles.saveButton,
              {
                backgroundColor: theme.primary,
                opacity: pressed ? 0.9 : 1,
              },
            ]}
          >
            {isSaving ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <>
                <Feather name="check" size={20} color="#FFFFFF" />
                <ThemedText 
                  type="body" 
                  style={{ 
                    color: '#FFFFFF', 
                    fontWeight: '600', 
                    marginLeft: Spacing.sm 
                  }}
                >
                  Save Changes
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
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
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginTop: Spacing.lg,
  },
});
