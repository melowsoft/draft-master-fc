import { Button } from '@/components/Button';
import { SubscriptionCard } from '@/components/subscription/SubscriptionCard';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import SubscriptionService, { SubscriptionPlan } from '@/services/subscriptionService';
import { Feather } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Linking,
    Pressable,
    ScrollView,
    StyleSheet,
    View
} from 'react-native';

export default function SubscriptionScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { redirect } = useLocalSearchParams<{ redirect?: string }>();
  const { subscription, checkSubscription } = useAuth();

  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);

  useEffect(() => {
    loadPlans();
  }, []);

  useEffect(() => {
    if (subscription?.isActive) {
      if (redirect) {
        router.replace(String(redirect));
      } else {
        router.back();
      }
    }
  }, [subscription, redirect]);

  const loadPlans = async () => {
    setIsLoading(true);
    try {
      const subscriptionService = SubscriptionService.getInstance();
      const availablePlans = await subscriptionService.getSubscriptionPlans();
      setPlans(availablePlans);
      // Select yearly plan by default if available
      const yearlyPlan = availablePlans.find(p => p.period === 'yearly');
      setSelectedPlan(yearlyPlan?.id || availablePlans[0]?.id || null);
    } catch (error) {
      console.error('Error loading plans:', error);
      Alert.alert('Error', 'Failed to load subscription plans');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePurchase = async () => {
    if (!selectedPlan) {
      Alert.alert('Error', 'Please select a plan');
      return;
    }

    setIsPurchasing(true);
    try {
      const subscriptionService = SubscriptionService.getInstance();
      const result = await subscriptionService.purchasePlan(selectedPlan);

      if (result.success) {
        Alert.alert('Success', 'Subscription activated successfully!');
        await checkSubscription();
        if (redirect) {
          router.replace(String(redirect));
        } else {
          router.back();
        }
      } else {
        Alert.alert('Error', result.error || 'Purchase failed');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Purchase failed');
    } finally {
      setIsPurchasing(false);
    }
  };

  const handleRestore = async () => {
    setIsPurchasing(true);
    try {
      const subscriptionService = SubscriptionService.getInstance();
      const result = await subscriptionService.restorePurchases();

      if (result.success) {
        Alert.alert('Success', 'Purchases restored successfully!');
        await checkSubscription();
        if (redirect) {
          router.replace(String(redirect));
        } else {
          router.back();
        }
      } else {
        Alert.alert('Error', result.error || 'No purchases to restore');
      }
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Restore failed');
    } finally {
      setIsPurchasing(false);
    }
  };

  const openTerms = () => {
    Linking.openURL('https://yourapp.com/terms');
  };

  const openPrivacy = () => {
    Linking.openURL('https://yourapp.com/privacy');
  };

  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ActivityIndicator size="large" color={theme.primary} />
      </ThemedView>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Upgrade to Pro',
          headerBackTitle: 'Back',
        }}
      />
      
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <View style={[styles.iconContainer, { backgroundColor: theme.primary + '20' }]}>
              <Feather name="crown" size={40} color={theme.primary} />
            </View>
            <ThemedText type="h1" style={styles.title}>
              Unlock Premium Features
            </ThemedText>
            <ThemedText type="body" style={[styles.subtitle, { color: theme.textSecondary }]}>
              Get the most out of DraftMaster FC with Pro features
            </ThemedText>
          </View>

          {/* Trial Banner */}
          {subscription?.isTrial && subscription.trialDaysLeft > 0 ? (
            <View
              style={[
                styles.trialBanner,
                { backgroundColor: theme.primary + '15', borderWidth: 1, borderColor: theme.primary + '30' },
              ]}
            >
              <Feather name="clock" size={20} color={theme.primary} />
              <ThemedText style={[styles.trialText, { color: theme.primary }]}>
                {subscription.trialDaysLeft} days left in your free trial
              </ThemedText>
            </View>
          ) : null}

          {/* Plans */}
          <View style={styles.plansSection}>
            <ThemedText type="h3" style={styles.sectionTitle}>
              Choose Your Plan
            </ThemedText>
            {plans.map((plan) => (
              <SubscriptionCard
                key={plan.id}
                plan={plan}
                isSelected={selectedPlan === plan.id}
                onSelect={() => setSelectedPlan(plan.id)}
              />
            ))}
          </View>

          {/* Features */}
          <View style={styles.featuresSection}>
            <ThemedText type="h3" style={styles.sectionTitle}>
              What You Get
            </ThemedText>
            <View style={styles.featuresGrid}>
              {[
                { icon: 'grid', title: 'Unlimited Lineups', desc: 'Create as many lineups as you want' },
                { icon: 'layout', title: 'Premium Formations', desc: 'Access exclusive formations' },
                { icon: 'bar-chart', title: 'Advanced Analytics', desc: 'Detailed player stats and insights' },
                { icon: 'users', title: 'Community Features', desc: 'Join and create communities' },
                { icon: 'shield', title: 'Ad-Free Experience', desc: 'No interruptions, just football' },
                { icon: 'star', title: 'Priority Support', desc: 'Get help faster' },
              ].map((feature, index) => (
                <View
                  key={index}
                  style={[
                    styles.featureCard,
                    { backgroundColor: theme.backgroundDefault, borderColor: theme.border },
                  ]}
                >
                  <View style={[styles.featureIcon, { backgroundColor: theme.primary + '20' }]}>
                    <Feather name={feature.icon as any} size={20} color={theme.primary} />
                  </View>
                  <ThemedText type="body" style={{ fontWeight: '600', marginBottom: 4 }}>
                    {feature.title}
                  </ThemedText>
                  <ThemedText type="small" style={{ color: theme.textSecondary }}>
                    {feature.desc}
                  </ThemedText>
                </View>
              ))}
            </View>
          </View>

          {/* Purchase Button */}
          <Button
            onPress={handlePurchase}
            disabled={isPurchasing || !selectedPlan}
            style={styles.purchaseButton}
            variant="primary"
          >
            {isPurchasing ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <>
                <Feather name="lock" size={20} color="#FFFFFF" />
                <ThemedText style={{ color: '#FFFFFF', fontWeight: '600', marginLeft: Spacing.sm }}>
                  Subscribe Now
                </ThemedText>
              </>
            )}
          </Button>

          {/* Restore Purchases */}
          <Pressable onPress={handleRestore} disabled={isPurchasing} style={styles.restoreButton}>
            <ThemedText style={{ color: theme.primary, fontWeight: '600' }}>
              Restore Purchases
            </ThemedText>
          </Pressable>

          {/* Legal */}
          <View style={[styles.legalSection, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
            <ThemedText type="small" style={[styles.legalText, { color: theme.textSecondary }]}>
              By subscribing, you agree to our{' '}
              <ThemedText type="small" style={{ color: theme.primary, fontWeight: '600' }} onPress={openTerms}>
                Terms of Service
              </ThemedText>{' '}
              and{' '}
              <ThemedText type="small" style={{ color: theme.primary, fontWeight: '600' }} onPress={openPrivacy}>
                Privacy Policy
              </ThemedText>
              . Subscription automatically renews unless canceled at least 24 hours before the end of the current period.
            </ThemedText>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: Spacing.xl,
    paddingBottom: Spacing['3xl'],
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    textAlign: 'center',
  },
  trialBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.xl,
    gap: Spacing.sm,
  },
  trialText: {
    fontWeight: '600',
  },
  plansSection: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    marginBottom: Spacing.lg,
  },
  featuresSection: {
    marginBottom: Spacing.xl,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  featureCard: {
    width: '48%',
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  purchaseButton: {
    marginBottom: Spacing.lg,
    height: 56,
    borderRadius: BorderRadius.md,
  },
  restoreButton: {
    alignItems: 'center',
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  legalSection: {
    padding: Spacing.lg,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
  },
  legalText: {
    textAlign: 'center',
    lineHeight: 18,
  },
});
