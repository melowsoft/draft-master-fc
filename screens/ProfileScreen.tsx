import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Alert, Platform, Modal, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';

import { ScreenScrollView } from '@/components/ScreenScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, BorderRadius, Colors } from '@/constants/theme';
import { loadLineups, loadUser, saveUser, clearAllData, UserData } from '@/data/storage';
import { Lineup } from '@/data/types';
import { useAuth } from '@/services/authContext';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const avatarImages = [
  require('@/assets/avatars/avatar-1.png'),
  require('@/assets/avatars/avatar-2.png'),
  require('@/assets/avatars/avatar-3.png'),
  require('@/assets/avatars/avatar-4.png'),
  require('@/assets/avatars/avatar-5.png'),
];

function StatCard({ icon, value, label }: { icon: string; value: string | number; label: string }) {
  const { theme } = useTheme();
  
  return (
    <View style={[styles.statCard, { backgroundColor: theme.backgroundDefault }]}>
      <Feather name={icon as any} size={24} color={theme.primary} />
      <ThemedText type="h3" style={styles.statValue}>{value}</ThemedText>
      <ThemedText type="small" style={{ color: theme.textSecondary }}>{label}</ThemedText>
    </View>
  );
}

function SettingsItem({ 
  icon, 
  label, 
  value,
  onPress,
  isDestructive = false,
}: { 
  icon: string; 
  label: string; 
  value?: string;
  onPress?: () => void;
  isDestructive?: boolean;
}) {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => { scale.value = withSpring(0.98); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={[
        styles.settingsItem,
        { backgroundColor: theme.backgroundDefault },
        animatedStyle,
      ]}
    >
      <View style={styles.settingsItemLeft}>
        <View style={[
          styles.settingsIcon, 
          { backgroundColor: isDestructive ? 'rgba(211,47,47,0.1)' : theme.backgroundSecondary }
        ]}>
          <Feather 
            name={icon as any} 
            size={18} 
            color={isDestructive ? Colors.light.error : theme.primary} 
          />
        </View>
        <ThemedText 
          type="body" 
          style={isDestructive ? { color: Colors.light.error } : undefined}
        >
          {label}
        </ThemedText>
      </View>
      <View style={styles.settingsItemRight}>
        {value ? (
          <ThemedText type="small" style={{ color: theme.textSecondary, marginRight: Spacing.sm }}>
            {value}
          </ThemedText>
        ) : null}
        <Feather name="chevron-right" size={18} color={theme.textSecondary} />
      </View>
    </AnimatedPressable>
  );
}

