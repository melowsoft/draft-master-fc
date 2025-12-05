import {  Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';
import CommunityTopicsScreen from '@/screens/CommunityTopicsScreen';

export default function CommunityTopics() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Community Topics',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      <CommunityTopicsScreen />
    </>
  );
}