import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as Sharing from 'expo-sharing';
import React, { useRef, useState } from 'react';
import {
    Alert,
    Dimensions,
    Platform,
    Pressable,
    Share,
    StyleSheet,
    View,
} from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSequence,
    withSpring,
} from 'react-native-reanimated';
import ViewShot from 'react-native-view-shot';

import { Button } from '@/components/Button';
import { ScreenScrollView } from '@/components/ScreenScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { deleteLineup, loadLineups } from '@/data/storage';
import { Lineup, PitchThemeId } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';
import ShareLineupModal from '@/screens/ShareLineupModal';
import { useAuth } from '@/services/authContext';
import { fetchLineupById, voteForLineup } from '@/services/communityService';
import { isSupabaseConfigured } from '@/services/supabase';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PITCH_HEIGHT = 480;

const PITCH_THEMES: Record<PitchThemeId, [string, string]> = {
  original: [Colors.light.pitchGreen, Colors.light.pitchGreen],
  green: ['#a7d9b9', '#8bc9a6'],
  blue: ['#93c5fd', '#60a5fa'],
  classic: ['#d4d4d4', '#a3a3a3'],
  dark: ['#1f2937', '#111827'],
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function LineupDetailScreen() {
  const { theme, isDark } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();
  const viewShotRef = useRef<ViewShot>(null);
  const { user } = useAuth();
  
  const id = params.id as string;
  const isOwner = params.isOwner === 'true';
  const isReadOnly = params.isReadOnly === 'true';
  const mode = params.mode as string | undefined;
  const isChallengeVote = mode === 'challengeVote';

  const challengeTitle = params.challengeTitle as string | undefined;
  const challengeEndDate = params.challengeEndDate as string | undefined;
  const submittedAt = params.submittedAt as string | undefined;
  const entryUsername = params.entryUsername as string | undefined;
  const entryUserId = params.entryUserId as string | undefined;

  // State for lineup data
  const [lineup, setLineup] = useState<Lineup | null>(null);
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(params.hasVoted === 'true');
  const [isVoting, setIsVoting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [capturedImageUri, setCapturedImageUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const voteScale = useSharedValue(1);
  const pitchWidth = SCREEN_WIDTH - Spacing.xl * 2;

  React.useEffect(() => {
    const loadLineupData = async () => {
      try {
        let foundLineup: Lineup | null = null;

        if ((isReadOnly || isChallengeVote) && isSupabaseConfigured()) {
          foundLineup = await fetchLineupById(id);
        }

        if (!foundLineup) {
          const lineups = await loadLineups();
          foundLineup = lineups.find((l) => l.id === id) || null;
        }

        if (foundLineup) {
          setLineup(foundLineup);
          setVotes(foundLineup.votes || 0);
        } else {
          Alert.alert('Error', 'Lineup not found');
          router.back();
        }
      } catch (error) {
        console.error('Error loading lineup:', error);
        Alert.alert('Error', 'Failed to load lineup');
      } finally {
        setLoading(false);
      }
    };

    loadLineupData();
  }, [id, isChallengeVote, isReadOnly, router]);

  const isOwnChallengeEntry = !!user?.id && !!entryUserId && user.id === entryUserId;

  const handleChallengeVote = async () => {
    if (!user?.id) return;
    if (hasVoted || isOwnChallengeEntry || isVoting) return;

    try {
      setIsVoting(true);
      const result = await voteForLineup(id, user.id);
      if (!result.success) {
        Alert.alert('Vote Failed', result.error || 'Unable to vote for this entry.');
        return;
      }

      if (Platform.OS !== 'web') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }

      setHasVoted(true);
      setVotes((prev) =>
        typeof result.newVoteCount === 'number' ? result.newVoteCount : prev + 1
      );
    } finally {
      setIsVoting(false);
    }
  };

  const handleVote = (isUpvote: boolean) => {
    if (hasVoted || !lineup) return;
    
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
            dialogTitle: `Share ${lineup?.name || 'Lineup'}`,
          });
        } else {
          await Share.share({
            message: `Check out my lineup: ${lineup?.name || 'Lineup'} (${lineup?.formation.name})`,
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
    if (isReadOnly) return;
    if (!lineup) return;
    router.push({
      pathname: '/create-lineup',
      params: { editLineup: JSON.stringify(lineup) }
    });
  };

  const handleDelete = () => {
    if (isReadOnly) return;
    if (!lineup) return;
    
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
              router.back();
            } catch {
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

  if (loading) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Lineup',
            headerBackTitle: 'Back',
            headerTransparent: true,
            headerBlurEffect: isDark ? 'dark' : 'light',
            headerTintColor: theme.text,
          }}
        />
        <ThemedView style={styles.loadingContainer}>
          <ThemedText>Loading lineup...</ThemedText>
        </ThemedView>
      </>
    );
  }

  if (!lineup) {
    return (
      <>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: 'Lineup',
            headerBackTitle: 'Back',
            headerTransparent: true,
            headerBlurEffect: isDark ? 'dark' : 'light',
            headerTintColor: theme.text,
          }}
        />
        <ThemedView style={styles.loadingContainer}>
          <ThemedText>Lineup not found</ThemedText>
          <Button onPress={() => router.back()}>Go Back</Button>
        </ThemedView>
      </>
    );
  }

  const playerCount = Object.keys(lineup.players || {}).length;
  const pitchThemeId: PitchThemeId = (() => {
    const fromLineup = lineup.pitchThemeId;
    const fromFormation = (lineup.formation as any)?.pitchThemeId as PitchThemeId | undefined;
    const candidate = fromLineup || fromFormation;
    if (candidate && candidate in PITCH_THEMES) return candidate;
    return 'original';
  })();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: lineup.name,
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      <ScreenScrollView>
      <ViewShot 
        ref={viewShotRef} 
        options={{ format: 'png', quality: 1 }}
        style={styles.captureArea}
      >
        <View style={[
          styles.pitch,
        ]}>
          <LinearGradient
            colors={
              pitchThemeId === 'original'
                ? [
                    isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen,
                    isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen,
                  ]
                : PITCH_THEMES[pitchThemeId]
            }
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={StyleSheet.absoluteFillObject}
          />
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
                    player.image ? (
                      <Image source={{ uri: player.image }} style={styles.playerPhoto} contentFit="cover" />
                    ) : (
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
                          {player.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
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
                    )
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

      {isChallengeVote && (
        <View style={[styles.challengeCard, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
          <View style={styles.challengeHeader}>
            <Feather name="award" size={18} color={theme.primary} />
            <ThemedText type="h4" style={{ marginLeft: Spacing.sm }}>
              Challenge Entry
            </ThemedText>
          </View>

          {challengeTitle ? (
            <ThemedText type="body" style={{ fontWeight: '700', marginTop: Spacing.sm }} numberOfLines={2}>
              {challengeTitle}
            </ThemedText>
          ) : null}

          <View style={styles.challengeMetaRow}>
            {entryUsername ? (
              <View style={styles.challengeMetaItem}>
                <Feather name="user" size={14} color={theme.textSecondary} />
                <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
                  {entryUsername}
                </ThemedText>
              </View>
            ) : null}

            <View style={styles.challengeMetaItem}>
              <Feather name="thumbs-up" size={14} color={theme.textSecondary} />
              <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
                {votes.toLocaleString()}
              </ThemedText>
            </View>
          </View>

          <View style={styles.challengeMetaRow}>
            {challengeEndDate ? (
              <View style={styles.challengeMetaItem}>
                <Feather name="calendar" size={14} color={theme.textSecondary} />
                <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
                  Ends {new Date(challengeEndDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </ThemedText>
              </View>
            ) : null}

            {submittedAt ? (
              <View style={styles.challengeMetaItem}>
                <Feather name="check-circle" size={14} color={theme.textSecondary} />
                <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 6 }}>
                  Entered {new Date(submittedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </ThemedText>
              </View>
            ) : null}
          </View>

          <Button
            onPress={hasVoted || isOwnChallengeEntry ? undefined : handleChallengeVote}
            disabled={hasVoted || isOwnChallengeEntry || isVoting}
            style={{ marginTop: Spacing.lg, opacity: hasVoted || isOwnChallengeEntry ? 0.6 : 1 }}
          >
            {isOwnChallengeEntry ? 'Your Entry' : hasVoted ? 'Voted' : isVoting ? 'Voting...' : 'Vote for Entry'}
          </Button>
        </View>
      )}

      {!isOwner && !isReadOnly && (
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
        
        {isOwner && !isReadOnly && (
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
    </>
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
  playerPhoto: {
    width: '100%',
    height: '100%',
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
  challengeCard: {
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    padding: Spacing.lg,
    marginBottom: Spacing['2xl'],
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  challengeMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  challengeMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
