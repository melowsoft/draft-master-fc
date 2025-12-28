import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect, useMemo, useState } from 'react';
import {
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import Animated, {
    FadeIn,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { players as defaultPlayers } from '@/data/players';
import { Player } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';
import { searchApiFootballPlayerProfiles } from '@/services/apiFootballService';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedView = Animated.createAnimatedComponent(View);

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);

  return debouncedValue;
}

interface StatBarProps {
  label: string;
  value1: number;
  value2: number;
  player1Name: string;
  player2Name: string;
}

function StatBar({ label, value1, value2, player1Name, player2Name }: StatBarProps) {
  const { theme } = useTheme();
  const max = Math.max(value1, value2);
  const width1 = useSharedValue(0);
  const width2 = useSharedValue(0);

  useEffect(() => {
    width1.value = withTiming((value1 / max) * 100, { duration: 500 });
    width2.value = withTiming((value2 / max) * 100, { duration: 500 });
  }, [value1, value2, max]);

  const barStyle1 = useAnimatedStyle(() => ({
    width: `${width1.value}%`,
  }));

  const barStyle2 = useAnimatedStyle(() => ({
    width: `${width2.value}%`,
  }));

  const getWinnerColor = (value: number, opponentValue: number) => {
    if (value > opponentValue) return Colors.light.gold;
    if (value < opponentValue) return Colors.light.pitchGreen;
    return theme.backgroundTertiary;
  };

  return (
    <View style={styles.statRow}>
      <View style={styles.statHeader}>
        <ThemedText type="small" style={[styles.statLabel, { color: theme.textSecondary }]}>
          {label}
        </ThemedText>
        <View style={styles.statValues}>
          <ThemedText 
            type="small" 
            style={[
              styles.statValue, 
              { 
                color: value1 > value2 ? Colors.light.gold : 
                       value1 < value2 ? theme.textSecondary : theme.text 
              }
            ]}
          >
            {value1}
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textTertiary, marginHorizontal: 4 }}>
            •
          </ThemedText>
          <ThemedText 
            type="small" 
            style={[
              styles.statValue, 
              { 
                color: value2 > value1 ? Colors.light.pitchGreen : 
                       value2 < value1 ? theme.textSecondary : theme.text 
              }
            ]}
          >
            {value2}
          </ThemedText>
        </View>
      </View>
      
      <View style={styles.statBarsContainer}>
        <View style={styles.statBarWrapper}>
          <View style={[styles.statBarBackground, { backgroundColor: theme.backgroundTertiary }]} />
          <AnimatedView 
            style={[
              styles.statBarFill, 
              barStyle1,
              { 
                backgroundColor: getWinnerColor(value1, value2),
                opacity: value1 === value2 ? 0.5 : 1,
              }
            ]} 
          />
        </View>
        
        <View style={styles.statBarDivider}>
          <View style={[styles.statBarDividerLine, { backgroundColor: theme.border }]} />
          <View style={[styles.statBarDividerDot, { backgroundColor: theme.textTertiary }]} />
          <View style={[styles.statBarDividerLine, { backgroundColor: theme.border }]} />
        </View>
        
        <View style={styles.statBarWrapper}>
          <View style={[styles.statBarBackground, { backgroundColor: theme.backgroundTertiary }]} />
          <AnimatedView 
            style={[
              styles.statBarFill, 
              barStyle2,
              { 
                backgroundColor: getWinnerColor(value2, value1),
                opacity: value2 === value1 ? 0.5 : 1,
              }
            ]} 
          />
        </View>
      </View>
    </View>
  );
}

