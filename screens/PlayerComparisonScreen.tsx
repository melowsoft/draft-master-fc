import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
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
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { Player } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';
import { searchApiFootballPlayerProfiles } from '@/services/apiFootballService';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

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
  const width1 = (value1 / max) * 100;
  const width2 = (value2 / max) * 100;

  return (
    <View style={styles.statRow}>
      <ThemedText type="small" style={[styles.statLabel, { color: theme.textSecondary }]}>
        {label}
      </ThemedText>
      <View style={styles.statBars}>
        <View style={styles.statBarContainer}>
          <View 
            style={[
              styles.statBarFill, 
              { 
                width: `${width1}%`, 
                backgroundColor: value1 >= value2 ? Colors.light.gold : theme.backgroundSecondary 
              }
            ]} 
          />
          <ThemedText type="small" style={styles.statValue}>{value1}</ThemedText>
        </View>
        <View style={styles.statBarContainer}>
          <View 
            style={[
              styles.statBarFill, 
              { 
                width: `${width2}%`, 
                backgroundColor: value2 >= value1 ? Colors.light.pitchGreen : theme.backgroundSecondary 
              }
            ]} 
          />
          <ThemedText type="small" style={styles.statValue}>{value2}</ThemedText>
        </View>
      </View>
    </View>
  );
}

