import CommunityDetailScreen from '@/screens/CommunityDetailScreen';
import { useLocalSearchParams , Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';

export default function CommunityDetail() {
  const { id } = useLocalSearchParams();
  const { theme, isDark } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Community',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      <CommunityDetailScreen />
    </>
  );
}