function PlayerCard({
  player,
  onRemove,
  color,
  isActive = false,
  onPress,
}: {
  player: Player | null;
  onRemove: () => void;
  color: string;
  isActive?: boolean;
  onPress: () => void;
}) {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  if (!player) {
    return (
      <AnimatedPressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.selectedPlayerContainer, animatedStyle]}
      >
        <View style={[
          styles.playerSlot, 
          { 
            backgroundColor: isActive ? color + '15' : theme.backgroundSecondary,
            borderColor: isActive ? color + '50' : theme.border,
            borderWidth: isActive ? 2 : 1,
          }
        ]}>
          <View style={[styles.emptySlotIcon, { backgroundColor: theme.backgroundTertiary }]}>
            <Feather name="user-plus" size={24} color={theme.textSecondary} />
          </View>
          <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md, fontWeight: '600' }}>
            Select Player
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textTertiary, marginTop: Spacing.xs }}>
            Tap to choose
          </ThemedText>
        </View>
      </AnimatedPressable>
    );
  }

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.selectedPlayerContainer, animatedStyle]}
    >
      <View style={[styles.selectedPlayer, { backgroundColor: color + '10', borderColor: color }]}>
        {player.image ? (
          <Image 
            source={{ uri: player.image }} 
            style={styles.playerPhoto} 
            contentFit="cover"
            transition={200}
          />
        ) : (
          <View style={[styles.playerPhotoFallback, { backgroundColor: color + '20' }]}>
            <ThemedText type="h1" style={{ fontWeight: '900', color: color, opacity: 0.8 }}>
              {player.name
                .split(' ')
                .filter(Boolean)
                .slice(0, 2)
                .map((n) => n[0]?.toUpperCase())
                .join('')}
            </ThemedText>
          </View>
        )}
        
        <View style={[styles.playerRatingBadge, { backgroundColor: color }]}>
          <ThemedText type="small" style={{ fontWeight: '800', color: Colors.light.background }}>
            {player.rating}
          </ThemedText>
        </View>
        
        <Pressable
          onPress={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          style={[styles.removeButton, { backgroundColor: theme.background }]}
          hitSlop={8}
        >
          <Feather name="x" size={14} color={theme.text} />
        </Pressable>
      </View>
      
      <View style={styles.selectedPlayerMeta}>
        <ThemedText 
          type="body" 
          style={{ 
            fontWeight: '700', 
            textAlign: 'center',
            lineHeight: 20 
          }} 
          numberOfLines={2}
        >
          {player.name}
        </ThemedText>
        <View style={styles.playerDetails}>
          <View style={[styles.positionBadge, { backgroundColor: color + '20' }]}>
            <ThemedText 
              type="small" 
              style={{ 
                fontWeight: '700', 
                color: color,
                fontSize: 10 
              }}
            >
              {player.position}
            </ThemedText>
          </View>
          {player.club && (
            <ThemedText 
              type="small" 
              style={{ 
                color: theme.textTertiary,
                marginLeft: Spacing.xs 
              }}
              numberOfLines={1}
            >
              • {player.club}
            </ThemedText>
          )}
        </View>
      </View>
    </AnimatedPressable>
  );
}

function PlayerListItem({
  player,
  onSelect,
  isDisabled,
}: {
  player: Player;
  onSelect: () => void;
  isDisabled: boolean;
}) {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: isDisabled ? 0.5 : 1,
  }));

  return (
    <AnimatedPressable
      onPress={() => {
        if (isDisabled) return;
        if (Platform.OS !== 'web') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onSelect();
      }}
      onPressIn={() => { if (!isDisabled) scale.value = withSpring(0.98); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={[
        styles.playerListItem,
        { 
          backgroundColor: theme.backgroundDefault,
          borderColor: theme.border,
        },
        animatedStyle,
      ]}
    >
      {player.image ? (
        <Image 
          source={{ uri: player.image }} 
          style={styles.listItemImage} 
          contentFit="cover"
        />
      ) : (
        <View style={[styles.listItemImageFallback, { backgroundColor: theme.backgroundTertiary }]}>
          <ThemedText type="small" style={{ fontWeight: '700', color: theme.text }}>
            {player.name
              .split(' ')
              .filter(Boolean)
              .slice(0, 2)
              .map((n) => n[0]?.toUpperCase())
              .join('')}
          </ThemedText>
        </View>
      )}
      
      <View style={styles.playerInfo}>
        <ThemedText type="body" style={{ fontWeight: '600' }} numberOfLines={1}>
          {player.name}
        </ThemedText>
        <View style={styles.playerSubInfo}>
          <ThemedText type="small" style={{ color: theme.textSecondary }}>
            {player.position}
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textTertiary, marginHorizontal: 4 }}>
            •
          </ThemedText>
          <ThemedText type="small" style={{ color: theme.textSecondary }}>
            {player.nationality}
          </ThemedText>
          {player.club && (
            <>
              <ThemedText type="small" style={{ color: theme.textTertiary, marginHorizontal: 4 }}>
                •
              </ThemedText>
              <ThemedText type="small" style={{ color: theme.textSecondary }} numberOfLines={1}>
                {player.club}
              </ThemedText>
            </>
          )}
        </View>
      </View>
      
      <View style={styles.listItemRightSection}>
        <View style={[styles.eraBadge, { backgroundColor: theme.backgroundTertiary }]}>
          <ThemedText type="small" style={{ fontWeight: '600', fontSize: 10 }}>
            {player.era === 'Legends' ? 'LEG' : player.era === 'Rising Stars' ? 'RS' : 'MOD'}
          </ThemedText>
        </View>
        <View style={[styles.listItemRating, { backgroundColor: theme.backgroundSecondary }]}>
          <ThemedText type="small" style={{ fontWeight: '800' }}>
            {player.rating}
          </ThemedText>
        </View>
      </View>
    </AnimatedPressable>
  );
}

