import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as Sharing from 'expo-sharing';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
    Alert,
    Dimensions,
    Keyboard,
    LayoutRectangle,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
    FadeIn,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewShot from 'react-native-view-shot';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing, Typography } from '@/constants/theme';
import { formations, getDefaultFormation, getFormationById } from '@/data/formations';
import { players as defaultPlayers } from '@/data/players';
import { addCustomPlayer, addLineup, generateId, loadCustomFormations, loadCustomPlayers, loadUser, updateLineup } from '@/data/storage';
import { Formation, FormationPosition, Lineup, PitchThemeId, Player, Position } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';
import { getApiFootballPlayersByTeamName } from '@/services/apiFootballService';
import { useAuth } from '@/services/authContext';
import { enterChallenge, fetchUserChallengeEntry, publishLineup } from '@/services/communityService';
import { isSupabaseConfigured } from '@/services/supabase';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const PITCH_HEIGHT = 420;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);

  return debouncedValue;
}

const ERA_OPTIONS = ['ALL', 'Modern'];
const POSITION_OPTIONS = ['ALL', 'GK', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'LM', 'RM', 'LW', 'RW', 'ST', 'CF'];
const LEAGUE_OPTIONS = ['ALL', 'Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Saudi Pro League', 'Other'];

const TEAM_OPTIONS = [
  { id: 'none', label: 'None', apiName: '' },
  { id: 'arsenal', label: 'Arsenal', apiName: 'Arsenal' },
  { id: 'chelsea', label: 'Chelsea', apiName: 'Chelsea' },
  { id: 'liverpool', label: 'Liverpool', apiName: 'Liverpool' },
  { id: 'man-city', label: 'Man City', apiName: 'Manchester City' },
  { id: 'man-united', label: 'Man United', apiName: 'Manchester United' },
  { id: 'barcelona', label: 'Barcelona', apiName: 'Barcelona' },
  { id: 'real-madrid', label: 'Real Madrid', apiName: 'Real Madrid' },
] as const;

const PITCH_THEMES: Record<PitchThemeId, { label: string; colors: [string, string] }> = {
  original: { label: 'Original', colors: [Colors.light.pitchGreen, Colors.light.pitchGreen] },
  green: { label: 'Green', colors: ['#a7d9b9', '#8bc9a6'] },
  blue: { label: 'Blue', colors: ['#93c5fd', '#60a5fa'] },
  classic: { label: 'Classic', colors: ['#d4d4d4', '#a3a3a3'] },
  dark: { label: 'Dark', colors: ['#1f2937', '#111827'] },
};

function FormationSelector({ 
  selected, 
  onSelect,
  customFormations,
  onCreateCustom,
}: { 
  selected: Formation; 
  onSelect: (f: Formation) => void;
  customFormations: Formation[];
  onCreateCustom: () => void;
}) {
  const { theme } = useTheme();
  
  const allFormations = [...formations, ...customFormations];
  
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.formationList}
    >
      {allFormations.map((formation) => {
        const isSelected = formation.id === selected.id;
        const isCustom = formation.id.startsWith('custom_');
        return (
          <Pressable
            key={formation.id}
            onPress={() => {
              if (Platform.OS !== 'web') {
                Haptics.selectionAsync();
              }
              onSelect(formation);
            }}
            style={[
              styles.formationChip,
              { 
                backgroundColor: isSelected ? theme.primary : theme.backgroundSecondary,
                borderWidth: isCustom ? 1 : 0,
                borderColor: isCustom ? '#FFD700' : 'transparent',
              },
            ]}
          >
            <ThemedText 
              type="small" 
              style={{ 
                fontWeight: '600',
                color: isSelected ? '#FFFFFF' : theme.text,
              }}
            >
              {formation.name}
            </ThemedText>
          </Pressable>
        );
      })}
      <Pressable
        onPress={() => {
          if (Platform.OS !== 'web') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
          onCreateCustom();
        }}
        style={[
          styles.formationChip,
          styles.createCustomChip,
          { 
            borderColor: theme.primary,
          },
        ]}
      >
        <Feather name="plus" size={14} color={theme.primary} style={{ marginRight: 4 }} />
        <ThemedText 
          type="small" 
          style={{ 
            fontWeight: '600',
            color: theme.primary,
          }}
        >
          Custom
        </ThemedText>
      </Pressable>
    </ScrollView>
  );
}

