import { useTheme } from '@/hooks/use-theme';
import CommunityDetailScreen from '@/screens/CommunityDetailScreen';
import { Stack } from 'expo-router';

export default function CommunityDetail() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Community',
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