function generateStats(player: Player): { [key: string]: number } {
  const baseStats = {
    pace: 0,
    shooting: 0,
    passing: 0,
    dribbling: 0,
    defending: 0,
    physical: 0,
  };

  const positionMultipliers: { [key: string]: { [key: string]: number } } = {
    GK: { pace: 0.4, shooting: 0.1, passing: 0.5, dribbling: 0.3, defending: 0.9, physical: 0.8 },
    CB: { pace: 0.6, shooting: 0.3, passing: 0.6, dribbling: 0.5, defending: 0.95, physical: 0.9 },
    LB: { pace: 0.85, shooting: 0.4, passing: 0.7, dribbling: 0.7, defending: 0.8, physical: 0.75 },
    RB: { pace: 0.85, shooting: 0.4, passing: 0.7, dribbling: 0.7, defending: 0.8, physical: 0.75 },
    CDM: { pace: 0.65, shooting: 0.5, passing: 0.75, dribbling: 0.7, defending: 0.85, physical: 0.85 },
    CM: { pace: 0.7, shooting: 0.7, passing: 0.85, dribbling: 0.8, defending: 0.65, physical: 0.75 },
    CAM: { pace: 0.8, shooting: 0.8, passing: 0.9, dribbling: 0.9, defending: 0.4, physical: 0.6 },
    LM: { pace: 0.9, shooting: 0.7, passing: 0.8, dribbling: 0.85, defending: 0.45, physical: 0.65 },
    RM: { pace: 0.9, shooting: 0.7, passing: 0.8, dribbling: 0.85, defending: 0.45, physical: 0.65 },
    LW: { pace: 0.95, shooting: 0.8, passing: 0.75, dribbling: 0.92, defending: 0.35, physical: 0.6 },
    RW: { pace: 0.95, shooting: 0.8, passing: 0.75, dribbling: 0.92, defending: 0.35, physical: 0.6 },
    CF: { pace: 0.85, shooting: 0.88, passing: 0.8, dribbling: 0.85, defending: 0.35, physical: 0.75 },
    ST: { pace: 0.88, shooting: 0.95, passing: 0.65, dribbling: 0.82, defending: 0.3, physical: 0.8 },
  };

  const multipliers = positionMultipliers[player.position] || positionMultipliers.CM;
  const variance = () => Math.floor(Math.random() * 8) - 4;
  const baseRating = player.rating;

  return {
    pace: Math.min(99, Math.max(40, Math.round(baseRating * multipliers.pace) + variance())),
    shooting: Math.min(99, Math.max(40, Math.round(baseRating * multipliers.shooting) + variance())),
    passing: Math.min(99, Math.max(40, Math.round(baseRating * multipliers.passing) + variance())),
    dribbling: Math.min(99, Math.max(40, Math.round(baseRating * multipliers.dribbling) + variance())),
    defending: Math.min(99, Math.max(40, Math.round(baseRating * multipliers.defending) + variance())),
    physical: Math.min(99, Math.max(40, Math.round(baseRating * multipliers.physical) + variance())),
  };
}

const statsCache = new Map<string, { [key: string]: number }>();

function getPlayerStats(player: Player): { [key: string]: number } {
  if (statsCache.has(player.id)) {
    return statsCache.get(player.id)!;
  }
  const stats = generateStats(player);
  statsCache.set(player.id, stats);
  return stats;
}

