import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput,
  ScrollView,
  Pressable,
  Alert,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/Button';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, BorderRadius } from '@/constants/theme';
import { Lineup, Formation } from '@/data/types';
import { formations } from '@/data/formations';
import { addLineup, generateId } from '@/data/storage';

export default function CreateLineupScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  
  const [lineupName, setLineupName] = useState('My Lineup');
  const [selectedFormation, setSelectedFormation] = useState<Formation>(formations[0]);

  const handleSave = async () => {
    if (!lineupName.trim()) {
      Alert.alert('Error', 'Please enter a lineup name');
      return;
    }

    const lineup: Lineup = {
      id: generateId(),
      name: lineupName.trim(),
      formation: selectedFormation,
      players: {},
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await addLineup(lineup);
      router.back();
    } catch (error) {
      Alert.alert('Error', 'Failed to save lineup');
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleCancel} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color={theme.text} />
        </Pressable>
        <ThemedText type="h3" style={styles.title}>Create Lineup</ThemedText>
        <Pressable onPress={handleSave} style={styles.saveButton}>
          <ThemedText type="body" style={{ color: theme.primary, fontWeight: '600' }}>Save</ThemedText>
        </Pressable>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <ThemedText type="h4" style={styles.sectionTitle}>Lineup Name</ThemedText>
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
            placeholder="Enter lineup name"
            placeholderTextColor={theme.textSecondary}
          />
        </View>

        <View style={styles.section}>
          <ThemedText type="h4" style={styles.sectionTitle}>Formation</ThemedText>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.formationScroll}
          >
            {formations.map((formation) => (
              <Pressable
                key={formation.id}
                onPress={() => setSelectedFormation(formation)}
                style={[
                  styles.formationCard,
                  { 
                    backgroundColor: selectedFormation.id === formation.id 
                      ? theme.primary 
                      : theme.backgroundSecondary,
                  },
                ]}
              >
                <ThemedText 
                  type="body" 
                  style={{ 
                    fontWeight: '600',
                    color: selectedFormation.id === formation.id ? '#FFFFFF' : theme.text,
                  }}
                >
                  {formation.name}
                </ThemedText>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <ThemedText type="h4" style={styles.sectionTitle}>Pitch Preview</ThemedText>
          <View style={[
            styles.pitchPreview,
            { backgroundColor: theme.primary + '20' }
          ]}>
            <ThemedText type="small" style={{ color: theme.textSecondary }}>
              {selectedFormation.positions.length} positions
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText type="body" style={{ color: theme.textSecondary, textAlign: 'center' }}>
            Advanced player selection coming soon!
          </ThemedText>
        </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  backButton: {
    padding: Spacing.sm,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  saveButton: {
    padding: Spacing.sm,
  },
  content: {
    flex: 1,
    padding: Spacing.xl,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    marginBottom: Spacing.md,
  },
  nameInput: {
    height: 48,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    fontSize: 16,
  },
  formationScroll: {
    marginHorizontal: -Spacing.xl,
    paddingHorizontal: Spacing.xl,
  },
  formationCard: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    marginRight: Spacing.sm,
  },
  pitchPreview: {
    height: 200,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});