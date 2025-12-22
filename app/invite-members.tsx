import { useTheme } from '@/hooks/use-theme';
import InviteMembersScreen from '@/screens/InviteMembersScreen';
import { Stack } from 'expo-router';
import React from 'react';

export default function InviteMembersRoute() {
  const { theme, isDark } = useTheme();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Invite Members',
          headerBackTitle: 'Back',
          headerTransparent: true,
          headerBlurEffect: isDark ? 'dark' : 'light',
          headerTintColor: theme.text,
        }}
      />
      <InviteMembersScreen />
    </>
  );
}
