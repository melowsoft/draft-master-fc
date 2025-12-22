import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import CommunityTopicsScreen from '@/screens/CommunityTopicsScreen';

export default function CommunityTopics() {
  const { theme, isDark } = useTheme();
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Community Topics',
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              style={{ paddingHorizontal: Spacing.md, paddingVertical: Spacing.sm }}
              hitSlop={10}
            >
              <Feather name="arrow-left" size={24} color={theme.text} />
            </Pressable>
          ),
        }}
      />
      <CommunityTopicsScreen />
    </>
  );
}