export default function PlayerComparisonScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [player1, setPlayer1] = useState<Player | null>(null);
  const [player2, setPlayer2] = useState<Player | null>(null);
  const [selectingSlot, setSelectingSlot] = useState<1 | 2 | null>(null);
  const [activeTab, setActiveTab] = useState<'overall' | 'chart'>('overall');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);
  const [apiPlayers, setApiPlayers] = useState<Player[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  const candidatePlayers = useMemo(() => {
    const combined = [...defaultPlayers, ...apiPlayers];
    const seen = new Set<string>();
    return combined.filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  }, [apiPlayers]);

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

    const query = debouncedSearchQuery.trim();
    if (query.length < 2) return [];

    const scored = candidatePlayers
      .map((player) => ({ player, score: scoreNameMatch(player.name, query) }))
      .filter((x) => x.score > 0);

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (b.player.rating !== a.player.rating) return b.player.rating - a.player.rating;
      return a.player.name.localeCompare(b.player.name);
    });

    return scored.slice(0, 10).map((x) => x.player);
  }, [candidatePlayers, debouncedSearchQuery]);

  useEffect(() => {
    const query = debouncedSearchQuery.trim();
    if (!selectingSlot || query.length < 2) {
      setApiPlayers([]);
      setSearchError('');
      setIsSearching(false);
      return;
    }

    const controller = new AbortController();
    setIsSearching(true);
    setSearchError('');

    searchApiFootballPlayerProfiles({
      query,
      league: 'Other',
      signal: controller.signal,
    })
      .then((players) => setApiPlayers(players))
      .catch((e) => {
        if (controller.signal.aborted) return;
        setApiPlayers([]);
        setSearchError(e instanceof Error ? e.message : String(e));
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsSearching(false);
      });

    return () => controller.abort();
  }, [debouncedSearchQuery, selectingSlot]);

  const stats1 = player1 ? getPlayerStats(player1) : null;
  const stats2 = player2 ? getPlayerStats(player2) : null;

  const handleSelectPlayer = (player: Player) => {
    if (selectingSlot === 1) {
      setPlayer1(player);
    } else if (selectingSlot === 2) {
      setPlayer2(player);
    }
    setSelectingSlot(null);
    setSearchQuery('');
    setActiveTab('overall');
  };

  const showComparison = player1 && player2 && stats1 && stats2;

  useEffect(() => {
    if (!showComparison && activeTab !== 'overall') {
      setActiveTab('overall');
    }
  }, [activeTab, showComparison]);

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + Spacing.sm }]}>
        <Pressable 
          onPress={() => router.back()} 
          style={styles.backButton}
          hitSlop={12}
        >
          <Feather name="arrow-left" size={24} color={theme.text} />
        </Pressable>
        <ThemedText type="h3" style={styles.headerTitle}>Compare Players</ThemedText>
        <View style={styles.headerRight} />
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + Spacing.xl }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.comparisonSection,
            { marginTop: Spacing.xl, marginBottom: showComparison ? Spacing.lg : Spacing.xl },
          ]}
        >
          <View style={[styles.subTabs, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
            <Pressable
              disabled={!showComparison}
              onPress={() => setActiveTab('overall')}
              style={[
                styles.subTab,
                activeTab === 'overall' ? styles.subTabActive : null,
                { backgroundColor: activeTab === 'overall' ? theme.background : 'transparent' },
                !showComparison ? { opacity: 0.6 } : null,
              ]}
            >
              <ThemedText
                type="small"
                style={{ color: activeTab === 'overall' ? theme.text : theme.textSecondary, fontWeight: '700' }}
              >
                Overall
              </ThemedText>
            </Pressable>
            <Pressable
              disabled={!showComparison}
              onPress={() => setActiveTab('chart')}
              style={[
                styles.subTab,
                activeTab === 'chart' ? styles.subTabActive : null,
                { backgroundColor: activeTab === 'chart' ? theme.background : 'transparent' },
                !showComparison ? { opacity: 0.6 } : null,
              ]}
            >
              <ThemedText
                type="small"
                style={{ color: activeTab === 'chart' ? theme.text : theme.textSecondary, fontWeight: '700' }}
              >
                Chart
              </ThemedText>
            </Pressable>
          </View>
        </View>

        <View style={styles.playersRow}>
          <PlayerCard 
            player={player1} 
            onRemove={() => setPlayer1(null)} 
            color={Colors.light.gold}
            isActive={selectingSlot === 1}
            onPress={() => setSelectingSlot(1)}
          />

          <View style={styles.vsContainer}>
            <View style={[styles.vsCircle, { backgroundColor: theme.backgroundTertiary }]}>
              <ThemedText type="small" style={{ fontWeight: '800', color: theme.textSecondary }}>VS</ThemedText>
            </View>
          </View>

          <PlayerCard 
            player={player2} 
            onRemove={() => setPlayer2(null)} 
            color={Colors.light.pitchGreen}
            isActive={selectingSlot === 2}
            onPress={() => setSelectingSlot(2)}
          />
        </View>

        {showComparison && activeTab === 'overall' && (
          <Animated.View entering={FadeIn} style={styles.comparisonSection}>
            <View style={[styles.comparisonHeader, { borderBottomColor: theme.border }]}>
              <ThemedText type="h4">Stats Comparison</ThemedText>
              <View style={styles.comparisonLegend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.light.gold }]} />
                  <ThemedText type="small" style={{ color: theme.textSecondary }}>
                    {player1.name.split(' ').pop()}
                  </ThemedText>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.light.pitchGreen }]} />
                  <ThemedText type="small" style={{ color: theme.textSecondary }}>
                    {player2.name.split(' ').pop()}
                  </ThemedText>
                </View>
              </View>
            </View>

            <View style={[styles.comparisonCard, { backgroundColor: theme.backgroundSecondary }]}>
              <StatBar label="Pace" value1={stats1.pace} value2={stats2.pace} player1Name={player1.name} player2Name={player2.name} />
              <StatBar label="Shooting" value1={stats1.shooting} value2={stats2.shooting} player1Name={player1.name} player2Name={player2.name} />
              <StatBar label="Passing" value1={stats1.passing} value2={stats2.passing} player1Name={player1.name} player2Name={player2.name} />
              <StatBar label="Dribbling" value1={stats1.dribbling} value2={stats2.dribbling} player1Name={player1.name} player2Name={player2.name} />
              <StatBar label="Defending" value1={stats1.defending} value2={stats2.defending} player1Name={player1.name} player2Name={player2.name} />
              <StatBar label="Physical" value1={stats1.physical} value2={stats2.physical} player1Name={player1.name} player2Name={player2.name} />
            </View>

            <View style={styles.overallSection}>
              <View style={[styles.overallCard, { backgroundColor: Colors.light.gold + '15', borderColor: Colors.light.gold + '30' }]}>
                <ThemedText type="small" style={{ color: theme.textSecondary, fontWeight: '600' }}>OVERALL</ThemedText>
                <ThemedText type="h1" style={{ color: Colors.light.gold, marginTop: Spacing.xs }}>{player1.rating}</ThemedText>
                <ThemedText 
                  type="small" 
                  style={{ 
                    color: theme.textSecondary, 
                    marginTop: Spacing.sm,
                    textAlign: 'center' 
                  }}
                  numberOfLines={1}
                >
                  {player1.name}
                </ThemedText>
              </View>
              
              <View style={[styles.overallDivider, { backgroundColor: theme.border }]} />
              
              <View style={[styles.overallCard, { backgroundColor: Colors.light.pitchGreen + '15', borderColor: Colors.light.pitchGreen + '30' }]}>
                <ThemedText type="small" style={{ color: theme.textSecondary, fontWeight: '600' }}>OVERALL</ThemedText>
                <ThemedText type="h1" style={{ color: Colors.light.pitchGreen, marginTop: Spacing.xs }}>{player2.rating}</ThemedText>
                <ThemedText 
                  type="small" 
                  style={{ 
                    color: theme.textSecondary, 
                    marginTop: Spacing.sm,
                    textAlign: 'center' 
                  }}
                  numberOfLines={1}
                >
                  {player2.name}
                </ThemedText>
              </View>
            </View>
          </Animated.View>
        )}

        {selectingSlot && (
          <Animated.View entering={FadeIn} style={styles.selectionPanelContainer}>
            <View style={[styles.selectionPanel, { backgroundColor: theme.background }]}>
              <View style={styles.selectionHeader}>
                <View>
                  <ThemedText type="h4">Select Player</ThemedText>
                  <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: 2 }}>
                    Slot {selectingSlot}
                  </ThemedText>
                </View>
                <Pressable 
                  onPress={() => { setSelectingSlot(null); setSearchQuery(''); }}
                  style={styles.closeButton}
                  hitSlop={8}
                >
                  <Feather name="x" size={24} color={theme.text} />
                </Pressable>
              </View>

              <View style={[styles.searchContainer, { backgroundColor: theme.background }]}>
                <View style={[styles.searchBar, { backgroundColor: theme.backgroundSecondary }]}>
                  <Feather name="search" size={18} color={theme.textSecondary} />
                  <TextInput
                    style={[styles.searchInput, { color: theme.text }]}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search by name, club, or nationality..."
                    placeholderTextColor={theme.textTertiary}
                    autoFocus
                  />
                  {searchQuery ? (
                    <Pressable onPress={() => setSearchQuery('')} hitSlop={8}>
                      <Feather name="x" size={18} color={theme.textSecondary} />
                    </Pressable>
                  ) : null}
                </View>
                
                <View style={styles.searchHint}>
                  <Feather name="info" size={12} color={theme.textTertiary} />
                  <ThemedText type="small" style={{ color: theme.textTertiary, marginLeft: 4 }}>
                    Type at least 2 characters
                  </ThemedText>
                </View>
              </View>

              <View style={styles.playerListContainer}>
                {searchError ? (
                  <View style={[styles.emptyState, { backgroundColor: theme.backgroundTertiary }]}>
                    <Feather name="alert-circle" size={32} color={theme.error} />
                    <ThemedText type="body" style={{ color: theme.error, marginTop: Spacing.sm, textAlign: 'center' }}>
                      {searchError}
                    </ThemedText>
                  </View>
                ) : isSearching ? (
                  <View style={[styles.emptyState, { backgroundColor: theme.backgroundTertiary }]}>
                    <ThemedText type="body" style={{ color: theme.textSecondary }}>
                      Searching...
                    </ThemedText>
                  </View>
                ) : debouncedSearchQuery.trim().length < 2 ? (
                  <View style={[styles.emptyState, { backgroundColor: theme.backgroundTertiary }]}>
                    <Feather name="search" size={32} color={theme.textTertiary} />
                    <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
                      Start typing to search players
                    </ThemedText>
                    <ThemedText type="small" style={{ color: theme.textTertiary, marginTop: Spacing.xs, textAlign: 'center' }}>
                      Search by name, club, or nationality
                    </ThemedText>
                  </View>
                ) : filteredPlayers.length === 0 ? (
                  <View style={[styles.emptyState, { backgroundColor: theme.backgroundTertiary }]}>
                    <Feather name="users" size={32} color={theme.textTertiary} />
                    <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
                      No players found for “{debouncedSearchQuery}”
                    </ThemedText>
                    <ThemedText type="small" style={{ color: theme.textTertiary, marginTop: Spacing.xs, textAlign: 'center' }}>
                      Try a different search term
                    </ThemedText>
                  </View>
                ) : (
                  <>
                    <View style={styles.playerListHeader}>
                      <ThemedText type="small" style={{ color: theme.textSecondary }}>
                        {filteredPlayers.length} players found
                      </ThemedText>
                    </View>
                    <ScrollView 
                      style={styles.playerListScroll}
                      showsVerticalScrollIndicator={false}
                      nestedScrollEnabled
                    >
                      {filteredPlayers.map((player) => (
                        <PlayerListItem
                          key={player.id}
                          player={player}
                          onSelect={() => handleSelectPlayer(player)}
                          isDisabled={player.id === player1?.id || player.id === player2?.id}
                        />
                      ))}
                    </ScrollView>
                  </>
                )}
              </View>
            </View>
          </Animated.View>
        )}

        {!player1 && !player2 && !selectingSlot && (
          <View style={styles.emptyComparisonState}>
            <View style={[styles.emptyIllustration, { backgroundColor: theme.backgroundTertiary }]}>
              <Feather name="bar-chart-2" size={48} color={theme.textSecondary} />
            </View>
            <ThemedText type="h4" style={{ marginTop: Spacing.xl, textAlign: 'center' }}>
              Player Comparison
            </ThemedText>
            <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md, textAlign: 'center' }}>
              Select two players to compare their stats and abilities
            </ThemedText>
            <ThemedText type="small" style={{ color: theme.textTertiary, marginTop: Spacing.sm, textAlign: 'center' }}>
              Tap on either player slot above to begin
            </ThemedText>
          </View>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.border,
  },
  backButton: {
    padding: Spacing.xs,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  playersRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xl,
    gap: Spacing.md,
  },
  playerSlot: {
    flex: 1,
    aspectRatio: 0.7,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
  },
  emptySlotIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedPlayerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selectedPlayer: {
    aspectRatio: 0.7,
    width: '100%',
    borderRadius: BorderRadius.xl,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  playerPhoto: {
    width: '100%',
    height: '100%',
  },
  playerPhotoFallback: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerRatingBadge: {
    position: 'absolute',
    top: Spacing.md,
    left: Spacing.md,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  removeButton: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  selectedPlayerMeta: {
    width: '100%',
    paddingTop: Spacing.md,
    alignItems: 'center',
  },
  playerDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xs,
  },
  positionBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: BorderRadius.xs,
  },
  vsContainer: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Spacing.xl,
  },
  vsCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comparisonSection: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xl,
  },
  subTabs: {
    height: 44,
    borderRadius: BorderRadius.full,
    padding: 4,
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: Spacing.lg,
  },
  subTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.full,
  },
  subTabActive: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  comparisonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Spacing.md,
    marginBottom: Spacing.md,
    borderBottomWidth: 1,
  },
  comparisonLegend: {
    flexDirection: 'row',
    gap: Spacing.lg,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  comparisonCard: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Spacing.md,
    marginBottom: Spacing.md,
    borderBottomWidth: 1,
  },
  chartCard: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  chartRowSpacer: {
    marginTop: Spacing.md,
  },
  chartLabel: {
    width: 78,
    fontWeight: '600',
  },
  chartBars: {
    flex: 1,
    height: 56,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: Spacing.md,
  },
  chartBar: {
    width: 18,
    borderRadius: 6,
  },
  chartValues: {
    width: 54,
    alignItems: 'flex-end',
    gap: 2,
  },
  statRow: {
    marginBottom: Spacing.lg,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  statLabel: {
    fontWeight: '600',
    fontSize: 13,
  },
  statValues: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    fontWeight: '700',
    fontSize: 13,
    minWidth: 20,
    textAlign: 'center',
  },
  statBarsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  statBarWrapper: {
    flex: 1,
    height: 12,
    borderRadius: 6,
    overflow: 'hidden',
    position: 'relative',
  },
  statBarBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  statBarFill: {
    height: '100%',
    borderRadius: 6,
    position: 'absolute',
    left: 0,
  },
  statBarDivider: {
    width: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statBarDividerLine: {
    flex: 1,
    height: 1,
  },
  statBarDividerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 2,
  },
  overallSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.md,
  },
  overallCard: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
  },
  overallDivider: {
    width: 1,
    height: 40,
    marginHorizontal: Spacing.lg,
  },
  selectionPanelContainer: {
    paddingHorizontal: Spacing.xl,
    marginBottom: Spacing.xl,
  },
  selectionPanel: {
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  selectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.lg,
  },
  closeButton: {
    padding: Spacing.xs,
  },
  searchContainer: {
    marginBottom: Spacing.lg,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    height: 48,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    marginLeft: Spacing.sm,
    fontSize: 16,
    fontWeight: '500',
  },
  searchHint: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
  },
  playerListContainer: {
    minHeight: 200,
  },
  playerListHeader: {
    marginBottom: Spacing.sm,
  },
  playerListScroll: {
    maxHeight: 400,
  },
  playerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.sm,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    marginBottom: Spacing.xs,
  },
  listItemImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  listItemImageFallback: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerInfo: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  playerSubInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    flexWrap: 'wrap',
  },
  listItemRightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  eraBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs / 2,
    borderRadius: BorderRadius.xs,
  },
  listItemRating: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyState: {
    padding: Spacing.xl,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyComparisonState: {
    alignItems: 'center',
    paddingTop: Spacing['3xl'],
    paddingHorizontal: Spacing.xl,
  },
  emptyIllustration: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
