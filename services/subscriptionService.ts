import { Platform } from 'react-native';

// RevenueCat is not available in Expo Go, so we handle it gracefully
let Purchases: any = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Purchases = require('react-native-purchases').default;
} catch {
  Purchases = null;
}

const REVENUECAT_KEYS = {
  apple: process.env.EXPO_PUBLIC_REVENUECAT_APPLE_KEY, 
  google: process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY
};

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: string;
  period: 'monthly' | 'yearly';
  isPopular?: boolean;
  features: string[];
}

export interface UserSubscription {
  isActive: boolean;
  isTrial: boolean;
  trialDaysLeft: number;
  planId: string;
  expiresAt: Date | null;
  autoRenew: boolean;
}

class SubscriptionService {
  private static instance: SubscriptionService;
  private isConfigured = false;
  
  static getInstance(): SubscriptionService {
    if (!SubscriptionService.instance) {
      SubscriptionService.instance = new SubscriptionService();
    }
    return SubscriptionService.instance;
  }

  async configure(userId?: string): Promise<boolean> {
    try {
      if (!Purchases) {
        console.log('⚠️ RevenueCat not available (running in Expo Go?)');
        return false;
      }
      
      const apiKey = Platform.select({
        ios: REVENUECAT_KEYS.apple,
        android: REVENUECAT_KEYS.google,
        default: REVENUECAT_KEYS.apple,
      });

      await Purchases.configure({ apiKey });
      
      if (userId) {
        await Purchases.logIn(userId);
      }
      
      this.isConfigured = true;
      return true;
    } catch (error) {
      console.error('Failed to configure RevenueCat:', error);
      return false;
    }
  }

  async getSubscriptionStatus(): Promise<UserSubscription> {
    try {
      // If Purchases is not available (Expo Go), return default
      if (!Purchases) {
        console.log('⚠️ RevenueCat not available, using default subscription');
        return this.getDefaultSubscription();
      }

      if (!this.isConfigured) {
        await this.configure();
      }

      const customerInfo = await Purchases.getCustomerInfo();
      const activeEntitlements = customerInfo.entitlements?.active || {};
      const entitlementList = Object.values(activeEntitlements) as any[];
      const entitlement = entitlementList[0];
      const isActive = entitlementList.length > 0;
      const isTrial = entitlement?.periodType === 'TRIAL';

      return {
        isActive,
        isTrial: Boolean(isTrial),
        trialDaysLeft: this.calculateTrialDaysLeft(entitlement),
        planId: entitlement?.productIdentifier || 'free',
        expiresAt: entitlement?.expirationDate ? new Date(entitlement.expirationDate) : null,
        autoRenew: Boolean(entitlement?.willRenew),
      };
    } catch (error) {
      console.error('Error getting subscription status:', error);
      return this.getDefaultSubscription();
    }
  }

  async getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    try {
      if (!Purchases) {
        console.log('⚠️ RevenueCat not available, using default plans');
        return this.getDefaultPlans();
      }
      
      const offerings = await Purchases.getOfferings();
      const current = offerings.current;
      
      if (!current) {
        return this.getDefaultPlans();
      }

      const available = current.availablePackages || [];
      const plans: SubscriptionPlan[] = available.map((pkg: any) => {
        const isAnnual = pkg.packageType === 'ANNUAL';
        const period: 'monthly' | 'yearly' = isAnnual ? 'yearly' : 'monthly';
        const name = isAnnual ? 'Yearly Pro' : 'Monthly Pro';
        const isPopular = isAnnual;
        
        return {
          id: pkg.identifier,
          name,
          price: pkg.product?.priceString || '',
          period,
          isPopular,
          features: [
            'Unlimited Lineups',
            'Premium Formations',
            'Advanced Analytics',
            'Community Features',
            'No Ads',
          ],
        };
      });

      return plans.length > 0 ? plans : this.getDefaultPlans();
    } catch (error) {
      console.error('Error getting subscription plans:', error);
      return this.getDefaultPlans();
    }
  }

  async purchasePlan(planId: string): Promise<{ success: boolean; error?: string }> {
    try {
      if (!Purchases) {
        return { success: false, error: 'Purchases not available in Expo Go. Please build the app to test purchases.' };
      }
      
      const offerings = await Purchases.getOfferings();
      const current = offerings.current;
      
      if (!current) {
        return { success: false, error: 'No subscription plans available' };
      }

      const product = [...(current.availablePackages || [])].find(pkg => pkg.identifier === planId);
      const fallbackProduct =
        product ||
        [...(current.availablePackages || [])].find((pkg: any) => {
          if (/month/i.test(planId)) return pkg.packageType === 'MONTHLY';
          if (/year/i.test(planId)) return pkg.packageType === 'ANNUAL';
          return false;
        });
      
      if (!fallbackProduct) {
        return { success: false, error: 'Plan not found' };
      }

      const { customerInfo } = await Purchases.purchasePackage(fallbackProduct);
      
      const hasEntitlement = Object.values(customerInfo.entitlements?.active || {}).length > 0;
      if (hasEntitlement) {
        return { success: true };
      } else {
        return { success: false, error: 'Purchase not completed' };
      }
    } catch (error: any) {
      // User cancelled
      if (error.userCancelled) {
        return { success: false, error: 'Purchase cancelled' };
      }
      console.error('Purchase error:', error);
      return { success: false, error: error.message || 'Purchase failed' };
    }
  }

  async restorePurchases(): Promise<{ success: boolean; error?: string }> {
    try {
      if (!Purchases) {
        return { success: false, error: 'Restore not available in Expo Go' };
      }
      
      const customerInfo = await Purchases.restorePurchases();
      
      const hasEntitlement = Object.values(customerInfo.entitlements?.active || {}).length > 0;
      if (hasEntitlement) {
        return { success: true };
      } else {
        return { success: false, error: 'No active subscription found' };
      }
    } catch (error: any) {
      console.error('Restore error:', error);
      return { success: false, error: error.message || 'Restore failed' };
    }
  }

  // Trial calculation for new users (7 days free trial)
  calculateNewUserTrial(userCreatedAt: string): number {
    const createdAt = new Date(userCreatedAt);
    const now = new Date();
    const trialEnd = new Date(createdAt);
    trialEnd.setDate(trialEnd.getDate() + 7); // 7-day trial
    
    const diffTime = trialEnd.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
  }

  private calculateTrialDaysLeft(entitlement: any): number {
    if (!entitlement || entitlement.periodType !== 'TRIAL') return 0;
    const trialEnd = entitlement?.expirationDate;
    if (!trialEnd) return 0;
    
    const endDate = new Date(trialEnd);
    const now = new Date();
    const diffTime = endDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
  }

  private getDefaultSubscription(): UserSubscription {
    return {
      isActive: false,
      isTrial: false,
      trialDaysLeft: 0,
      planId: 'free',
      expiresAt: null,
      autoRenew: false,
    };
  }

  private getDefaultPlans(): SubscriptionPlan[] {
    return [
      {
        id: 'pro_monthly',
        name: 'Monthly Pro',
        price: '$4.99/month',
        period: 'monthly',
        features: [
          'Unlimited Lineups',
          'Premium Formations',
          'Advanced Analytics',
          'Community Features',
          'No Ads',
        ],
      },
      {
        id: 'pro_yearly',
        name: 'Yearly Pro',
        price: '$29.99/year',
        period: 'yearly',
        isPopular: true,
        features: [
          'Everything in Monthly',
          'Save 50%',
          'Priority Support',
          'Early Access Features',
        ],
      },
    ];
  }
}

export default SubscriptionService;
