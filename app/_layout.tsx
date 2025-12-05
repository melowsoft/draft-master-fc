import { router, Stack } from 'expo-router';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { useAuth, AuthProvider } from '@/services/authContext';
import { useEffect } from 'react';

function RootLayoutNav() {
  const { theme } = useTheme();
  const { isAuthenticated, isLoading } = useAuth();

    useEffect(() => {    
    if (!isLoading) {
      if (isAuthenticated) {
        console.log('✅ User authenticated, navigating to tabs...');
        router.replace('/(tabs)');
      } else {
        console.log('❌ User not authenticated, staying on auth');
        // Already on auth screen
      }
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.backgroundRoot }]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <Stack.Screen name="auth" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});