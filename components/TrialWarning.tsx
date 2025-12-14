import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, BorderRadius } from '@/constants/theme';
import { useRouter } from 'expo-router';

interface TrialWarningProps {
  daysLeft: number;
  onDismiss?: () => void;
}

export function TrialWarning({ daysLeft, onDismiss }: TrialWarningProps) {
  const { theme } = useTheme();
  const router = useRouter();

  if (daysLeft <= 0) return null;

  const handleUpgrade = () => {
    router.push('/subscription');
  };

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.primary + '15', borderColor: theme.primary + '30' }]}>
      <View style={styles.content}>
        <Feather name="clock" size={20} color={theme.primary} />
        <View style={styles.textContainer}>
          <ThemedText style={[styles.title, { color: theme.primary }]}>
            {daysLeft === 1 ? 'Last day of trial!' : `${daysLeft} days left in trial`}
          </ThemedText>
          <ThemedText style={[styles.subtitle, { color: theme.textSecondary }]}>
            Upgrade to Pro to keep all features
          </ThemedText>
        </View>
      </View>
      <Pressable onPress={handleUpgrade} style={[styles.button, { backgroundColor: theme.primary }]}>
        <ThemedText style={styles.buttonText}>Upgrade</ThemedText>
      </Pressable>
      {onDismiss && (
        <Pressable onPress={onDismiss} style={styles.dismissButton}>
          <Feather name="x" size={16} color={theme.textSecondary} />
        </Pressable>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    marginBottom: Spacing.md,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: Spacing.md,
  },
  textContainer: {
    flex: 1,
    marginLeft: Spacing.md,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  button: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
  dismissButton: {
    padding: Spacing.xs,
    marginLeft: Spacing.sm,
  },
});