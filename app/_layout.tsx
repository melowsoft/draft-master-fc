import { router, Stack } from 'expo-router';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { useAuth, AuthProvider } from '@/services/authContext';
import { useEffect } from 'react';

function RootLayoutNav() {
  const { theme } = useTheme();
  const { isAuthenticated, isLoading } = useAuth();

  // Handle initial auth state
  useEffect(() => {    
    if (!isLoading) {
      if (isAuthenticated) {
        console.log('✅ User authenticated');
        // Don't navigate here, let the render handle it
      } else {
        console.log('❌ User not authenticated');
        // Ensure we're on auth screen if not authenticated
        if (router.canGoBack()) {
          router.replace('/(auth)');
        }
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

  // Show auth screen if not authenticated
  if (!isAuthenticated) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
      </Stack>
    );
  }

  // Show main app screens if authenticated
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      {/* Modal and other authenticated screens */}
      <Stack.Screen
        name="create-lineup"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="create-community"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="create-topic"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="community-detail/[id]"
      />
      <Stack.Screen
        name="community-topics/[id]"
      />
      <Stack.Screen
        name="topic-detail/[id]"
      />
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
