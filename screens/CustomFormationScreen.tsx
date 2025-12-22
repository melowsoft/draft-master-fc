import { Feather } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Alert,
    Dimensions,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { addCustomFormation, generateId, updateCustomFormation } from '@/data/storage';
import { Formation, FormationPosition, Position } from '@/data/types';
import { useTheme } from '@/hooks/use-theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PITCH_HEIGHT = 420;

const POSITIONS: Position[] = ['GK', 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'LM', 'RM', 'LW', 'RW', 'CF', 'ST'];

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface DraggablePositionMarkerProps {
  position: FormationPosition;
  onPositionChange: (id: string, x: number, y: number) => void;
  onPositionTypeChange: (id: string, type: Position) => void;
  onDelete: (id: string) => void;
  pitchWidth: number;
  isSelected: boolean;
  onSelect: () => void;
}

function DraggablePositionMarker({
  position,
  onPositionChange,
  onPositionTypeChange,
  onDelete,
  pitchWidth,
  isSelected,
  onSelect,
}: DraggablePositionMarkerProps) {
  const { theme, isDark } = useTheme();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  const circleSize = 40;
  const containerWidth = 70;
  const containerHeight = 58;
  const baseLeft = (position.x / 100) * pitchWidth - containerWidth / 2;
  const baseTop = (position.y / 100) * PITCH_HEIGHT - containerHeight / 2;

  const panGesture = Gesture.Pan()
    .onStart(() => {
      scale.value = withSpring(1.1);
      runOnJS(onSelect)();
      if (Platform.OS !== 'web') {
        runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
      }
    })
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      const newX = position.x + (event.translationX / pitchWidth) * 100;
      const newY = position.y + (event.translationY / PITCH_HEIGHT) * 100;
      const clampedX = Math.max(5, Math.min(95, newX));
      const clampedY = Math.max(5, Math.min(95, newY));
      runOnJS(onPositionChange)(position.id, clampedX, clampedY);
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View 
        style={[
          styles.positionMarkerContainer,
          {
            left: baseLeft,
            top: baseTop,
            width: containerWidth,
            height: containerHeight,
          },
          animatedStyle,
        ]}
      >
        <View style={[
          styles.positionCircle, 
          { width: circleSize, height: circleSize },
          isSelected ? styles.selectedCircle : null,
        ]}>
          <ThemedText style={styles.positionText}>{position.position}</ThemedText>
        </View>
        {isSelected && (
          <Pressable 
            onPress={() => onDelete(position.id)}
            style={styles.deleteButton}
          >
            <Feather name="x" size={12} color="#FFFFFF" />
          </Pressable>
        )}
      </Animated.View>
    </GestureDetector>
  );
}