function PlayerCard({
  player,
  onRemove,
  color,
}: {
  player: Player | null;
  onRemove: () => void;
  color: string;
}) {
  const { theme } = useTheme();

  if (!player) {
    return (
      <View style={[styles.playerSlot, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
        <Feather name="user-plus" size={24} color={theme.textSecondary} />
        <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.xs }}>
          Select Player
        </ThemedText>
      </View>
    );
  }

  return (
    <View style={[styles.selectedPlayer, { backgroundColor: color + '15', borderColor: color }]}>
      <Pressable 
        onPress={onRemove} 
        style={[styles.removeButton, { backgroundColor: theme.backgroundSecondary }]}
        hitSlop={8}
      >
        <Feather name="x" size={14} color={theme.text} />
      </Pressable>
      <View style={[styles.ratingCircle, { backgroundColor: color }]}>
        <ThemedText type="h3" style={{ color: '#FFFFFF', fontWeight: '700' }}>
          {player.rating}
        </ThemedText>
      </View>
      <ThemedText type="body" style={{ fontWeight: '600', textAlign: 'center' }} numberOfLines={2}>
        {player.name}
      </ThemedText>
      <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.xs }}>
        {player.position} • {player.nationality}
      </ThemedText>
      <View style={[styles.eraBadge, { backgroundColor: theme.backgroundSecondary }]}>
        <ThemedText type="small" style={{ fontSize: 10 }}>
          {player.era}
        </ThemedText>
      </View>
    </View>
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
    opacity: isDisabled ? 0.4 : 1,
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
      <View style={[styles.playerRating, { backgroundColor: theme.backgroundSecondary }]}>
        <ThemedText type="small" style={{ fontWeight: '700' }}>
          {player.rating}
        </ThemedText>
      </View>
      <View style={styles.playerInfo}>
        <ThemedText type="body" style={{ fontWeight: '600' }} numberOfLines={1}>
          {player.name}
        </ThemedText>
        <ThemedText type="small" style={{ color: theme.textSecondary }}>
          {player.position} • {player.nationality}
        </ThemedText>
      </View>
      <View style={[styles.positionBadge, { backgroundColor: theme.backgroundSecondary }]}>
        <ThemedText type="small" style={{ fontWeight: '600', fontSize: 10 }}>
          {player.era === 'Legends' ? 'LEG' : player.era === 'Rising Stars' ? 'RS' : 'MOD'}
        </ThemedText>
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
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 300);
  const [apiPlayers, setApiPlayers] = useState<Player[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState('');

  const filteredPlayers = useMemo(() => {
    if (debouncedSearchQuery.trim().length < 2) return [];
    return apiPlayers.slice(0, 30);
  }, [apiPlayers, debouncedSearchQuery]);

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
  };

  const showComparison = player1 && player2 && stats1 && stats2;

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + Spacing.sm }]}>
        <Pressable onPress={() => router.back()} hitSlop={12}>
          <Feather name="arrow-left" size={24} color={theme.text} />
        </Pressable>
        <ThemedText type="h3" style={{ flex: 1, textAlign: 'center' }}>Compare Players</ThemedText>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + Spacing.xl }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.playersRow}>
          <Pressable 
            style={styles.playerSlotContainer}
            onPress={() => setSelectingSlot(1)}
          >
            <PlayerCard 
              player={player1} 
              onRemove={() => setPlayer1(null)} 
              color={Colors.light.gold}
            />
          </Pressable>

          <View style={styles.vsContainer}>
            <ThemedText type="h3" style={{ color: theme.textSecondary }}>VS</ThemedText>
          </View>

          <Pressable 
            style={styles.playerSlotContainer}
            onPress={() => setSelectingSlot(2)}
          >
            <PlayerCard 
              player={player2} 
              onRemove={() => setPlayer2(null)} 
              color={Colors.light.pitchGreen}
            />
          </Pressable>
        </View>

        {showComparison && (
          <Animated.View entering={FadeIn} style={[styles.comparisonCard, { backgroundColor: theme.backgroundSecondary }]}>
            <ThemedText type="h4" style={{ marginBottom: Spacing.lg }}>Stats Comparison</ThemedText>
            
            <View style={styles.statsHeader}>
              <View style={[styles.playerLabel, { backgroundColor: Colors.light.gold + '30' }]}>
                <ThemedText type="small" numberOfLines={1} style={{ fontWeight: '600' }}>
                  {player1.name.split(' ').pop()}
                </ThemedText>
              </View>
              <View style={{ width: 60 }} />
              <View style={[styles.playerLabel, { backgroundColor: Colors.light.pitchGreen + '30' }]}>
                <ThemedText type="small" numberOfLines={1} style={{ fontWeight: '600' }}>
                  {player2.name.split(' ').pop()}
                </ThemedText>
              </View>
            </View>

            <StatBar label="Pace" value1={stats1.pace} value2={stats2.pace} player1Name={player1.name} player2Name={player2.name} />
            <StatBar label="Shooting" value1={stats1.shooting} value2={stats2.shooting} player1Name={player1.name} player2Name={player2.name} />
            <StatBar label="Passing" value1={stats1.passing} value2={stats2.passing} player1Name={player1.name} player2Name={player2.name} />
            <StatBar label="Dribbling" value1={stats1.dribbling} value2={stats2.dribbling} player1Name={player1.name} player2Name={player2.name} />
            <StatBar label="Defending" value1={stats1.defending} value2={stats2.defending} player1Name={player1.name} player2Name={player2.name} />
            <StatBar label="Physical" value1={stats1.physical} value2={stats2.physical} player1Name={player1.name} player2Name={player2.name} />

            <View style={styles.overallRow}>
              <View style={[styles.overallBox, { backgroundColor: Colors.light.gold + '20' }]}>
                <ThemedText type="small" style={{ color: theme.textSecondary }}>Overall</ThemedText>
                <ThemedText type="h2" style={{ color: Colors.light.gold }}>{player1.rating}</ThemedText>
              </View>
              <View style={[styles.overallBox, { backgroundColor: Colors.light.pitchGreen + '20' }]}>
                <ThemedText type="small" style={{ color: theme.textSecondary }}>Overall</ThemedText>
                <ThemedText type="h2" style={{ color: Colors.light.pitchGreen }}>{player2.rating}</ThemedText>
              </View>
            </View>
          </Animated.View>
        )}

        {selectingSlot && (
          <Animated.View entering={FadeIn} style={[styles.selectionPanel, { backgroundColor: theme.backgroundSecondary }]}>
            <View style={styles.selectionHeader}>
              <ThemedText type="h4">Select Player {selectingSlot}</ThemedText>
              <Pressable onPress={() => { setSelectingSlot(null); setSearchQuery(''); }}>
                <Feather name="x" size={20} color={theme.text} />
              </Pressable>
            </View>

            <View style={[styles.searchBar, { backgroundColor: theme.backgroundDefault }]}>
              <Feather name="search" size={18} color={theme.textSecondary} />
              <TextInput
                style={[styles.searchInput, { color: theme.text }]}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder="Search players..."
                placeholderTextColor={theme.textSecondary}
                autoFocus
              />
              {searchQuery ? (
                <Pressable onPress={() => setSearchQuery('')}>
                  <Feather name="x" size={18} color={theme.textSecondary} />
                </Pressable>
              ) : null}
            </View>

            <View style={styles.playerListContainer}>
              {searchError ? (
                <ThemedText type="small" style={{ color: theme.error, marginBottom: Spacing.sm }}>
                  {searchError}
                </ThemedText>
              ) : null}
              {!searchError && isSearching ? (
                <ThemedText type="small" style={{ color: theme.textSecondary, marginBottom: Spacing.sm }}>
                  Searching...
                </ThemedText>
              ) : null}
              {!searchError && !isSearching && debouncedSearchQuery.trim().length < 2 ? (
                <ThemedText type="small" style={{ color: theme.textSecondary, marginBottom: Spacing.sm }}>
                  Type at least 2 characters to search
                </ThemedText>
              ) : null}
              {!searchError && !isSearching && debouncedSearchQuery.trim().length >= 2 && filteredPlayers.length === 0 ? (
                <ThemedText type="small" style={{ color: theme.textSecondary, marginBottom: Spacing.sm }}>
                  No players found
                </ThemedText>
              ) : null}
              {filteredPlayers.map((player, index) => (
                <PlayerListItem
                  key={player.id}
                  player={player}
                  onSelect={() => handleSelectPlayer(player)}
                  isDisabled={player.id === player1?.id || player.id === player2?.id}
                />
              ))}
            </View>
          </Animated.View>
        )}

        {!player1 && !player2 && !selectingSlot && (
          <View style={styles.emptyState}>
            <Feather name="users" size={48} color={theme.textSecondary} />
            <ThemedText type="body" style={{ color: theme.textSecondary, marginTop: Spacing.md, textAlign: 'center' }}>
              Select two players to compare their stats
            </ThemedText>
            <ThemedText type="small" style={{ color: theme.textSecondary, marginTop: Spacing.sm, textAlign: 'center' }}>
              Tap on either slot above to start
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
    paddingBottom: Spacing.md,
  },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
  },
  playersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  playerSlotContainer: {
    flex: 1,
  },
  playerSlot: {
    aspectRatio: 0.75,
    borderRadius: BorderRadius.lg,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedPlayer: {
    aspectRatio: 0.75,
    borderRadius: BorderRadius.lg,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.md,
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
  },
  eraBadge: {
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  vsContainer: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comparisonCard: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  playerLabel: {
    flex: 1,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.sm,
    alignItems: 'center',
  },
  statRow: {
    marginBottom: Spacing.md,
  },
  statLabel: {
    marginBottom: Spacing.xs,
    fontWeight: '600',
  },
  statBars: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  statBarContainer: {
    flex: 1,
    height: 24,
    borderRadius: BorderRadius.xs,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statBarFill: {
    height: '100%',
    borderRadius: BorderRadius.xs,
  },
  statValue: {
    marginLeft: Spacing.sm,
    fontWeight: '700',
    position: 'absolute',
    right: Spacing.sm,
  },
  overallRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  overallBox: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  selectionPanel: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  selectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    height: 44,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.md,
  },
  searchInput: {
    flex: 1,
    marginLeft: Spacing.sm,
    fontSize: 16,
  },
  playerListContainer: {
    gap: Spacing.xs,
    maxHeight: 300,
  },
  playerListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.sm,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  playerRating: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerInfo: {
    flex: 1,
    marginLeft: Spacing.sm,
  },
  positionBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.xs,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: Spacing['3xl'],
  },
});
