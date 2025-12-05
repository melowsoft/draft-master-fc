import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TextInput, Switch, Alert, Platform, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Haptics from 'expo-haptics';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScreenKeyboardAwareScrollView } from '@/components/ScreenKeyboardAwareScrollView';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, BorderRadius, Colors } from '@/constants/theme';
import { RootStackParamList } from '@/navigation/types';
import { updateCommunity, fetchCommunityById } from '@/services/communityService';
import { useAuth } from '@/services/authContext';

type RouteParams = RouteProp<RootStackParamList, 'EditCommunity'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function EditCommunityScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteParams>();
  const { user } = useAuth();
  const { communityId } = route.params;

  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

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
        navigation.goBack();
      } else {
        Alert.alert('Error', result.error || 'Failed to update community');
      }
    } catch (error) {
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
    <ScreenKeyboardAwareScrollView>
      <View style={styles.content}>
        <View style={[styles.iconPreview, { backgroundColor: theme.primary + '20' }]}>
          <View style={[styles.largeIcon, { backgroundColor: theme.primary }]}>
            <Feather name="edit-2" size={40} color="#FFFFFF" />
          </View>
        </View>

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
