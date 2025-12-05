import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacing } from '@/constants/theme';
import { Platform } from 'react-native';

// For Expo Router, we don't have React Navigation's header/tab context
// We'll create a simplified version
export function useScreenInsets() {
  const insets = useSafeAreaInsets();
  
  // In Expo Router, header height varies
  const headerHeight = Platform.select({
    ios: 44, // Typical iOS header
    android: 56, // Typical Android header
    default: 64,
  });
  
  // Tab bar height estimate (adjust based on your design)
  const tabBarHeight = 50;

  return {
    // Standard padding top with header consideration
    paddingTop: headerHeight + Spacing.xl,
    
    // Bottom padding with tab bar consideration
    paddingBottom: tabBarHeight + Spacing.xl,
    
    // Scroll view insets (for keyboard avoiding)
    scrollInsetBottom: insets.bottom + Spacing.lg,
    
    // Safe area raw values
    safeArea: {
      top: insets.top,
      bottom: insets.bottom,
      left: insets.left,
      right: insets.right,
    },
    
    // Header height for custom calculations
    headerHeight,
    
    // Tab bar height
    tabBarHeight,
  };
}