export default function CustomFormationScreen() {
  const { theme, isDark } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams();
  const insets = useSafeAreaInsets();
  
  const editFormation =
    typeof params.editFormation === 'string' ? JSON.parse(params.editFormation) : params.editFormation;
  
  const [formationName, setFormationName] = useState(editFormation?.name || '');
  const [positions, setPositions] = useState<FormationPosition[]>(
    editFormation?.positions || [
      { id: 'gk', x: 50, y: 90, position: 'GK' },
    ]
  );
  const [selectedPositionId, setSelectedPositionId] = useState<string | null>(null);
  const [selectedPositionType, setSelectedPositionType] = useState<Position>('CM');

  const pitchWidth = SCREEN_WIDTH - Spacing.xl * 2;
  const pitchRef = useRef<View>(null);

  const handlePositionChange = (id: string, x: number, y: number) => {
    setPositions(prev => prev.map(p => 
      p.id === id ? { ...p, x, y } : p
    ));
  };

  const handlePositionTypeChange = (id: string, type: Position) => {
    setPositions(prev => prev.map(p => 
      p.id === id ? { ...p, position: type } : p
    ));
  };

  const handleDeletePosition = (id: string) => {
    if (positions.length <= 1) {
      Alert.alert('Cannot Delete', 'You need at least one position in the formation');
      return;
    }
    setPositions(prev => prev.filter(p => p.id !== id));
    setSelectedPositionId(null);
  };

  const handleAddPosition = () => {
    if (positions.length >= 11) {
      Alert.alert('Maximum Reached', 'A formation can have at most 11 positions');
      return;
    }
    const newPosition: FormationPosition = {
      id: generateId(),
      x: 50,
      y: 50,
      position: selectedPositionType,
    };
    setPositions(prev => [...prev, newPosition]);
    setSelectedPositionId(newPosition.id);
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  const handleSave = async () => {
    if (!formationName.trim()) {
      Alert.alert('Name Required', 'Please enter a name for your formation');
      return;
    }

    if (positions.length < 11) {
      Alert.alert(
        'Incomplete Formation',
        `Your formation has ${positions.length} positions. A complete formation needs 11 positions. Save anyway?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Save', onPress: saveFormation },
        ]
      );
      return;
    }

    saveFormation();
  };

  const saveFormation = async () => {
    const formation: Formation = {
      id: editFormation?.id || `custom_${generateId()}`,
      name: formationName.trim(),
      positions: positions,
    };

    try {
      if (editFormation) {
        await updateCustomFormation(formation);
      } else {
        await addCustomFormation(formation);
      }
      router.back();
    } catch (error) {
      Alert.alert('Error', 'Failed to save formation');
    }
  };

  const handleCancel = () => {
    if (formationName.trim() || positions.length > 1) {
      Alert.alert(
        'Discard Changes?',
        'You have unsaved changes. Are you sure you want to discard them?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Discard', style: 'destructive', onPress: () => router.back() },
        ]
      );
    } else {
      router.back();
    }
  };

  const selectedPosition = positions.find(p => p.id === selectedPositionId);

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
            value={formationName}
            onChangeText={setFormationName}
            placeholder="Formation Name"
            placeholderTextColor={theme.textSecondary}
            maxLength={20}
          />
          <Pressable onPress={handleSave} hitSlop={12}>
            <ThemedText type="body" style={{ color: theme.primary, fontWeight: '600' }}>Save</ThemedText>
          </Pressable>
        </View>

        <View style={styles.positionCount}>
          <ThemedText type="small" style={{ color: theme.textSecondary }}>
            Positions: {positions.length}/11
          </ThemedText>
        </View>

        <View 
          ref={pitchRef}
          style={[
            styles.pitch,
            { backgroundColor: isDark ? Colors.dark.pitchGreen : Colors.light.pitchGreen }
          ]}
        >
          <View style={styles.pitchLines}>
            <View style={[styles.centerCircle, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.centerLine, { backgroundColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.penaltyBoxTop, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.penaltyBoxBottom, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.goalAreaTop, { borderColor: 'rgba(255,255,255,0.25)' }]} />
            <View style={[styles.goalAreaBottom, { borderColor: 'rgba(255,255,255,0.25)' }]} />
          </View>
          
          {positions.map((pos) => (
            <DraggablePositionMarker
              key={pos.id}
              position={pos}
              onPositionChange={handlePositionChange}
              onPositionTypeChange={handlePositionTypeChange}
              onDelete={handleDeletePosition}
              pitchWidth={pitchWidth}
              isSelected={selectedPositionId === pos.id}
              onSelect={() => setSelectedPositionId(pos.id)}
            />
          ))}
        </View>

        <View style={styles.controls}>
          <ThemedText type="h4" style={{ marginBottom: Spacing.sm }}>Add Position</ThemedText>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.positionTypeList}
          >
            {POSITIONS.map((pos) => (
              <Pressable
                key={pos}
                onPress={() => setSelectedPositionType(pos)}
                style={[
                  styles.positionTypeChip,
                  { 
                    backgroundColor: selectedPositionType === pos ? theme.primary : theme.backgroundSecondary,
                  },
                ]}
              >
                <ThemedText 
                  type="small" 
                  style={{ 
                    fontWeight: '600',
                    color: selectedPositionType === pos ? '#FFFFFF' : theme.text,
                  }}
                >
                  {pos}
                </ThemedText>
              </Pressable>
            ))}
          </ScrollView>

          <Pressable
            onPress={handleAddPosition}
            style={[styles.addButton, { backgroundColor: theme.primary }]}
          >
            <Feather name="plus" size={20} color="#FFFFFF" />
            <ThemedText type="body" style={{ color: '#FFFFFF', fontWeight: '600', marginLeft: Spacing.sm }}>
              Add {selectedPositionType}
            </ThemedText>
          </Pressable>

          {selectedPosition && (
            <View style={[styles.selectedPositionEditor, { backgroundColor: theme.backgroundSecondary }]}>
              <ThemedText type="body" style={{ fontWeight: '600', marginBottom: Spacing.sm }}>
                Edit Selected Position
              </ThemedText>
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.positionTypeList}
              >
                {POSITIONS.map((pos) => (
                  <Pressable
                    key={pos}
                    onPress={() => handlePositionTypeChange(selectedPositionId!, pos)}
                    style={[
                      styles.positionTypeChip,
                      { 
                        backgroundColor: selectedPosition.position === pos ? '#FFD700' : theme.backgroundDefault,
                        borderWidth: 1,
                        borderColor: selectedPosition.position === pos ? '#FFD700' : theme.border,
                      },
                    ]}
                  >
                    <ThemedText 
                      type="small" 
                      style={{ 
                        fontWeight: '600',
                        color: selectedPosition.position === pos ? '#1B5E20' : theme.text,
                      }}
                    >
                      {pos}
                    </ThemedText>
                  </Pressable>
                ))}
              </ScrollView>
              <Pressable
                onPress={() => handleDeletePosition(selectedPositionId!)}
                style={[styles.deletePositionButton, { borderColor: theme.error }]}
              >
                <Feather name="trash-2" size={16} color={theme.error} />
                <ThemedText type="small" style={{ color: theme.error, marginLeft: Spacing.xs }}>
                  Delete Position
                </ThemedText>
              </Pressable>
            </View>
          )}

          <View style={styles.instructions}>
            <Feather name="info" size={14} color={theme.textSecondary} />
            <ThemedText type="small" style={{ color: theme.textSecondary, marginLeft: Spacing.xs, flex: 1 }}>
              Drag positions to move them. Tap a position to select and edit it.
            </ThemedText>
          </View>
        </View>
      </ThemedView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  nameInput: {
    flex: 1,
    marginHorizontal: Spacing.lg,
    height: 40,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.md,
    textAlign: 'center',
    fontWeight: '600',
  },
  positionCount: {
    alignItems: 'center',
    marginBottom: Spacing.sm,
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
  positionMarkerContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  positionCircle: {
    borderRadius: 20,
    backgroundColor: '#FFD700',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  selectedCircle: {
    borderColor: '#00FF00',
    borderWidth: 3,
    shadowColor: '#00FF00',
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  positionText: {
    fontWeight: '800',
    color: '#1B5E20',
    fontSize: 12,
  },
  deleteButton: {
    position: 'absolute',
    top: -4,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.lg,
  },
  positionTypeList: {
    gap: Spacing.xs,
    paddingVertical: Spacing.xs,
  },
  positionTypeChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    marginTop: Spacing.md,
  },
  selectedPositionEditor: {
    marginTop: Spacing.lg,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  deletePositionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    marginTop: Spacing.md,
  },
  instructions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.lg,
    paddingHorizontal: Spacing.sm,
  },
});
