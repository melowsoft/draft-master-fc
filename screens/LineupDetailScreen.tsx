import React, { useRef, useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Pressable, 
  Alert,
  Dimensions,
  Platform,
  Share,
} from 'react-native';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ViewShot from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as Haptics from 'expo-haptics';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  withSequence,
  runOnJS,
} from 'react-native-reanimated';

import { ScreenScrollView } from '@/components/ScreenScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, BorderRadius, Colors, Shadows } from '@/constants/theme';
import { RootStackParamList } from '@/utils/types';
import { deleteLineup } from '@/data/storage';
import ShareLineupModal from './ShareLineupModal';
import type { Lineup } from '@/data/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LineupDetail'>;
type RouteProps = RouteProp<RootStackParamList, 'LineupDetail'>;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PITCH_HEIGHT = 380;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function LineupDetailScreen() {
  const { theme, isDark } = useTheme();
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProps>();
  const viewShotRef = useRef<ViewShot>(null);
  
  const { lineup, isOwner } = route.params as { lineup: Lineup; isOwner: boolean };
  const [votes, setVotes] = useState(lineup.votes || 0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [capturedImageUri, setCapturedImageUri] = useState<string | null>(null);

  const voteScale = useSharedValue(1);
  const pitchWidth = SCREEN_WIDTH - Spacing.xl * 2;

  const handleVote = (isUpvote: boolean) => {
    if (hasVoted) return;
    
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    
    voteScale.value = withSequence(
      withSpring(1.2),
      withSpring(1)
    );
    
    setVotes(prev => prev + (isUpvote ? 1 : -1));
    setHasVoted(true);
  };

  const handleShare = async () => {
    if (Platform.OS === 'web') {
      Alert.alert(
        'Share Lineup',
        'Image sharing is available on iOS and Android via Expo Go.\n\nScan the QR code in the menu to open the app on your device.',
        [{ text: 'OK' }]
      );
      return;
    }
    
    try {
      setIsExporting(true);
      
      if (viewShotRef.current && viewShotRef.current.capture) {
        const uri = await viewShotRef.current.capture();
        
        const isAvailable = await Sharing.isAvailableAsync();
        if (isAvailable) {
          await Sharing.shareAsync(uri, {
            mimeType: 'image/png',
            dialogTitle: `Share ${lineup.name}`,
          });
        } else {
          await Share.share({
            message: `Check out my lineup: ${lineup.name} (${lineup.formation.name})`,
          });
        }
      }
    } catch (error) {
      console.error('Share error:', error);
      Alert.alert('Share Error', 'Could not share lineup. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleShareToCommunity = async () => {
    if (Platform.OS === 'web') {
      Alert.alert(
        'Share to Community',
        'Image sharing to communities is available on iOS and Android via Expo Go.\n\nScan the QR code in the menu to open the app on your device.',
        [{ text: 'OK' }]
      );
      return;
    }

    try {
      setIsExporting(true);
      
      if (viewShotRef.current && viewShotRef.current.capture) {
        const uri = await viewShotRef.current.capture();
        setCapturedImageUri(uri);
        setShowShareModal(true);
      }
    } catch (error) {
      console.error('Capture error:', error);
      Alert.alert('Error', 'Could not capture lineup image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleEdit = () => {
    navigation.navigate('CreateLineup', { editLineup: lineup });
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete Lineup',
      `Are you sure you want to delete "${lineup.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: async () => {
            try {
              await deleteLineup(lineup.id);
              navigation.goBack();
            } catch (error) {
              Alert.alert('Error', 'Failed to delete lineup');
            }
          }
        },
      ]
    );
  };

  const voteAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: voteScale.value }],
  }));

  const playerCount = Object.keys(lineup.players || {}).length;

  return (
    <ScreenScrollView>
      <ViewShot 
        ref={viewShotRef} 
        options={{ format: 'png', quality: 1 }}
        style={styles.captureArea}
      >
        <View style={[
          styles.pitch,
          { backgroundColor: isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen }
        ]}>
          <View style={styles.pitchLines}>
            <View style={[styles.centerCircle, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.centerLine, { backgroundColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.penaltyBoxTop, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.penaltyBoxBottom, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.goalAreaTop, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.goalAreaBottom, { borderColor: 'rgba(255,255,255,0.25)' }]} />
          </View>
          
          {lineup.formation.positions.map((pos) => {
            const player = lineup.players?.[pos.id];
            const avatarSize = 56;
            const left = (pos.x / 100) * pitchWidth - avatarSize / 2;
            const top = (pos.y / 100) * PITCH_HEIGHT - avatarSize / 2;
            
            return (
              <View
                key={pos.id}
                style={[
                  styles.playerAvatarContainer,
                  {
                    left,
                    top,
                  },
                ]}
              >
                <View style={[styles.playerAvatar, { width: avatarSize, height: avatarSize, backgroundColor: '#FFD700' }]}>
                  {player ? (
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                      <ThemedText 
                        type="small" 
                        style={{ 
                          fontWeight: '700',
                          color: Colors.light.pitchGreenDark,
                          fontSize: 18,
                        }}
                        numberOfLines={1}
                      >
                        {player.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </ThemedText>
                      <ThemedText 
                        type="small" 
                        style={{ 
                          fontWeight: '600',
                          color: Colors.light.pitchGreenDark,
                          fontSize: 10,
                          marginTop: 2,
                        }}
                        numberOfLines={1}
                      >
                        {player.rating}
                      </ThemedText>
                    </View>
                  ) : (
                    <ThemedText 
                      type="small" 
                      style={{ 
                        fontSize: 14,
                        color: Colors.light.pitchGreenDark,
                        fontWeight: '600',
                      }}
                    >
                      +
                    </ThemedText>
                  )}
                </View>
                {player ? (
                  <View style={styles.playerLabel}>
                    <ThemedText 
                      type="small" 
                      style={{ 
                        fontWeight: '600', 
                        fontSize: 11,
                        color: '#FFFFFF',
                        textAlign: 'center',
                      }}
                      numberOfLines={1}
                    >
                      {player.name.split(' ').pop()}
                    </ThemedText>
                  </View>
                ) : (
                  <ThemedText 
                    type="small" 
                    style={{ 
                      fontSize: 10, 
                      color: 'rgba(255,255,255,0.7)',
                      fontWeight: '600',
                      marginTop: Spacing.xs,
                    }}
                  >
                    {pos.position}
                  </ThemedText>
                )}
              </View>
            );
          })}
          
          <View style={styles.watermark}>
            <ThemedText type="small" style={styles.watermarkText}>
              DraftMaster FC
            </ThemedText>
          </View>
        </View>

        <View style={styles.lineupInfo}>
          <ThemedText type="h2" style={styles.lineupName}>{lineup.name}</ThemedText>
          <View style={styles.lineupMeta}>
            <View style={[styles.formationBadge, { backgroundColor: theme.backgroundSecondary }]}>
              <Feather name="grid" size={14} color={theme.primary} />
              <ThemedText type="small" style={{ marginLeft: Spacing.xs, fontWeight: '600' }}>
                {lineup.formation.name}
              </ThemedText>
            </View>
            <ThemedText type="small" style={{ color: theme.textSecondary }}>
              {playerCount}/11 players
            </ThemedText>
          </View>
        </View>
      </ViewShot>

      {!isOwner && (
        <View style={styles.voteSection}>
          <ThemedText type="h4" style={styles.sectionTitle}>Rate this lineup</ThemedText>
          <View style={styles.voteButtons}>
            <AnimatedPressable
              onPress={() => handleVote(true)}
              disabled={hasVoted}
              style={[
                styles.voteButton,
                { 
                  backgroundColor: hasVoted ? theme.backgroundSecondary : theme.backgroundDefault,
                  opacity: hasVoted ? 0.6 : 1,
                },
                voteAnimatedStyle,
              ]}
            >
              <Feather 
                name="arrow-up" 
                size={24} 
                color={hasVoted ? theme.textSecondary : theme.success} 
              />
            </AnimatedPressable>
            
            <ThemedText type="h3" style={styles.voteCount}>{votes}</ThemedText>
            
            <AnimatedPressable
              onPress={() => handleVote(false)}
              disabled={hasVoted}
              style={[
                styles.voteButton,
                { 
                  backgroundColor: hasVoted ? theme.backgroundSecondary : theme.backgroundDefault,
                  opacity: hasVoted ? 0.6 : 1,
                },
              ]}
            >
              <Feather 
                name="arrow-down" 
                size={24} 
                color={hasVoted ? theme.textSecondary : theme.error} 
              />
            </AnimatedPressable>
          </View>
        </View>
      )}

      {playerCount > 0 && (
        <View style={styles.playersSection}>
          <ThemedText type="h4" style={styles.sectionTitle}>Players</ThemedText>
          {lineup.formation.positions.map((pos) => {
            const player = lineup.players?.[pos.id];
            if (!player) return null;
            
            return (
              <View 
                key={pos.id} 
                style={[styles.playerRow, { backgroundColor: theme.backgroundDefault }]}
              >
                <View style={[styles.positionLabel, { backgroundColor: theme.backgroundSecondary }]}>
                  <ThemedText type="small" style={{ fontWeight: '600' }}>
                    {pos.position}
                  </ThemedText>
                </View>
                <View style={styles.playerRowInfo}>
                  <ThemedText type="body" style={{ fontWeight: '600' }}>{player.name}</ThemedText>
                  <ThemedText type="small" style={{ color: theme.textSecondary }}>
                    {player.nationality} • {player.era}
                  </ThemedText>
                </View>
                <View style={[styles.ratingBadge, { backgroundColor: theme.accent }]}>
                  <ThemedText type="small" style={{ fontWeight: '700', color: '#1B5E20' }}>
                    {player.rating}
                  </ThemedText>
                </View>
              </View>
            );
          })}
        </View>
      )}

      <View style={styles.actions}>
        <View style={styles.shareButtons}>
          <Button 
            onPress={handleShare} 
            disabled={isExporting}
            style={styles.shareButton}
          >
            <Feather name="share" size={18} color="#FFF" style={{ marginRight: Spacing.xs }} />
            {isExporting ? 'Exporting...' : 'Share Image'}
          </Button>
          
          <Pressable 
            onPress={handleShareToCommunity}
            disabled={isExporting}
            style={[styles.communityShareButton, { backgroundColor: theme.accent, opacity: isExporting ? 0.5 : 1 }]}
          >
            <Feather name="users" size={18} color="#1B5E20" />
            <ThemedText type="body" style={{ marginLeft: Spacing.sm, color: '#1B5E20', fontWeight: '600' }}>
              Share to Community
            </ThemedText>
          </Pressable>
        </View>
        
        {isOwner && (
          <View style={styles.ownerActions}>
            <Pressable 
              onPress={handleEdit}
              style={[styles.actionButton, { backgroundColor: theme.backgroundDefault }]}
            >
              <Feather name="edit-2" size={20} color={theme.primary} />
              <ThemedText type="body" style={{ marginLeft: Spacing.sm, color: theme.primary }}>
                Edit
              </ThemedText>
            </Pressable>
            
            <Pressable 
              onPress={handleDelete}
              style={[styles.actionButton, { backgroundColor: 'rgba(211,47,47,0.1)' }]}
            >
              <Feather name="trash-2" size={20} color={Colors.light.error} />
              <ThemedText type="body" style={{ marginLeft: Spacing.sm, color: Colors.light.error }}>
                Delete
              </ThemedText>
            </Pressable>
          </View>
        )}
      </View>
      
      <ShareLineupModal
        visible={showShareModal}
        onClose={() => {
          setShowShareModal(false);
          setCapturedImageUri(null);
        }}
        lineup={lineup}
        capturedImageUri={capturedImageUri}
      />
    </ScreenScrollView>
  );
}

const styles = StyleSheet.create({
  captureArea: {
    backgroundColor: 'transparent',
  },
  pitch: {
    height: PITCH_HEIGHT,
    borderRadius: BorderRadius.lg,
    position: 'relative',
    overflow: 'hidden',
  },
  pitchLines: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    position: 'absolute',
  },
  centerLine: {
    position: 'absolute',
    width: '100%',
    height: 2,
    top: '50%',
  },
  penaltyBoxTop: {
    position: 'absolute',
    top: 0,
    left: '20%',
    right: '20%',
    height: '18%',
    borderWidth: 2,
    borderTopWidth: 0,
  },
  penaltyBoxBottom: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    right: '20%',
    height: '18%',
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  goalAreaTop: {
    position: 'absolute',
    top: 0,
    left: '35%',
    right: '35%',
    height: '8%',
    borderWidth: 2,
    borderTopWidth: 0,
  },
  goalAreaBottom: {
    position: 'absolute',
    bottom: 0,
    left: '35%',
    right: '35%',
    height: '8%',
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  playerAvatarContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  playerAvatar: {
    borderRadius: 28,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  playerImage: {
    borderRadius: 25,
  },
  playerImagePlaceholder: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerLabel: {
    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: BorderRadius.sm,
    maxWidth: 70,
  },
  watermark: {
    position: 'absolute',
    bottom: Spacing.sm,
    right: Spacing.md,
  },
  watermarkText: {
    color: 'rgba(255,255,255,0.5)',
    fontWeight: '600',
  },
  lineupInfo: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.lg,
  },
  lineupName: {
    marginBottom: Spacing.sm,
  },
  lineupMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  formationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  voteSection: {
    marginBottom: Spacing['2xl'],
  },
  sectionTitle: {
    marginBottom: Spacing.md,
  },
  voteButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xl,
  },
  voteButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voteCount: {
    minWidth: 60,
    textAlign: 'center',
  },
  playersSection: {
    marginBottom: Spacing['2xl'],
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
  },
  positionLabel: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerRowInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  ratingBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    marginBottom: Spacing.xl,
  },
  shareButtons: {
    marginBottom: Spacing.lg,
    gap: Spacing.md,
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  communityShareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
  },
  ownerActions: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.lg,
    borderRadius: BorderRadius.md,
  },
});
