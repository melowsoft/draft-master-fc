import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
  Platform,
} from 'react-native';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, Colors } from '@/constants/theme';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

interface FullscreenImageViewProps {
  visible: boolean;
  imageUrl: string;
  onClose: () => void;
}

export function FullscreenImageView({
  visible,
  imageUrl,
  onClose,
}: FullscreenImageViewProps) {
  const { theme } = useTheme();

  const handleClose = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      presentationStyle="overFullScreen"
    >
      <ThemedView style={styles.container}>
        {/* Background Blur */}
        {Platform.OS === 'ios' ? (
          <BlurView
            style={styles.blurView}
            intensity={100}
            tint="dark"
          />
        ) : (
          <View style={[styles.blurView, { backgroundColor: 'rgba(0,0,0,0.9)' }]} />
        )}

        {/* Close Button */}
        <Pressable
          style={styles.closeButton}
          onPress={handleClose}
          hitSlop={20}
        >
          <View style={[styles.closeButtonInner, { backgroundColor: 'rgba(0,0,0,0.3)' }]}>
            <Feather name="x" size={24} color="#FFFFFF" />
          </View>
        </Pressable>

        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            contentFit="contain"
            transition={200}
            cachePolicy="memory-disk"
          />
        </View>

        {/* Save/Share Button (Optional) */}
        <View style={styles.bottomBar}>
          <Pressable
            style={({ pressed }) => [
              styles.actionButton,
              {
                backgroundColor: 'rgba(255,255,255,0.15)',
                opacity: pressed ? 0.7 : 1,
              },
            ]}
            onPress={() => {
              // Add save/share functionality here
              console.log('Save/share image:', imageUrl);
            }}
          >
            <Feather name="download" size={20} color="#FFFFFF" />
            <ThemedText style={styles.actionButtonText}>Save</ThemedText>
          </Pressable>
        </View>
      </ThemedView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
  },
  closeButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    right: Spacing.xl,
    zIndex: 10,
  },
  closeButtonInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomBar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 60 : 40,
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: 25,
    gap: Spacing.sm,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});