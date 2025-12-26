import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Button } from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Spacing } from '@/constants/theme';
import { useScreenInsets } from '@/hooks/use-screen-insets';
import { useTheme } from '@/hooks/use-theme';

export default function ChallengeEntrySubmittedScreen() {
  const { theme } = useTheme();
  const { paddingTop, paddingBottom } = useScreenInsets();
  const router = useRouter();
  const params = useLocalSearchParams();

  const challengeTitle =
    typeof params.challengeTitle === 'string'
      ? params.challengeTitle
      : Array.isArray(params.challengeTitle)
        ? params.challengeTitle[0]
        : undefined;

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.content, { paddingTop, paddingBottom }]}>
        <View style={[styles.iconWrap, { backgroundColor: theme.primary + '20' }]}>
          <Feather name="check" size={44} color={theme.primary} />
        </View>

        <ThemedText type="h3" style={styles.title}>
          Entry Submitted
        </ThemedText>

        <ThemedText type="body" style={[styles.subtitle, { color: theme.textSecondary }]}>
          {challengeTitle ? `Your entry for “${challengeTitle}” has been submitted.` : 'Your entry has been submitted.'}
        </ThemedText>

        <ThemedText type="body" style={[styles.subtitle, { color: theme.textSecondary }]}>
          Now you have to wait for the votes.
        </ThemedText>

        <View style={styles.buttons}>
          <Button onPress={() => router.replace('/(tabs)/challenges')}>
            View My Challenges
          </Button>
          <Pressable
            onPress={() => router.replace('/(tabs)')}
            style={[
              styles.secondaryButton,
              { borderColor: theme.border, backgroundColor: theme.backgroundDefault },
            ]}
          >
            <ThemedText type="body" style={{ fontWeight: '600' }}>
              Back to Discover
            </ThemedText>
          </Pressable>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  subtitle: {
    textAlign: 'center',
  },
  buttons: {
    width: '100%',
    marginTop: Spacing['2xl'],
  },
  secondaryButton: {
    marginTop: Spacing.md,
    height: Spacing.buttonHeight,
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});

