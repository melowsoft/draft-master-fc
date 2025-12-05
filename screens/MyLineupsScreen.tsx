import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Pressable, FlatList, RefreshControl, Alert, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, FadeIn } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import { useTheme } from '@/hooks/use-theme';
import { useScreenInsets } from '@/hooks/useScreenInsets';
import { Spacing, BorderRadius, Colors, Shadows } from '@/constants/theme';
import { RootStackParamList, MyLineupsStackParamList } from '@/navigation/types';
import { Lineup } from '@/data/types';
import { loadLineups, deleteLineup } from '@/data/storage';

type NavigationProp = NativeStackNavigationProp<RootStackParamList & MyLineupsStackParamList>;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

function LineupCard({ 
  lineup, 
  onPress, 
  onDelete 
}: { 
  lineup: Lineup; 
  onPress: () => void;
  onDelete: () => void;
}) {
  const { theme, isDark } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const playerCount = Object.keys(lineup.players || {}).length;
  const formattedDate = new Date(lineup.updatedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const handleLongPress = () => {
    Alert.alert(
      'Delete Lineup',
      `Are you sure you want to delete "${lineup.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: onDelete },
      ]
    );
  };

  return (
    <AnimatedPressable
      onPress={onPress}
      onLongPress={handleLongPress}
      onPressIn={() => { scale.value = withSpring(0.98); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={[
        styles.lineupCard,
        { backgroundColor: theme.backgroundDefault },
        animatedStyle,
      ]}
    >
      <View style={[styles.pitchPreview, { backgroundColor: isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen }]}>
        <View style={styles.pitchLines}>
          <View style={[styles.centerCircle, { borderColor: 'rgba(255,255,255,0.3)' }]} />
          <View style={[styles.centerLine, { backgroundColor: 'rgba(255,255,255,0.3)' }]} />
          <View style={[styles.penaltyBox, { borderColor: 'rgba(255,255,255,0.3)' }]} />
        </View>
        {lineup.formation.positions.map((pos) => {
          const hasPlayer = lineup.players && lineup.players[pos.id];
          return (
            <View
              key={pos.id}
              style={[
                styles.positionMarker,
                {
                  left: `${pos.x - 4}%`,
                  top: `${pos.y - 6}%`,
                  backgroundColor: hasPlayer ? '#FFD700' : 'rgba(255,255,255,0.5)',
                  borderWidth: hasPlayer ? 2 : 0,
                  borderColor: '#FFFFFF',
                },
              ]}
            />
          );
        })}
      </View>
      
      <View style={styles.lineupInfo}>
        <View style={styles.lineupHeader}>
          <ThemedText type="body" style={styles.lineupName} numberOfLines={1}>
            {lineup.name}
          </ThemedText>
          <View style={[styles.formationBadge, { backgroundColor: theme.backgroundSecondary }]}>
            <ThemedText type="small" style={{ fontWeight: '600' }}>
              {lineup.formation.name}
            </ThemedText>
          </View>
        </View>
        
        <View style={styles.lineupMeta}>
          <View style={styles.metaItem}>
            <Feather name="users" size={14} color={theme.textSecondary} />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: 4 }}>
              {playerCount}/11 players
            </ThemedText>
          </View>
          <ThemedText type="small" style={{ color: theme.textSecondary }}>
            {formattedDate}
          </ThemedText>
        </View>
      </View>
      
      <Feather name="chevron-right" size={20} color={theme.textSecondary} />
    </AnimatedPressable>
  );
}

function FloatingActionButton({ onPress }: { onPress: () => void }) {
  const { theme } = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.fab,
        { backgroundColor: theme.primary },
        Shadows.fab,
        animatedStyle,
      ]}
      onTouchStart={() => { scale.value = withSpring(0.9); }}
      onTouchEnd={() => { scale.value = withSpring(1); }}
    >
      <Pressable
        onPress={() => {
          if (Platform.OS !== 'web') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }
          onPress();
        }}
        style={StyleSheet.absoluteFill}
        hitSlop={10}
      >
        <View style={styles.fabContent}>
          <Feather name="plus" size={28} color="#FFFFFF" />
        </View>
      </Pressable>
    </Animated.View>
  );
}

function EmptyState({ onCreatePress }: { onCreatePress: () => void }) {
  const { theme } = useTheme();

  return (
    <View style={styles.emptyState}>
      <View style={[styles.emptyIcon, { backgroundColor: theme.backgroundSecondary }]}>
        <Feather name="clipboard" size={48} color={theme.textSecondary} />
      </View>
      <ThemedText type="h4" style={styles.emptyTitle}>No Lineups Yet</ThemedText>
      <ThemedText type="body" style={[styles.emptyDesc, { color: theme.textSecondary }]}>
        Create your first dream team and start building legendary lineups
      </ThemedText>
      <Button onPress={onCreatePress} style={styles.createButton}>
        Create First Lineup
      </Button>
    </View>
  );
}

export default function MyLineupsScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const navigation = useNavigation<NavigationProp>();
  const [lineups, setLineups] = useState<Lineup[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchLineups = useCallback(async () => {
    try {
      const data = await loadLineups();
      setLineups(data);
    } catch (error) {
      console.error('Error loading lineups:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchLineups();
    }, [fetchLineups])
  );

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchLineups();
    setRefreshing(false);
  }, [fetchLineups]);

  const handleLineupPress = (lineup: Lineup) => {
    navigation.navigate('LineupDetail', { lineup, isOwner: true });
  };

  const handleDeleteLineup = async (id: string) => {
    try {
      await deleteLineup(id);
      setLineups(prev => prev.filter(l => l.id !== id));
    } catch (error) {
      Alert.alert('Error', 'Failed to delete lineup');
    }
  };

  const handleCreatePress = () => {
    navigation.navigate('CreateLineup');
  };

  if (loading) {
    return (
      <ThemedView style={styles.container}>
        <View style={[styles.loadingContainer, { paddingTop }]}>
          <ThemedText type="body" style={{ color: theme.textSecondary }}>
            Loading...
          </ThemedText>
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {lineups.length === 0 ? (
        <View style={[styles.emptyContainer, { paddingTop, paddingBottom }]}>
          <EmptyState onCreatePress={handleCreatePress} />
        </View>
      ) : (
        <FlatList
          data={lineups}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeIn.delay(index * 50)}>
              <LineupCard 
                lineup={item} 
                onPress={() => handleLineupPress(item)}
                onDelete={() => handleDeleteLineup(item.id)}
              />
            </Animated.View>
          )}
          contentContainerStyle={[
            styles.listContent,
            { paddingTop, paddingBottom },
          ]}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={theme.primary}
            />
          }
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <ThemedText type="small" style={{ color: theme.textSecondary }}>
                {lineups.length} lineup{lineups.length !== 1 ? 's' : ''} saved
              </ThemedText>
            </View>
          }
        />
      )}
      <FloatingActionButton onPress={handleCreatePress} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.xl,
  },
  emptyState: {
    alignItems: 'center',
  },
  emptyIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing['2xl'],
  },
  emptyTitle: {
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  emptyDesc: {
    textAlign: 'center',
    marginBottom: Spacing['2xl'],
    paddingHorizontal: Spacing.xl,
  },
  createButton: {
    paddingHorizontal: Spacing['3xl'],
  },
  listContent: {
    paddingHorizontal: Spacing.xl,
  },
  listHeader: {
    marginBottom: Spacing.lg,
  },
  lineupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  pitchPreview: {
    width: 80,
    height: 100,
    borderRadius: BorderRadius.sm,
    position: 'relative',
    overflow: 'hidden',
  },
  pitchLines: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    position: 'absolute',
  },
  centerLine: {
    position: 'absolute',
    width: '100%',
    height: 1,
    top: '50%',
  },
  penaltyBox: {
    position: 'absolute',
    bottom: 0,
    left: '20%',
    right: '20%',
    height: '25%',
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  positionMarker: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  lineupInfo: {
    flex: 1,
    marginLeft: Spacing.lg,
  },
  lineupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  lineupName: {
    fontWeight: '600',
    flex: 1,
  },
  formationBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.xs,
    marginLeft: Spacing.sm,
  },
  lineupMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: Platform.select({ ios: 90, android: 70, default: 90 }),
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