function FilterChips({
  options,
  selected,
  onSelect,
  label,
}: {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  label: string;
}) {
  const { theme } = useTheme();

  return (
    <View style={styles.filterRow}>
      <ThemedText type="small" style={[styles.filterLabel, { color: theme.textSecondary }]}>
        {label}
      </ThemedText>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterChipsContainer}
      >
        {options.map((option) => {
          const isSelected = option === selected;
          return (
            <Pressable
              key={option}
              onPress={() => onSelect(option)}
              style={[
                styles.filterChip,
                { 
                  backgroundColor: isSelected ? theme.primary : 'transparent',
                  borderColor: isSelected ? theme.primary : theme.border,
                },
              ]}
            >
              <ThemedText 
                type="small" 
                style={{ 
                  color: isSelected ? '#FFFFFF' : theme.text,
                  fontSize: 12,
                }}
              >
                {option === 'ALL' ? 'All' : option}
              </ThemedText>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

function PitchThemeSelector({
  selected,
  onSelect,
}: {
  selected: PitchThemeId;
  onSelect: (themeId: PitchThemeId) => void;
}) {
  const { theme } = useTheme();

  return (
    <View style={styles.pitchThemeSection}>
      <ThemedText type="small" style={[styles.pitchThemeTitle, { color: theme.textSecondary }]}>
        Pitch
      </ThemedText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.pitchThemeList}
      >
        {(Object.keys(PITCH_THEMES) as PitchThemeId[]).map((themeId) => {
          const isSelected = themeId === selected;
          const textColor = themeId === 'classic' ? '#111827' : '#FFFFFF';

          return (
            <Pressable
              key={themeId}
              onPress={() => {
                if (Platform.OS !== 'web') {
                  Haptics.selectionAsync();
                }
                onSelect(themeId);
              }}
              style={[
                styles.pitchThemeChip,
                {
                  borderColor: isSelected ? theme.primary : theme.border,
                  borderWidth: isSelected ? 2 : 1,
                },
              ]}
            >
              <LinearGradient
                colors={PITCH_THEMES[themeId].colors}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={StyleSheet.absoluteFillObject}
              />
              <View style={styles.pitchThemeChipContent}>
                <ThemedText type="small" style={{ color: textColor, fontWeight: '700' }}>
                  {PITCH_THEMES[themeId].label}
                </ThemedText>
                {isSelected ? <Feather name="check" size={14} color={textColor} /> : null}
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

function PositionMarker({
  position,
  player,
  onPress,
  pitchWidth,
  isSelected,
  isDropTarget,
}: {
  position: FormationPosition;
  player?: Player;
  onPress: () => void;
  pitchWidth: number;
  isSelected: boolean;
  isDropTarget: boolean;
}) {
  const { isDark } = useTheme();
  const scale = useSharedValue(1);
  const pulseScale = useSharedValue(1);

  React.useEffect(() => {
    if (isSelected || isDropTarget) {
      pulseScale.value = withSpring(1.15, { damping: 8, stiffness: 100 });
    } else {
      pulseScale.value = withSpring(1);
    }
  }, [isSelected, isDropTarget, pulseScale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
  }));

  const circleSize = 45;
  const containerWidth = 70;
  const containerHeight = 54;
  const left = (position.x / 100) * pitchWidth - containerWidth / 2;
  const top = (position.y / 100) * PITCH_HEIGHT - containerHeight / 2;

  const getPlayerDisplayName = (name: string) => {
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0];
    return parts[parts.length - 1];
  };

  return (
    <AnimatedPressable
      onPress={() => {
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress();
      }}
      onPressIn={() => { scale.value = withSpring(0.9); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={[
        styles.positionMarkerContainer,
        {
          left,
          top,
          width: containerWidth,
          height: containerHeight,
        },
        animatedStyle,
      ]}
    >
      {player ? (
        <>
          <Animated.View style={[
            styles.playerCircle, 
            { width: circleSize, height: circleSize },
            isSelected ? styles.selectedCircle : null,
            isDropTarget ? styles.dropTargetCircle : null,
            pulseStyle,
          ]}>
            {player.image ? (
              <Image source={{ uri: player.image }} style={styles.playerAvatar} contentFit="cover" />
            ) : (
              <ThemedText type="small" style={styles.playerMarkerRating} numberOfLines={1}>
                {player.rating}
              </ThemedText>
            )}
          </Animated.View>
          <ThemedText 
            type="small" 
            style={styles.playerMarkerName}
            numberOfLines={1}
          >
            {getPlayerDisplayName(player.name)}
          </ThemedText>
        </>
      ) : (
        <>
          <Animated.View style={[
            styles.emptyCircle, 
            { width: circleSize, height: circleSize },
            isSelected ? styles.selectedEmptyCircle : null,
            isDropTarget ? styles.dropTargetEmptyCircle : null,
            pulseStyle,
          ]}>
            <Feather name="plus" size={16} color={isSelected || isDropTarget ? '#FFFFFF' : (isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreenDark)} />
          </Animated.View>
          <ThemedText 
            type="small" 
            style={[
              styles.emptyPositionLabel,
              (isSelected || isDropTarget) ? styles.selectedPositionLabel : null,
            ]}
          >
            {position.position}
          </ThemedText>
        </>
      )}
    </AnimatedPressable>
  );
}

interface DraggablePlayerCardProps {
  player: Player;
  onSelect: () => void;
  isSelected: boolean;
  onDragStart: (player: Player, startX: number, startY: number) => void;
  onDragEnd: () => void;
  onDragMove: (x: number, y: number) => void;
}

const DRAG_CIRCLE_SIZE = 48;

function DraggablePlayerCard({
  player,
  onSelect,
  isSelected,
  onDragStart,
  onDragEnd,
  onDragMove,
}: DraggablePlayerCardProps) {
  const { theme } = useTheme();
  const isDragging = useSharedValue(false);

  const panGesture = Gesture.Pan()
    .activateAfterLongPress(1500)
    .minDistance(5)
    .onStart((event) => {
      isDragging.value = true;
      runOnJS(onDragStart)(player, event.absoluteX, event.absoluteY);
      if (Platform.OS !== 'web') {
        runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Heavy);
      }
    })
    .onUpdate((event) => {
      runOnJS(onDragMove)(event.absoluteX, event.absoluteY);
    })
    .onEnd(() => {
      isDragging.value = false;
      runOnJS(onDragEnd)();
    });

  const containerStyle = useAnimatedStyle(() => {
    return {
      opacity: isDragging.value ? 0.3 : 1,
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={containerStyle}>
        <Pressable
          onPress={() => {
            if (Platform.OS !== 'web') {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
            onSelect();
          }}
          style={[
            styles.playerListItem,
            { 
              backgroundColor: isSelected ? theme.primary : theme.backgroundDefault,
              borderColor: isSelected ? theme.primary : theme.border,
            },
          ]}
        >
          <View style={[
            styles.playerRating,
            { backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : theme.backgroundSecondary }
          ]}>
            <ThemedText 
              type="small" 
              style={{ 
                fontWeight: '700',
                color: isSelected ? '#FFFFFF' : theme.text,
              }}
            >
              {player.rating}
            </ThemedText>
          </View>
          <View style={styles.playerInfo}>
            <ThemedText 
              type="body" 
              style={{ 
                fontWeight: '600',
                color: isSelected ? '#FFFFFF' : theme.text,
              }}
              numberOfLines={1}
            >
              {player.name}
            </ThemedText>
            <ThemedText 
              type="small" 
              style={{ 
                color: isSelected ? 'rgba(255,255,255,0.8)' : theme.textSecondary,
              }}
              numberOfLines={1}
            >
              {player.position} • {player.club || player.nationality}
            </ThemedText>
          </View>
          <View style={styles.dragHandle}>
            <Feather name="menu" size={16} color={isSelected ? 'rgba(255,255,255,0.6)' : theme.textSecondary} />
          </View>
          <View style={[
            styles.positionBadge,
            { backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : theme.backgroundSecondary }
          ]}>
            <ThemedText 
              type="small" 
              style={{ 
                fontWeight: '600',
                color: isSelected ? '#FFFFFF' : theme.text,
                fontSize: 10,
              }}
            >
              {player.era === 'Legends' ? 'LEG' : player.era === 'Rising Stars' ? 'RS' : 'MOD'}
            </ThemedText>
          </View>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
}

export default function CreateLineupScreen() {
  const { theme, isDark } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { user, profile } = useAuth();
  const insets = useSafeAreaInsets();
  const viewShotRef = useRef<ViewShot>(null);
  const pitchRef = useRef<View>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollOffsetRef = useRef(0);
  const autoScrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  // Get lineup data from params if editing
  const editLineup = params.editLineup ? JSON.parse(params.editLineup as string) : null;
  const challengeIdParam =
    typeof params.challengeId === 'string'
      ? params.challengeId
      : Array.isArray(params.challengeId)
        ? params.challengeId[0]
        : undefined;

  const challengeTitleParam =
    typeof params.challengeTitle === 'string'
      ? params.challengeTitle
      : Array.isArray(params.challengeTitle)
        ? params.challengeTitle[0]
        : undefined;

  const challengeId: string | undefined = challengeIdParam || editLineup?.challengeId;
  const isChallengeFlow = !!challengeId && isUuid(challengeId) && isSupabaseConfigured();
  
  const [lineupName, setLineupName] = useState(editLineup?.name || 'My Lineup');
  const [selectedFormation, setSelectedFormation] = useState<Formation>(
    editLineup?.formation || getDefaultFormation()
  );
  const [selectedPlayers, setSelectedPlayers] = useState<{ [key: string]: Player }>(
    editLineup?.players || {}
  );
  const [pitchThemeId, setPitchThemeId] = useState<PitchThemeId>(() => {
    const fromLineup = editLineup?.pitchThemeId as PitchThemeId | undefined;
    const fromFormation = (editLineup?.formation as any)?.pitchThemeId as PitchThemeId | undefined;
    return fromLineup || fromFormation || 'original';
  });
  const [selectedPosition, setSelectedPosition] = useState<FormationPosition | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 350);
  const [positionFilter, setPositionFilter] = useState<string>('ALL');
  const [eraFilter, setEraFilter] = useState<string>('ALL');
  const [leagueFilter, setLeagueFilter] = useState<string>('ALL');
  const [showFilters, setShowFilters] = useState(false);
  const [draggingPlayer, setDraggingPlayer] = useState<Player | null>(null);
  const [dragPosition, setDragPosition] = useState<{ x: number; y: number } | null>(null);
  const [dropTargetPosition, setDropTargetPosition] = useState<string | null>(null);
  const [pitchLayout, setPitchLayout] = useState<LayoutRectangle | null>(null);
  const [customFormations, setCustomFormations] = useState<Formation[]>([]);
  const [customPlayers, setCustomPlayers] = useState<Player[]>([]);
  const [badgeUri, setBadgeUri] = useState<string | undefined>(editLineup?.badgeUri);
  const [showCreatePlayerModal, setShowCreatePlayerModal] = useState(false);
  const [createPlayerForm, setCreatePlayerForm] = useState({ name: '', position: 'ST' as Position, rating: 75 });
  const searchInputRef = useRef<TextInput>(null);
  const [selectedTeamId, setSelectedTeamId] = useState<(typeof TEAM_OPTIONS)[number]['id']>('arsenal');
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [teamPlayers, setTeamPlayers] = useState<Player[]>([]);
  const [isTeamLoading, setIsTeamLoading] = useState(false);
  const [teamLoadError, setTeamLoadError] = useState('');

  const selectedTeam = useMemo(
    () => TEAM_OPTIONS.find((t) => t.id === selectedTeamId) ?? TEAM_OPTIONS[0],
    [selectedTeamId]
  );

  const pitchWidth = SCREEN_WIDTH - Spacing.xl * 2;

  useEffect(() => {
    if (editLineup?.formation) return;
    if (selectedFormation.id !== getDefaultFormation().id) return;

    let cancelled = false;
    (async () => {
      const localUser = await loadUser();
      const favoriteFormationId = profile?.favorite_formation || localUser?.favoriteFormation || null;
      const favoriteFormation = favoriteFormationId ? getFormationById(favoriteFormationId) : undefined;

      if (cancelled) return;
      if (favoriteFormation && favoriteFormation.id !== selectedFormation.id) {
        setSelectedFormation(favoriteFormation);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [editLineup?.formation, profile?.favorite_formation, selectedFormation.id]);

  useEffect(() => {
    const loadData = async () => {
      const [formations, players] = await Promise.all([
        loadCustomFormations(),
        loadCustomPlayers()
      ]);
      setCustomFormations(formations);
      setCustomPlayers(players);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (selectedTeamId === 'none') {
      setTeamPlayers([]);
      setIsTeamLoading(false);
      setTeamLoadError('');
      return;
    }

    const controller = new AbortController();
    setTeamPlayers([]);
    setIsTeamLoading(true);
    setTeamLoadError('');

    getApiFootballPlayersByTeamName({
      teamName: selectedTeam.apiName,
      signal: controller.signal,
    })
      .then((players) => setTeamPlayers(players))
      .catch((e) => {
        if (controller.signal.aborted) return;
        setTeamPlayers([]);
        setTeamLoadError(e instanceof Error ? e.message : String(e));
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsTeamLoading(false);
      });

    return () => controller.abort();
  }, [selectedTeam.apiName, selectedTeamId]);

  const handleCreateCustomFormation = () => {
    router.push('/custom-formation');
  };

  const requestMediaLibraryPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'web') {
      return true;
    }
    
    const { status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();
    
    if (status === 'granted') {
      return true;
    }
    
    if (!canAskAgain) {
      Alert.alert(
        'Permission Required',
        'Please enable photo library access in your device settings to upload images.',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Open Settings', 
            onPress: async () => {
              try {
                await Linking.openSettings();
              } catch {
                // openSettings not supported on this platform
              }
            }
          },
        ]
      );
    }
    
    return false;
  };

  const pickBadgeImage = async () => {
    const hasPermission = await requestMediaLibraryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setBadgeUri(result.assets[0].uri);
      if (Platform.OS !== 'web') {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      }
    }
  };

  const handleCreatePlayer = async () => {
    if (!createPlayerForm.name.trim()) {
      Alert.alert('Error', 'Please enter a player name');
      return;
    }

    const newPlayer: Player = {
      id: `custom_${generateId()}`,
      name: createPlayerForm.name,
      position: createPlayerForm.position,
      positions: [createPlayerForm.position],
      nationality: 'Custom',
      era: 'Modern',
      league: 'Other',
      rating: createPlayerForm.rating,
      stats: {
        pace: 75,
        shooting: 75,
        passing: 75,
        dribbling: 75,
        defending: 75,
        physical: 75,
      },
    };

    await addCustomPlayer(newPlayer);
    const updated = await loadCustomPlayers();
    setCustomPlayers(updated);
    setShowCreatePlayerModal(false);
    setCreatePlayerForm({ name: '', position: 'ST', rating: 75 });
    
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }

  const handlePositionPress = (position: FormationPosition) => {
    setSelectedPosition(position);
    setPositionFilter(position.position);
    setShowFilters(true);
  };

  const handlePlayerSelect = (player: Player) => {
    if (selectedPosition) {
      setSelectedPlayers(prev => ({
        ...prev,
        [selectedPosition.id]: player,
      }));
      setSelectedPosition(null);
      setPositionFilter('ALL');
      setEraFilter('ALL');
      setLeagueFilter('ALL');
      setSearchQuery('');
      Keyboard.dismiss();
    }
  };

  const handlePlayerDrop = (player: Player, positionId: string) => {
    setSelectedPlayers(prev => ({
      ...prev,
      [positionId]: player,
    }));
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  const handleDragStart = (player: Player, startX?: number, startY?: number) => {
    setDraggingPlayer(player);
    if (startX !== undefined && startY !== undefined) {
      setDragPosition({ x: startX, y: startY });
    }
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const startAutoScroll = (direction: 'up' | 'down', speed: number) => {
    stopAutoScroll();
    autoScrollIntervalRef.current = setInterval(() => {
      const currentOffset = scrollOffsetRef.current;
      const newOffset = direction === 'up' 
        ? Math.max(0, currentOffset - speed)
        : currentOffset + speed;
      scrollViewRef.current?.scrollTo({ y: newOffset, animated: false });
      scrollOffsetRef.current = newOffset;
    }, 16);
  };

  const handleDragEnd = () => {
    stopAutoScroll();
    if (draggingPlayer && dropTargetPosition) {
      handlePlayerDrop(draggingPlayer, dropTargetPosition);
    }
    setDraggingPlayer(null);
    setDragPosition(null);
    setDropTargetPosition(null);
  };

  const handleDragMove = (absoluteX: number, absoluteY: number) => {
    setDragPosition({ x: absoluteX, y: absoluteY });
    
    const headerHeight = insets.top + 60;
    const scrollThreshold = 100;
    const maxScrollSpeed = 15;
    
    if (absoluteY < headerHeight + scrollThreshold) {
      const distanceFromEdge = headerHeight + scrollThreshold - absoluteY;
      const speed = Math.min(maxScrollSpeed, Math.max(3, distanceFromEdge / 10));
      startAutoScroll('up', speed);
    } else if (absoluteY > SCREEN_HEIGHT - scrollThreshold) {
      const distanceFromEdge = absoluteY - (SCREEN_HEIGHT - scrollThreshold);
      const speed = Math.min(maxScrollSpeed, Math.max(3, distanceFromEdge / 10));
      startAutoScroll('down', speed);
    } else {
      stopAutoScroll();
    }
    
    if (!pitchLayout || !draggingPlayer) return;
    
    const pitchStartX = pitchLayout.x;
    const pitchStartY = pitchLayout.y;
    const pitchEndX = pitchStartX + pitchLayout.width;
    const pitchEndY = pitchStartY + pitchLayout.height;
    
    if (absoluteX >= pitchStartX && absoluteX <= pitchEndX &&
        absoluteY >= pitchStartY && absoluteY <= pitchEndY) {
      const relativeX = ((absoluteX - pitchStartX) / pitchLayout.width) * 100;
      const relativeY = ((absoluteY - pitchStartY) / pitchLayout.height) * 100;
      
      let closestPosition: FormationPosition | null = null;
      let closestDistance = Infinity;
      
      for (const pos of selectedFormation.positions) {
        const distance = Math.sqrt(
          Math.pow(pos.x - relativeX, 2) + Math.pow(pos.y - relativeY, 2)
        );
        if (distance < closestDistance && distance < 15) {
          closestDistance = distance;
          closestPosition = pos;
        }
      }
      
      if (closestPosition) {
        if (dropTargetPosition !== closestPosition.id) {
          setDropTargetPosition(closestPosition.id);
          if (Platform.OS !== 'web') {
            Haptics.selectionAsync();
          }
        }
      } else {
        setDropTargetPosition(null);
      }
    } else {
      setDropTargetPosition(null);
    }
  };

  const handleFormationChange = (formation: Formation) => {
    setSelectedFormation(formation);
    setSelectedPlayers({});
    setSelectedPosition(null);
  };

  const handleExport = async () => {
    try {
      if (viewShotRef.current) {
        const uri = await viewShotRef.current.capture?.();
        if (uri) {
          if (Platform.OS === 'web') {
            Alert.alert('Export', 'Image export is available on mobile devices. Please use Expo Go to export your lineup.');
            return;
          }
          const isAvailable = await Sharing.isAvailableAsync();
          if (isAvailable) {
            await Sharing.shareAsync(uri, {
              mimeType: 'image/png',
              dialogTitle: 'Share your lineup',
            });
          } else {
            Alert.alert('Sharing not available', 'Sharing is not available on this device');
          }
        }
      }
    } catch {
      Alert.alert('Export Error', 'Failed to export lineup image');
    }
  };

  const handleSave = async () => {
    if (!lineupName.trim()) {
      Alert.alert('Name Required', 'Please enter a name for your lineup');
      return;
    }

    const lineup: Lineup = {
      id: editLineup?.id || generateId(),
      name: lineupName.trim(),
      formation: selectedFormation,
      players: selectedPlayers,
      pitchThemeId,
      createdAt: editLineup?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      votes: editLineup?.votes || 0,
      isPublic: isChallengeFlow ? true : false,
      badgeUri,
      isChallengeEntry: isChallengeFlow,
      challengeId,
    };

    try {
      if (isChallengeFlow) {
        if (!user?.id) {
          Alert.alert('Sign In Required', 'Please sign in to submit a challenge entry.');
          return;
        }

        const existing = await fetchUserChallengeEntry(challengeId!, user.id);
        if (existing.exists) {
          router.replace({
            pathname: '/challenge-submitted',
            params: { challengeId: challengeId!, challengeTitle: challengeTitleParam },
          });
          return;
        }

        const publishResult = await publishLineup(lineup, user.id);
        if (!publishResult.success) {
          Alert.alert('Error', publishResult.error || 'Failed to submit challenge entry');
          return;
        }

        if (editLineup) {
          await updateLineup(lineup);
        } else {
          const entryResult = await enterChallenge(challengeId!, lineup.id, user.id);
          if (!entryResult.success) {
            if (entryResult.error === 'ALREADY_ENTERED') {
              router.replace({
                pathname: '/challenge-submitted',
                params: { challengeId: challengeId!, challengeTitle: challengeTitleParam },
              });
              return;
            }
            Alert.alert('Error', entryResult.error || 'Failed to submit challenge entry');
            return;
          }
        }
        router.replace({
          pathname: '/challenge-entry-submitted',
          params: { challengeId: challengeId!, challengeTitle: challengeTitleParam },
        });
        return;
      } else {
        if (editLineup) {
          await updateLineup(lineup);
        } else {
          await addLineup(lineup);
        }
      }

      router.back();
    } catch {
      Alert.alert('Error', 'Failed to save lineup');
    }
  };

  const handleCancel = () => {
    const hasChanges = lineupName.trim() || Object.keys(selectedPlayers).length > 0;
    if (hasChanges) {
      Alert.alert(
        'Discard Changes?',
        'You have unsaved changes. Are you sure you want to discard them?',
        [
          { text: 'Keep Editing', style: 'cancel' },
          { text: 'Discard', style: 'destructive', onPress: () => router.back() },
        ]
      );
    } else {
      router.back();
    }
  };

  const resetAllFilters = () => {
    setShowFilters(false);
    setSelectedPosition(null);
    setPositionFilter('ALL');
    setEraFilter('ALL');
    setLeagueFilter('ALL');
    setSearchQuery('');
    setSelectedTeamId('none');
    setShowTeamDropdown(false);
    setTeamLoadError('');
    Keyboard.dismiss();
  };

  const hasActiveFilters =
    positionFilter !== 'ALL' ||
    eraFilter !== 'ALL' ||
    leagueFilter !== 'ALL' ||
    searchQuery !== '' ||
    selectedPosition !== null ||
    selectedTeamId !== 'none';

  const allPlayers = useMemo(() => {
    const combined =
      selectedTeamId === 'none'
        ? [...defaultPlayers, ...customPlayers]
        : teamPlayers;
    const seen = new Set<string>();
    return combined.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  }, [customPlayers, selectedTeamId, teamPlayers]);

  const filteredPlayers = useMemo(() => {
    const normalizeText = (text: string) =>
      text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    const scoreNameMatch = (playerName: string, queryText: string) => {
      const name = normalizeText(playerName);
      const query = normalizeText(queryText);
      if (!query) return 0;
      if (name === query) return 100;
      if (name.startsWith(query)) return 90;

      const tokens = name.split(/\s+/).filter(Boolean);
      if (tokens.some((t) => t.startsWith(query))) return 85;
      if (name.includes(query)) return 75;

      const queryTokens = query.split(/\s+/).filter(Boolean);
      if (queryTokens.length > 1 && queryTokens.every((t) => name.includes(t))) return 65;
      if (query.length >= 3 && tokens.some((t) => t.includes(query))) return 55;
      return 0;
    };

    const position = selectedPosition ? selectedPosition.position : positionFilter !== 'ALL' ? positionFilter : undefined;
    const era = eraFilter !== 'ALL' ? eraFilter : undefined;
    const league = leagueFilter !== 'ALL' ? leagueFilter : undefined;
    const query = debouncedSearchQuery.trim();

    const base = allPlayers.filter((p) => {
      const matchesPosition = !position ? true : p.position === position || p.positions?.includes(position as Position);
      const matchesEra = !era || p.era === era;
      const matchesLeague = !league || p.league === league || p.league === 'Other';
      return matchesPosition && matchesEra && matchesLeague;
    });

    const scored = base
      .map((p) => ({
        player: p,
        score: query ? scoreNameMatch(p.name, query) : 0,
      }))
      .filter((x) => !query || x.score > 0);

    scored.sort((a, b) => {
      if (query) {
        if (b.score !== a.score) return b.score - a.score;
      }
      if (b.player.rating !== a.player.rating) return b.player.rating - a.player.rating;
      return a.player.name.localeCompare(b.player.name);
    });

    return scored.slice(0, 10).map((x) => x.player);
  }, [allPlayers, debouncedSearchQuery, eraFilter, leagueFilter, positionFilter, selectedPosition]);

  const alreadySelectedIds = new Set(Object.values(selectedPlayers).map(p => p.id));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <View style={[styles.header, { paddingTop: insets.top + Spacing.sm }]}>
          <Pressable onPress={handleCancel} hitSlop={12}>
            <ThemedText type="body" style={{ color: theme.error }}>Cancel</ThemedText>
          </Pressable>
          <TextInput
            style={[
              styles.nameInput,
              { 
                backgroundColor: theme.backgroundSecondary,
                color: theme.text,
              }
            ]}
            value={lineupName}
            onChangeText={setLineupName}
            placeholder="Lineup Name"
            placeholderTextColor={theme.textSecondary}
            maxLength={30}
          />
          <View style={styles.headerButtons}>
            <Pressable onPress={handleExport} hitSlop={12} style={styles.exportButton}>
              <Feather name="share" size={20} color={theme.primary} />
            </Pressable>
            <Pressable onPress={handleSave} hitSlop={12}>
              <ThemedText type="body" style={{ color: theme.primary, fontWeight: '600' }}>
                {isChallengeFlow ? 'Submit' : 'Save'}
              </ThemedText>
            </Pressable>
          </View>
        </View>

        

        <ScrollView 
          ref={scrollViewRef}
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          nestedScrollEnabled
          scrollEventThrottle={16}
          onScroll={(e) => { scrollOffsetRef.current = e.nativeEvent.contentOffset.y; }}
        >
          <FormationSelector 
            selected={selectedFormation} 
            onSelect={handleFormationChange}
            customFormations={customFormations}
            onCreateCustom={handleCreateCustomFormation}
          />

          <PitchThemeSelector selected={pitchThemeId} onSelect={setPitchThemeId} />

          <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }}>
          <View 
            ref={pitchRef}
            onLayout={(e) => {
              const { width, height } = e.nativeEvent.layout;
              requestAnimationFrame(() => {
                pitchRef.current?.measureInWindow((x, y, w, h) => {
                  if (x !== undefined && y !== undefined) {
                    setPitchLayout({ x, y, width: w || width, height: h || height });
                  }
                });
              });
            }}
            style={[
              styles.pitch,
            ]}
          >
            <LinearGradient
              colors={
                pitchThemeId === 'original'
                  ? [
                      isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen,
                      isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen,
                    ]
                  : PITCH_THEMES[pitchThemeId].colors
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
            
            {selectedFormation.positions.map((pos) => (
              <PositionMarker
                key={pos.id}
                position={pos}
                player={selectedPlayers[pos.id]}
                onPress={() => handlePositionPress(pos)}
                pitchWidth={pitchWidth}
                isSelected={selectedPosition?.id === pos.id}
                isDropTarget={dropTargetPosition === pos.id}
              />
            ))}

            {lineupName.trim() ? (
              <View style={styles.lineupNameOverlay}>
                <ThemedText type="body" style={styles.lineupNameText}>
                  {lineupName}
                </ThemedText>
              </View>
            ) : null}

            {badgeUri ? (
              <Pressable 
                onPress={pickBadgeImage}
                style={styles.badgeOverlay}
              >
                <Image 
                  source={{ uri: badgeUri }} 
                  style={styles.badgeImage}
                  contentFit="contain"
                />
              </Pressable>
            ) : null}

          </View>
        </ViewShot>

        <View style={styles.customizeRow}>
          <Pressable 
            onPress={pickBadgeImage} 
            style={[styles.customizeButton, { backgroundColor: theme.backgroundSecondary }]}
          >
            {badgeUri ? (
              <Image 
                source={{ uri: badgeUri }} 
                style={styles.customizeButtonImage}
                contentFit="contain"
              />
            ) : (
              <Feather name="shield" size={18} color={theme.textSecondary} />
            )}
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.xs }}>
              {badgeUri ? 'Change Badge' : 'Add Badge'}
            </ThemedText>
          </Pressable>

          <Pressable 
            onPress={() => setShowCreatePlayerModal(true)} 
            style={[styles.customizeButton, { backgroundColor: theme.backgroundSecondary }]}
          >
            <Feather name="user-plus" size={18} color={theme.textSecondary} />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.xs }}>
              Create Player
            </ThemedText>
          </Pressable>
        </View>

        <View style={styles.playerSection}>
          <View style={styles.playerSectionHeader}>
            <ThemedText type="h4">
              {selectedPosition 
                ? `Select ${selectedPosition.position}` 
                : draggingPlayer 
                  ? `Drag ${draggingPlayer.name.split(' ').pop()} to position`
                  : 'Drag player to pitch'}
            </ThemedText>
            <View style={styles.headerActions}>
              {selectedPosition && (
                <Pressable 
                  onPress={() => setShowFilters(!showFilters)}
                  style={[styles.filterToggle, { backgroundColor: showFilters ? theme.primary : theme.backgroundSecondary }]}
                >
                  <Feather name="filter" size={16} color={showFilters ? '#FFFFFF' : theme.text} />
                </Pressable>
              )}
              {selectedPosition && (
                <Pressable onPress={resetAllFilters}>
                  <ThemedText type="small" style={{ color: theme.primary, marginLeft: Spacing.sm }}>Clear</ThemedText>
                </Pressable>
              )}
            </View>
          </View>

          <View style={styles.searchBarContainer}>
            <View style={styles.teamRow}>
              <ThemedText type="small" style={[styles.teamLabel, { color: theme.textSecondary }]}>
                Team
              </ThemedText>
              <Pressable
                onPress={() => setShowTeamDropdown((v) => !v)}
                style={[
                  styles.teamSelect,
                  { backgroundColor: theme.backgroundSecondary, borderColor: theme.border },
                ]}
              >
                <ThemedText type="small" style={{ fontWeight: '600', color: theme.text }}>
                  {selectedTeam.label}
                </ThemedText>
                <Feather
                  name={showTeamDropdown ? 'chevron-up' : 'chevron-down'}
                  size={16}
                  color={theme.textSecondary}
                />
              </Pressable>
            </View>
            {showTeamDropdown ? (
              <Animated.View
                entering={FadeIn.duration(150)}
                style={[
                  styles.teamDropdown,
                  { backgroundColor: theme.backgroundDefault, borderColor: theme.border },
                ]}
              >
                {TEAM_OPTIONS.map((t) => {
                  const isSelected = t.id === selectedTeamId;
                  return (
                    <Pressable
                      key={t.id}
                      onPress={() => {
                        setSelectedTeamId(t.id);
                        setShowTeamDropdown(false);
                        setSearchQuery('');
                        setLeagueFilter('ALL');
                      }}
                      style={[
                        styles.teamOption,
                        { backgroundColor: isSelected ? theme.backgroundSecondary : 'transparent' },
                      ]}
                    >
                      <ThemedText type="body" style={{ fontWeight: isSelected ? '700' : '500' }}>
                        {t.label}
                      </ThemedText>
                      {isSelected ? <Feather name="check" size={16} color={theme.primary} /> : null}
                    </Pressable>
                  );
                })}
              </Animated.View>
            ) : null}
            <View style={[styles.searchBar, { backgroundColor: theme.backgroundSecondary }]}>
              <Feather name="search" size={18} color={theme.textSecondary} />
              <TextInput
                ref={searchInputRef}
                style={[styles.searchInput, { color: theme.text }]}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search players..."
                placeholderTextColor={theme.textSecondary}
              />
              {searchQuery ? (
                <Pressable onPress={() => { setSearchQuery(''); }}>
                  <Feather name="x" size={18} color={theme.textSecondary} />
                </Pressable>
              ) : null}
            </View>

          </View>

          {showFilters && selectedPosition && (
            <View style={styles.filtersContainer}>
              <FilterChips
                options={ERA_OPTIONS}
                selected={eraFilter}
                onSelect={setEraFilter}
                label="Era"
              />
              <FilterChips
                options={POSITION_OPTIONS}
                selected={positionFilter}
                onSelect={setPositionFilter}
                label="Position"
              />
              <FilterChips
                options={LEAGUE_OPTIONS}
                selected={leagueFilter}
                onSelect={setLeagueFilter}
                label="League"
              />
              {hasActiveFilters && (
                <Pressable onPress={resetAllFilters} style={styles.clearFiltersButton}>
                  <ThemedText type="small" style={{ color: theme.primary }}>Clear Filters</ThemedText>
                </Pressable>
              )}
            </View>
          )}

          {!selectedPosition ? (
            <View style={styles.dragHint}>
              <Feather name="info" size={14} color={theme.textSecondary} />
              <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.xs }}>
                Press and hold a player to drag, or tap a position first
              </ThemedText>
            </View>
          ) : null}

          <ScrollView 
            style={styles.playerList}
            contentContainerStyle={[
              styles.playerListContent,
              { paddingBottom: insets.bottom + Spacing.xl }
            ]}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            nestedScrollEnabled
          >
            {teamLoadError ? (
              <View style={styles.selectPrompt}>
                <ThemedText type="body" style={{ color: theme.error, textAlign: 'center' }}>
                  {teamLoadError}
                </ThemedText>
              </View>
            ) : null}
            {!teamLoadError && isTeamLoading ? (
              <View style={styles.selectPrompt}>
                <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center' }}>
                  Loading {selectedTeam.label} players...
                </ThemedText>
              </View>
            ) : null}
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player, index) => (
                <Animated.View key={player.id} entering={FadeIn.delay(Math.min(index * 15, 300))}>
                  <DraggablePlayerCard
                    player={player}
                    onSelect={() => selectedPosition ? handlePlayerSelect(player) : handlePositionPress(selectedFormation.positions[0])}
                    isSelected={alreadySelectedIds.has(player.id)}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragMove={handleDragMove}
                  />
                </Animated.View>
              ))
            ) : searchQuery ? (
              <View style={styles.emptyResults}>
                <Feather name="search" size={32} color={theme.textSecondary} />
                <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md, textAlign: 'center' }}>
                  No players found matching &quot;{searchQuery}&quot;
                </ThemedText>
                <Pressable onPress={resetAllFilters} style={{ marginTop: Spacing.md }}>
                  <ThemedText type="small" style={{ color: theme.primary }}>Clear Filters</ThemedText>
                </Pressable>
              </View>
            ) : (
              <View style={styles.selectPrompt}>
                <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center' }}>
                  No players loaded
                </ThemedText>
              </View>
            )}
          </ScrollView>
        </View>
        </ScrollView>
      </ThemedView>
      
      {draggingPlayer && dragPosition && (
        <View 
          style={[
            styles.floatingDragIndicator,
            {
              left: dragPosition.x - DRAG_CIRCLE_SIZE / 2,
              top: dragPosition.y - DRAG_CIRCLE_SIZE / 2,
              backgroundColor: Colors.light.pitchGreen,
            }
          ]}
          pointerEvents="none"
        >
          <ThemedText 
            type="body" 
            style={{ 
              fontWeight: '700',
              color: '#FFFFFF',
              fontSize: 16,
            }}
          >
            {draggingPlayer.rating}
          </ThemedText>
        </View>
      )}

      {showCreatePlayerModal && (
        <Pressable 
          style={styles.modalOverlay}
          onPress={() => setShowCreatePlayerModal(false)}
        >
          <Pressable 
            style={[styles.modalContent, { backgroundColor: theme.backgroundDefault }]}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.modalHeader}>
              <ThemedText type="h4">Create Custom Player</ThemedText>
              <Pressable onPress={() => setShowCreatePlayerModal(false)}>
                <Feather name="x" size={24} color={theme.text} />
              </Pressable>
            </View>

            <View style={styles.modalBody}>
              <View style={styles.formGroup}>
                <ThemedText type="small" style={{ color: theme.textSecondary, marginBottom: Spacing.xs }}>
                  Player Name
                </ThemedText>
                <TextInput
                  style={[styles.modalInput, { backgroundColor: theme.backgroundSecondary, color: theme.text }]}
                  value={createPlayerForm.name}
                  onChangeText={(text) => setCreatePlayerForm(prev => ({ ...prev, name: text }))}
                  placeholder="Enter player name"
                  placeholderTextColor={theme.textSecondary}
                />
              </View>

              <View style={styles.formGroup}>
                <ThemedText type="small" style={{ color: theme.textSecondary, marginBottom: Spacing.xs }}>
                  Position
                </ThemedText>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.positionScroll}>
                  {POSITION_OPTIONS.filter(p => p !== 'ALL').map((pos) => (
                    <Pressable
                      key={pos}
                      onPress={() => setCreatePlayerForm(prev => ({ ...prev, position: pos as Position }))}
                      style={[
                        styles.positionOption,
                        { 
                          backgroundColor: createPlayerForm.position === pos ? theme.primary : theme.backgroundSecondary,
                          borderColor: createPlayerForm.position === pos ? theme.primary : theme.border,
                        }
                      ]}
                    >
                      <ThemedText 
                        type="small" 
                        style={{ 
                          color: createPlayerForm.position === pos ? '#FFFFFF' : theme.text,
                          fontWeight: '600',
                        }}
                      >
                        {pos}
                      </ThemedText>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>

              <View style={styles.formGroup}>
                <ThemedText type="small" style={{ color: theme.textSecondary, marginBottom: Spacing.xs }}>
                  Rating: {createPlayerForm.rating}
                </ThemedText>
                <View style={styles.ratingRow}>
                  <Pressable 
                    onPress={() => setCreatePlayerForm(prev => ({ ...prev, rating: Math.max(40, prev.rating - 5) }))}
                    style={[styles.ratingButton, { backgroundColor: theme.backgroundSecondary }]}
                  >
                    <Feather name="minus" size={20} color={theme.text} />
                  </Pressable>
                  <View style={[styles.ratingDisplay, { backgroundColor: theme.primary }]}>
                    <ThemedText type="h3" style={{ color: '#FFFFFF' }}>
                      {createPlayerForm.rating}
                    </ThemedText>
                  </View>
                  <Pressable 
                    onPress={() => setCreatePlayerForm(prev => ({ ...prev, rating: Math.min(99, prev.rating + 5) }))}
                    style={[styles.ratingButton, { backgroundColor: theme.backgroundSecondary }]}
                  >
                    <Feather name="plus" size={20} color={theme.text} />
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={styles.modalFooter}>
              <Pressable 
                onPress={() => setShowCreatePlayerModal(false)}
                style={[styles.modalButton, { backgroundColor: theme.backgroundSecondary }]}
              >
                <ThemedText type="body" style={{ color: theme.text }}>Cancel</ThemedText>
              </Pressable>
              <Pressable 
                onPress={handleCreatePlayer}
                style={[styles.modalButton, { backgroundColor: theme.primary }]}
              >
                <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '600' }}>Create Player</ThemedText>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      )}

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingDragIndicator: {
    position: 'absolute',
    width: DRAG_CIRCLE_SIZE,
    height: DRAG_CIRCLE_SIZE,
    borderRadius: DRAG_CIRCLE_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Spacing.xl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  exportButton: {
    padding: 4,
  },
  nameInput: {
    flex: 1,
    marginHorizontal: Spacing.lg,
    height: 40,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.md,
    fontSize: Typography.body.fontSize,
    textAlign: 'center',
    fontWeight: '600',
  },
  formationList: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xs,
    gap: Spacing.xs,
  },
  formationChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  createCustomChip: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pitchThemeSection: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.sm,
  },
  pitchThemeTitle: {
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  pitchThemeList: {
    paddingBottom: Spacing.xs,
    gap: Spacing.xs,
  },
  pitchThemeChip: {
    height: 32,
    minWidth: 92,
    borderRadius: BorderRadius.full,
    overflow: 'hidden',
  },
  pitchThemeChipContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: Spacing.sm,
  },
  pitch: {
    marginHorizontal: Spacing.xl,
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
    width: 50,
    height: 50,
    borderRadius: 25,
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
  lineupNameOverlay: {
    position: 'absolute',
    bottom: Spacing.sm,
    left: Spacing.md,
    right: Spacing.md,
    alignItems: 'center',
  },
  lineupNameText: {
    color: '#FFFFFF',
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  badgeOverlay: {
    position: 'absolute',
    top: Spacing.sm,
    left: Spacing.sm,
    width: 40,
    height: 40,
  },
  badgeImage: {
    width: 40,
    height: 40,
  },
  kitOverlay: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    width: 36,
    height: 48,
  },
  kitImage: {
    width: 36,
    height: 48,
  },
  customizeRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.sm,
    gap: Spacing.sm,
  },
  customizeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
  },
  customizeButtonImage: {
    width: 20,
    height: 20,
  },
  positionMarkerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  playerCircle: {
    borderRadius: 22.5,
    backgroundColor: '#8B0000',
    borderWidth: 2,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  playerAvatar: {
    width: '100%',
    height: '100%',
  },
  emptyCircle: {
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  playerMarkerRating: {
    fontWeight: '800',
    color: '#FFFFFF',
    fontSize: 14,
  },
  playerMarkerName: {
    fontWeight: '700',
    color: '#FFFFFF',
    fontSize: 10,
    marginTop: 2,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  emptyPositionLabel: {
    fontWeight: '600',
    color: '#1B5E20',
    fontSize: 9,
    marginTop: 2,
    textAlign: 'center',
  },
  selectedCircle: {
    borderWidth: 3,
    borderColor: '#00FF00',
    shadowColor: '#00FF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  selectedEmptyCircle: {
    backgroundColor: '#FFD700',
    borderWidth: 3,
    borderColor: '#00FF00',
    shadowColor: '#00FF00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  dropTargetCircle: {
    borderWidth: 3,
    borderColor: '#00BFFF',
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  dropTargetEmptyCircle: {
    backgroundColor: '#00BFFF',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  selectedPositionLabel: {
    color: '#FFFFFF',
    fontWeight: '700',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  playerSection: {
    paddingTop: Spacing.md,
    minHeight: 400,
  },
  playerSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.sm,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterToggle: {
    padding: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  searchBarContainer: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.sm,
    zIndex: 100,
  },
  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
    gap: Spacing.sm,
  },
  teamLabel: {
    width: 60,
    fontWeight: '500',
  },
  teamSelect: {
    flex: 1,
    height: 40,
    paddingHorizontal: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamDropdown: {
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: Spacing.sm,
  },
  teamOption: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    height: 44,
    borderRadius: BorderRadius.md,
    gap: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: Typography.body.fontSize,
    height: '100%',
  },
  autocompleteDropdown: {
    position: 'absolute',
    top: 48,
    left: Spacing.xl,
    right: Spacing.xl,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1000,
  },
  autocompleteSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
  },
  suggestionRating: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  suggestionInfo: {
    flex: 1,
  },
  suggestionPosition: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: BorderRadius.sm,
  },
  filtersContainer: {
    paddingHorizontal: Spacing.xl,
    gap: Spacing.xs,
    marginBottom: Spacing.sm,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterLabel: {
    width: 60,
    fontWeight: '500',
  },
  filterChipsContainer: {
    gap: Spacing.xs,
  },
  filterChip: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
  clearFiltersButton: {
    alignSelf: 'flex-start',
    paddingVertical: Spacing.xs,
  },
  dragHint: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.xs,
    pointerEvents: 'none',
  },
  playerList: {
    minHeight: 300,
  },
  playerListContent: {
    paddingHorizontal: Spacing.xl,
    gap: Spacing.sm,
  },
  playerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    overflow: 'hidden',
  },
    playerRating: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  playerInfo: {
    flex: 1,
  },
  dragHandle: {
    paddingHorizontal: Spacing.sm,
  },
  positionBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    marginLeft: Spacing.sm,
  },
  emptyResults: {
    alignItems: 'center',
    paddingVertical: Spacing.xl * 2,
  },
  selectPrompt: {
    alignItems: 'center',
    paddingVertical: Spacing.xl * 2,
  },
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    width: SCREEN_WIDTH - Spacing.xl * 2,
    maxWidth: 400,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    maxHeight: SCREEN_HEIGHT * 0.7,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  modalBody: {
    gap: Spacing.lg,
  },
  modalFooter: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.xl,
  },
  formGroup: {
    gap: Spacing.xs,
  },
  modalInput: {
    height: 48,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    fontSize: 16,
  },
  positionScroll: {
    flexGrow: 0,
  },
  positionOption: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    marginRight: Spacing.xs,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.lg,
  },
  ratingButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingDisplay: {
    width: 80,
    height: 60,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    flex: 1,
    height: 48,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
