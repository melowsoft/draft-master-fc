import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/services/authContext';

export function useSubscriptionGuard() {
  const router = useRouter();
  const { subscription, isLoading, isLoadingSubscription } = useAuth();

  const hasActiveSubscription = subscription?.isActive || false;
  const isTrialActive = subscription?.trialDaysLeft ? subscription.trialDaysLeft > 0 : false;
  const trialDaysLeft = subscription?.trialDaysLeft || 0;

  // Check if user needs to subscribe for premium features
  const requiresSubscription = (feature: string): boolean => {
    if (hasActiveSubscription || isTrialActive) return false;
    
    // Define which features require subscription
    const premiumFeatures = [
      'create-lineup',
      'create-community',
      'join-community',
      'premium-formations',
    ];
    
    return premiumFeatures.includes(feature);
  };

  useEffect(() => {
    // Show trial expiration warning
    if (isTrialActive && trialDaysLeft <= 3) {
      // You could show a toast or modal here
      console.log(`⚠️ Trial expires in ${trialDaysLeft} days`);
    }
  }, [trialDaysLeft, isTrialActive]);

  return {
    hasActiveSubscription,
    isTrialActive,
    trialDaysLeft,
    requiresSubscription,
    navigateToSubscription: () => router.push('/subscription'),
  };
}