export default function ProfileScreen() {
  const { theme, isDark } = useTheme();
  const { signOut, profile, updateProfile } = useAuth();
  const [user, setUser] = useState<UserData | null>(null);
  const [lineups, setLineups] = useState<Lineup[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUsername, setEditUsername] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    if (profile) {
      setEditUsername(profile.username || 'Football Fan');
      setSelectedAvatar(profile.avatar_color || 0);
      if (profile.avatar_url) {
        setProfileImage(profile.avatar_url);
      }
    }
  }, [profile]);

  const loadUserData = async () => {
    const userData = await loadUser();
    const lineupsData = await loadLineups();
    setLineups(lineupsData);
    
    if (userData) {
      setUser(userData);
      setSelectedAvatar(userData.avatar);
      if (userData.avatarUrl) {
        setProfileImage(userData.avatarUrl);
      }
    } else {
      const defaultUser: UserData = {
        id: Date.now().toString(),
        name: 'Football Fan',
        avatar: 0,
        favoriteFormation: '4-3-3',
        createdAt: new Date().toISOString(),
      };
      await saveUser(defaultUser);
      setUser(defaultUser);
    }
  };

  const handleAvatarChange = async (index: number) => {
    setSelectedAvatar(index);
    
    if (user) {
      const updatedUser = { ...user, avatar: index };
      await saveUser(updatedUser);
      setUser(updatedUser);
    }
    
    await updateProfile({ avatar_color: index });
  };

  const handlePickImage = async () => {
    if (Platform.OS === 'web') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        base64: true,
      });

      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];
        if (asset.base64) {
          const imageUri = `data:image/jpeg;base64,${asset.base64}`;
          setProfileImage(imageUri);
        } else {
          setProfileImage(asset.uri);
        }
      }
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Permission Required',
          'Please allow access to your photo library to change your profile picture.',
          [
            { text: 'Cancel', style: 'cancel' },
            { 
              text: 'Open Settings', 
              onPress: async () => {
                try {
                  const { Linking } = await import('react-native');
                  await Linking.openSettings();
                } catch (error) {
                }
              }
            }
          ]
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        base64: true,
      });

      if (!result.canceled && result.assets[0]) {
        const asset = result.assets[0];
        if (asset.base64) {
          const imageUri = `data:image/jpeg;base64,${asset.base64}`;
          setProfileImage(imageUri);
        } else {
          setProfileImage(asset.uri);
        }
      }
    }
  };

  const handleSaveProfile = async () => {
    if (!editUsername.trim()) {
      Alert.alert('Error', 'Username cannot be empty');
      return;
    }

    setIsSaving(true);
    
    try {
      if (user) {
        const updatedUser = { 
          ...user, 
          name: editUsername.trim(),
          avatar: selectedAvatar,
          avatarUrl: profileImage || undefined,
        };
        await saveUser(updatedUser);
        setUser(updatedUser);
      }
      
      await updateProfile({ 
        username: editUsername.trim(),
        avatar_color: selectedAvatar,
        avatar_url: profileImage,
      });
      
      setShowEditModal(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleOpenEditModal = () => {
    setEditUsername(profile?.username || user?.name || 'Football Fan');
    setShowEditModal(true);
  };

  const handleLogout = async () => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm('Are you sure you want to log out?');
      if (confirmed) {
        await signOut();
      }
    } else {
      Alert.alert(
        'Log Out',
        'Are you sure you want to log out?',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Log Out', 
            onPress: async () => {
              await signOut();
            }
          },
        ]
      );
    }
  };

  const handleClearData = async () => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm('This will delete all your saved lineups, sign you out, and reset the app. This action cannot be undone. Continue?');
      if (confirmed) {
        await clearAllData();
        setLineups([]);
        setUser(null);
        setSelectedAvatar(0);
        setProfileImage(null);
        await signOut();
      }
    } else {
      Alert.alert(
        'Clear All Data',
        'This will delete all your saved lineups, sign you out, and reset the app. This action cannot be undone.',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Clear Data', 
            style: 'destructive', 
            onPress: async () => {
              await clearAllData();
              setLineups([]);
              setUser(null);
              setSelectedAvatar(0);
              setProfileImage(null);
              await signOut();
            }
          },
        ]
      );
    }
  };

  const totalVotes = lineups.reduce((sum, l) => sum + (l.votes || 0), 0);
  const displayName = profile?.username || user?.name || 'Football Fan';
  const memberSince = user ? new Date(user.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  }) : '';

  return (
    <ScreenScrollView>
      <View style={styles.profileHeader}>
        <View style={styles.avatarSection}>
          <Pressable onPress={handleOpenEditModal} style={styles.avatarContainer}>
            {profileImage ? (
              <Image 
                source={{ uri: profileImage }} 
                style={styles.avatarImage}
                contentFit="cover"
              />
            ) : (
              <Image 
                source={avatarImages[selectedAvatar] || avatarImages[0]} 
                style={styles.avatarImage}
                contentFit="cover"
              />
            )}
            <View style={[styles.editBadge, { backgroundColor: theme.primary }]}>
              <Feather name="edit-2" size={12} color="#FFFFFF" />
            </View>
          </Pressable>
        </View>
        
        <Pressable onPress={handleOpenEditModal} style={styles.nameContainer}>
          <ThemedText type="h3" style={styles.userName}>{displayName}</ThemedText>
          <Feather name="edit-2" size={16} color={theme.textSecondary} style={styles.editIcon} />
        </Pressable>
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          Member since {memberSince}
        </ThemedText>
      </View>

      <View style={styles.statsRow}>
        <StatCard icon="clipboard" value={lineups.length} label="Lineups" />
        <StatCard icon="arrow-up" value={totalVotes} label="Votes" />
        <StatCard icon="award" value={profile?.winnings_count || 0} label="Wins" />
      </View>

      <View style={styles.section}>
        <ThemedText type="h4" style={styles.sectionTitle}>Profile</ThemedText>
        <SettingsItem 
          icon="user" 
          label="Edit Profile" 
          value={displayName}
          onPress={handleOpenEditModal}
        />
      </View>

      <View style={styles.section}>
        <ThemedText type="h4" style={styles.sectionTitle}>Preferences</ThemedText>
        <SettingsItem 
          icon="grid" 
          label="Favorite Formation" 
          value={user?.favoriteFormation || '4-3-3'}
        />
        <SettingsItem 
          icon="moon" 
          label="Appearance" 
          value={isDark ? 'Dark' : 'Light'}
        />
      </View>

      <View style={styles.section}>
        <ThemedText type="h4" style={styles.sectionTitle}>App</ThemedText>
        <SettingsItem icon="info" label="About DraftMaster FC" />
        <SettingsItem icon="file-text" label="Terms of Service" />
        <SettingsItem icon="shield" label="Privacy Policy" />
      </View>

      <View style={styles.section}>
        <ThemedText type="h4" style={styles.sectionTitle}>Account</ThemedText>
        <SettingsItem 
          icon="log-out" 
          label="Log Out" 
          onPress={handleLogout}
        />
        <SettingsItem 
          icon="trash-2" 
          label="Clear All Data" 
          isDestructive
          onPress={handleClearData}
        />
      </View>

      <View style={styles.footer}>
        <ThemedText type="small" style={{ color: theme.textSecondary, textAlign: 'center' }}>
          DraftMaster FC v1.0.0
        </ThemedText>
      </View>

      <Modal
        visible={showEditModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowEditModal(false)}
      >
        <View style={styles.modalOverlay}>
          <ThemedView style={[styles.modalContent, { backgroundColor: theme.card }]}>
            <View style={styles.modalHeader}>
              <ThemedText type="h3">Edit Profile</ThemedText>
              <Pressable onPress={() => setShowEditModal(false)} style={styles.closeButton}>
                <Feather name="x" size={24} color={theme.text} />
              </Pressable>
            </View>

            <Pressable onPress={handlePickImage} style={styles.modalAvatarContainer}>
              {profileImage ? (
                <Image 
                  source={{ uri: profileImage }} 
                  style={styles.modalAvatarImage}
                  contentFit="cover"
                />
              ) : (
                <Image 
                  source={avatarImages[selectedAvatar] || avatarImages[0]} 
                  style={styles.modalAvatarImage}
                  contentFit="cover"
                />
              )}
              <View style={[styles.cameraButton, { backgroundColor: theme.primary }]}>
                <Feather name="camera" size={16} color="#FFFFFF" />
              </View>
            </Pressable>
            <ThemedText type="small" style={[styles.avatarHint, { color: theme.textSecondary }]}>
              Tap to upload your own photo
            </ThemedText>

            <View style={styles.inputSection}>
              <ThemedText type="body" style={styles.inputLabel}>Username</ThemedText>
              <TextInput
                style={[
                  styles.input,
                  { 
                    backgroundColor: theme.backgroundSecondary,
                    color: theme.text,
                    borderColor: theme.border,
                  }
                ]}
                value={editUsername}
                onChangeText={setEditUsername}
                placeholder="Enter your username"
                placeholderTextColor={theme.textSecondary}
                autoCapitalize="none"
                maxLength={30}
              />
            </View>

            <View style={styles.avatarSelectSection}>
              <ThemedText type="body" style={styles.inputLabel}>Choose Avatar</ThemedText>
              <View style={styles.avatarOptionsRow}>
                {avatarImages.map((avatar, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedAvatar(index);
                      setProfileImage(null);
                    }}
                    style={[
                      styles.avatarOptionItem,
                      selectedAvatar === index && !profileImage && styles.avatarOptionItemSelected,
                    ]}
                  >
                    <Image 
                      source={avatar} 
                      style={styles.avatarOptionImage}
                      contentFit="cover"
                    />
                  </Pressable>
                ))}
              </View>
            </View>

            <View style={styles.modalButtons}>
              <Pressable 
                onPress={() => setShowEditModal(false)} 
                style={[styles.modalButton, styles.cancelButton, { borderColor: theme.border }]}
              >
                <ThemedText type="body">Cancel</ThemedText>
              </Pressable>
              <Pressable 
                onPress={handleSaveProfile} 
                style={[styles.modalButton, styles.saveButton, { backgroundColor: theme.primary }]}
                disabled={isSaving}
              >
                <ThemedText type="body" style={{ color: '#FFFFFF' }}>
                  {isSaving ? 'Saving...' : 'Save'}
                </ThemedText>
              </Pressable>
            </View>
          </ThemedView>
        </View>
      </Modal>
    </ScreenScrollView>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: 'center',
    marginBottom: Spacing['3xl'],
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: Spacing.md,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  userName: {
    marginRight: Spacing.sm,
  },
  editIcon: {
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing['3xl'],
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.xl,
    borderRadius: BorderRadius.lg,
  },
  statValue: {
    marginVertical: Spacing.xs,
  },
  section: {
    marginBottom: Spacing['2xl'],
  },
  sectionTitle: {
    marginBottom: Spacing.md,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  settingsItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    marginTop: Spacing.xl,
    marginBottom: Spacing['2xl'],
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    padding: Spacing.xl,
    paddingBottom: Spacing['3xl'],
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  closeButton: {
    padding: Spacing.sm,
  },
  modalAvatarContainer: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: Spacing.sm,
  },
  modalAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalAvatarImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  avatarHint: {
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  inputSection: {
    marginBottom: Spacing.xl,
  },
  inputLabel: {
    marginBottom: Spacing.sm,
  },
  input: {
    height: 48,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    fontSize: 16,
    borderWidth: 1,
  },
  avatarSelectSection: {
    marginBottom: Spacing.xl,
  },
  avatarOptionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    marginTop: Spacing.sm,
    justifyContent: 'center',
  },
  avatarOptionItem: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  avatarOptionItemSelected: {
    borderWidth: 3,
    borderColor: '#1B5E20',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarOptionImage: {
    width: '100%',
    height: '100%',
    borderRadius: 26,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  modalButton: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    borderWidth: 1,
  },
  saveButton: {},
});
