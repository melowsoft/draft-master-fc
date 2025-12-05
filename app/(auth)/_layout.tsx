import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/use-theme';

export default function AuthLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.backgroundRoot },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}