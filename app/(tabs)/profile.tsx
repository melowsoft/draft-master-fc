import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { clearAllData, loadLineups, loadUser, saveUser, UserData } from '@/data/storage';
import { Lineup } from '@/data/types';
import { useScreenInsets } from '@/hooks/use-screen-insets'; // Add this import
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { useRouter } from 'expo-router';

// Note: You can create custom avatar components or use initials
const AVATAR_COLORS = ['#1B5E20', '#0D47A1', '#4A148C', '#B71C1C', '#E65100'];

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
  const { paddingTop } = useScreenInsets(); // Get safe area insets
  const router = useRouter();
  
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
    // Request permissions
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
                console.error('Error opening settings:', error);
              }
            }
          }
        ]
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
      base64: Platform.OS === 'web', // Base64 only needed for web
    });

    if (!result.canceled && result.assets[0]) {
      const asset = result.assets[0];
      if (Platform.OS === 'web' && asset.base64) {
        // For web, use base64
        const imageUri = `data:image/jpeg;base64,${asset.base64}`;
        setProfileImage(imageUri);
      } else {
        // For mobile, use the URI directly
        setProfileImage(asset.uri);
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
      
      // Only send the profile image URL if we're not using base64
      // For mobile, you'd need to upload the image to a server first
      const avatarUrl = Platform.OS === 'web' && profileImage?.startsWith('data:') 
        ? profileImage 
        : null;
      
      await updateProfile({ 
        username: editUsername.trim(),
        avatar_color: selectedAvatar,
        avatar_url: avatarUrl,
      });
      
      setShowEditModal(false);
    } catch (error) {
      console.error('Error saving profile:', error);
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
  
  const handleUpgrade = () => {
    router.push('/subscription');
  };

  const totalVotes = lineups.reduce((sum, l) => sum + (l.votes || 0), 0);
  const displayName = profile?.username || user?.name || 'Football Fan';
  const memberSince = user ? new Date(user.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  }) : '';

  // Get user initials for avatar fallback
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  };

  return (
    <ThemedView style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={[styles.profileHeader, { paddingTop }]}>
          <View style={styles.avatarSection}>
            <Pressable onPress={handleOpenEditModal} style={styles.avatarContainer}>
              {profileImage ? (
                <Image 
                  source={{ uri: profileImage }} 
                  style={styles.avatarImage}
                  contentFit="cover"
                  transition={200}
                />
              ) : (
                <View style={[
                  styles.avatarFallback, 
                  { backgroundColor: AVATAR_COLORS[selectedAvatar % AVATAR_COLORS.length] }
                ]}>
                  <ThemedText type="h3" style={styles.avatarInitials}>
                    {getUserInitials(displayName)}
                  </ThemedText>
                </View>
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

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatCard icon="clipboard" value={lineups.length} label="Lineups" />
          <StatCard icon="arrow-up" value={totalVotes} label="Votes" />
          <StatCard icon="award" value={0} label="Wins" />
        </View>

        {/* Sections */}
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
          <SettingsItem 
            icon="crown" 
            label="Upgrade to Pro" 
            onPress={handleUpgrade}
          />
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
      </ScrollView>

      {/* Edit Profile Modal */}
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
                  transition={200}
                />
              ) : (
                <View style={[
                  styles.modalAvatarFallback, 
                  { backgroundColor: AVATAR_COLORS[selectedAvatar % AVATAR_COLORS.length] }
                ]}>
                  <ThemedText type="h3" style={styles.modalAvatarInitials}>
                    {getUserInitials(editUsername || displayName)}
                  </ThemedText>
                </View>
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
              <ThemedText type="body" style={styles.inputLabel}>Choose Default Avatar</ThemedText>
              <View style={styles.avatarOptionsRow}>
                {AVATAR_COLORS.map((color, index) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedAvatar(index);
                      setProfileImage(null); // Clear custom image when choosing default avatar
                    }}
                    style={[
                      styles.avatarOptionItem,
                      selectedAvatar === index && !profileImage && styles.avatarOptionItemSelected,
                    ]}
                  >
                    <View style={[styles.avatarOptionImage, { backgroundColor: color }]}>
                      <ThemedText type="small" style={styles.avatarOptionInitials}>
                        {getUserInitials(editUsername || displayName)}
                      </ThemedText>
                    </View>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Spacing['3xl'],
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: Spacing['3xl'],
    paddingTop: Spacing['3xl'], // Added more top padding
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
    width: 120, // Increased size
    height: 120,
    borderRadius: 60,
  },
  avatarFallback: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '600',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
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
    paddingHorizontal: Spacing.xl,
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
    paddingHorizontal: Spacing.xl,
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
    paddingHorizontal: Spacing.xl,
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
    maxHeight: '90%',
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
  modalAvatarImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  modalAvatarFallback: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalAvatarInitials: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '600',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
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
    fontWeight: '600',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarOptionInitials: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
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
