import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import TopicDetailScreen from '@/screens/TopicDetailScreen';

export default function CommunityDetail() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Topic Detail',
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      <TopicDetailScreen />
    </>
  );
}
