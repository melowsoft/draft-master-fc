import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, BorderRadius, Colors } from '@/constants/theme';

interface SubscriptionCardProps {
  plan: {
    id: string;
    name: string;
    price: string;
    period: 'monthly' | 'yearly';
    isPopular?: boolean;
    features: string[];
  };
  isSelected: boolean;
  onSelect: () => void;
}

export function SubscriptionCard({ plan, isSelected, onSelect }: SubscriptionCardProps) {
  const { theme } = useTheme();

  return (
    <Pressable onPress={onSelect}>
      <ThemedView
        style={[
          styles.card,
          {
            borderColor: isSelected ? theme.primary : theme.border,
            backgroundColor: isSelected ? theme.primary + '10' : theme.backgroundDefault,
            borderWidth: isSelected ? 2 : 1,
          },
        ]}
      >
        {plan.isPopular && (
          <View style={[styles.popularBadge, { backgroundColor: theme.primary }]}>
            <ThemedText style={styles.popularText}>BEST VALUE</ThemedText>
          </View>
        )}

        <View style={styles.cardHeader}>
          <View>
            <ThemedText type="h4" style={{ color: isSelected ? theme.primary : theme.text }}>
              {plan.name}
            </ThemedText>
            <ThemedText type="h2" style={{ color: isSelected ? theme.primary : theme.text }}>
              {plan.price}
            </ThemedText>
          </View>
          {isSelected && (
            <View style={[styles.checkCircle, { backgroundColor: theme.primary }]}>
              <Feather name="check" size={20} color="#FFFFFF" />
            </View>
          )}
        </View>

        <View style={styles.features}>
          {plan.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Feather
                name="check-circle"
                size={16}
                color={isSelected ? theme.primary : Colors.success}
              />
              <ThemedText
                type="small"
                style={[
                  styles.featureText,
                  { color: isSelected ? theme.text : theme.textSecondary },
                ]}
              >
                {feature}
              </ThemedText>
            </View>
          ))}
        </View>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.xl,
    marginBottom: Spacing.lg,
    position: 'relative',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    right: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
  },
  popularText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.lg,
  },
  checkCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  features: {
    gap: Spacing.sm,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  featureText: {
    flex: 1,
  },
});