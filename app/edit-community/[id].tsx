import { Stack } from 'expo-router';
import React from 'react';

import { useTheme } from '@/hooks/use-theme';
import EditCommunityScreen from '@/screens/EditCommunityScreen';

export default function EditCommunityRoute() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Edit Community',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      <EditCommunityScreen />
    </>
  );
}
