import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import CommunityDetailScreen from '@/screens/CommunityDetailScreen';

export default function CommunityDetail() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Community Detail',
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      <CommunityDetailScreen />
    </>
  );
}
