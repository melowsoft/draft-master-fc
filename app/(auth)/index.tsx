import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Shadows, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';
import { router } from 'expo-router';

type AuthMode = 'login' | 'signup' | 'forgot';

// Add your actual app store URLs here
const APP_STORE_URL = 'https://apps.apple.com/app/idYOUR_APP_ID';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME';

export default function AuthScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const { signInWithEmail, signUpWithEmail, signInAnonymously, resetPassword } = useAuth();

  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleEmailAuth = async () => {
    setError(null);
    setMessage(null);

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (mode === 'forgot') {
      setIsLoading(true);
      const result = await resetPassword(email);
      setIsLoading(false);

      if (result.success) {
        setMessage('Password reset email sent. Please check your inbox.');
        setMode('login');
      } else {
        setError(result.error || 'Failed to send reset email');
      }
      return;
    }

    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (mode === 'signup') {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    }

    setIsLoading(true);

    if (mode === 'login') {
      const result = await signInWithEmail(email, password);
      if (!result.success) {
        setError(result.error || 'Failed to sign in');
      } else { 
        console.log('✅ Login successful, navigating to tabs...');
        router.replace('/(tabs)');
      }
    } else {
      const result = await signUpWithEmail(email, password);
      if (result.success) {
        if (result.error) {
          setMessage(result.error);
        }
        console.log('✅ Signup successful, navigating to tabs...');
        router.replace('/(tabs)');
      } else {
        setError(result.error || 'Failed to create account');
      }
    }

    setIsLoading(false);
  };

  const handleGuestContinue = async () => {
    setError(null);
    setIsLoading(true);
    const result = await signInAnonymously();
    setIsLoading(false);

    if (!result.success) {
      setError(result.error || 'Failed to continue as guest');
    } else {
      router.replace('/(tabs)');
    }
  };

  const handleOpenAppStore = async () => {
    try {
      if (Platform.OS === 'ios') {
        await Linking.openURL(APP_STORE_URL);
      } else if (Platform.OS === 'android') {
        await Linking.openURL(PLAY_STORE_URL);
      } else {
        await WebBrowser.openBrowserAsync(APP_STORE_URL);
      }
    } catch (error) {
      console.error('Error opening app store:', error);
    }
  };

  const getTitle = () => {
    switch (mode) {
      case 'login':
        return 'Welcome Back';
      case 'signup':
        return 'Join DraftMaster FC';
      case 'forgot':
        return 'Reset Password';
    }
  };

  const getSubtitle = () => {
    switch (mode) {
      case 'login':
        return 'Sign in to manage your lineups and join communities';
      case 'signup':
        return 'Create your free account to start building dream teams';
      case 'forgot':
        return 'Enter your email to receive a password reset link';
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + Spacing.xl, paddingBottom: insets.bottom + Spacing.xl },
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* App Logo/Icon Section */}
        <View style={styles.header}>
          <View style={[styles.logoContainer, { backgroundColor: theme.primary }]}>
            <Feather name="shield" size={48} color="#FFFFFF" />
          </View>
          <ThemedText type="h1" style={styles.appName}>DraftMaster FC</ThemedText>
          <ThemedText type="body" style={[styles.tagline, { color: theme.textSecondary }]}>
            Build • Share • Compete
          </ThemedText>
        </View>

        {/* Main Form Container */}
        <View style={[styles.formContainer, { backgroundColor: theme.backgroundDefault, borderColor: theme.border }]}>
          <ThemedText type="h2" style={styles.title}>{getTitle()}</ThemedText>
          <ThemedText type="body" style={[styles.subtitle, { color: theme.textSecondary }]}>
            {getSubtitle()}
          </ThemedText>

          {/* Error/Success Messages */}
          {error ? (
            <View style={[styles.alertBox, { backgroundColor: theme.error + '15' }]}>
              <Feather name="alert-circle" size={18} color={theme.error} />
              <ThemedText style={[styles.alertText, { color: theme.error }]}>{error}</ThemedText>
            </View>
          ) : null}

          {message ? (
            <View style={[styles.alertBox, { backgroundColor: theme.success + '15' }]}>
              <Feather name="check-circle" size={18} color={theme.success} />
              <ThemedText style={[styles.alertText, { color: theme.success }]}>{message}</ThemedText>
            </View>
          ) : null}

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <View style={[styles.inputWrapper, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
              <Feather name="mail" size={20} color={theme.textSecondary} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: theme.text }]}
                placeholder="Email"
                placeholderTextColor={theme.textSecondary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                editable={!isLoading}
                autoFocus={mode !== 'forgot'}
              />
            </View>

            {mode !== 'forgot' ? (
              <View style={[styles.inputWrapper, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
                <Feather name="lock" size={20} color={theme.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Password"
                  placeholderTextColor={theme.textSecondary}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  editable={!isLoading}
                />
                <Pressable 
                  onPress={() => setShowPassword(!showPassword)} 
                  style={styles.eyeButton}
                  hitSlop={8}
                >
                  <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color={theme.textSecondary} />
                </Pressable>
              </View>
            ) : null}

            {mode === 'signup' ? (
              <View style={[styles.inputWrapper, { backgroundColor: theme.backgroundSecondary, borderColor: theme.border }]}>
                <Feather name="lock" size={20} color={theme.textSecondary} style={styles.inputIcon} />
                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Confirm Password"
                  placeholderTextColor={theme.textSecondary}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  editable={!isLoading}
                />
              </View>
            ) : null}
          </View>

          {mode === 'login' ? (
            <Pressable 
              onPress={() => setMode('forgot')} 
              style={styles.forgotButton}
              hitSlop={8}
            >
              <ThemedText style={[styles.forgotText, { color: theme.primary }]}>Forgot password?</ThemedText>
            </Pressable>
          ) : null}

          {/* Primary Action Button */}
          <Button
            onPress={handleEmailAuth}
            disabled={isLoading}
            style={styles.mainButton}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              mode === 'forgot' ? 'Send Reset Link' : mode === 'login' ? 'Sign In' : 'Create Account'
            )}
          </Button>

          {mode !== 'forgot' ? (
            <>
              {/* Divider - Removed "Or continue with" text */}
              <View style={styles.divider}>
                <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
              </View>

              {/* Guest Option - Moved up since social buttons are removed */}
              <Pressable
                style={[styles.guestButton, { borderColor: theme.border }]}
                onPress={handleGuestContinue}
                disabled={isLoading}
              >
                <Feather name="user" size={20} color={theme.textSecondary} />
                <ThemedText style={[styles.guestText, { color: theme.textSecondary }]}>
                  Continue as Guest
                </ThemedText>
              </Pressable>
            </>
          ) : null}

          {/* Auth Mode Toggle */}
          <View style={styles.switchMode}>
            {mode === 'forgot' ? (
              <Pressable onPress={() => setMode('login')} hitSlop={8}>
                <ThemedText style={{ color: theme.primary, fontWeight: '600' }}>← Back to Sign In</ThemedText>
              </Pressable>
            ) : mode === 'login' ? (
              <View style={styles.switchRow}>
                <ThemedText style={{ color: theme.textSecondary }}>Don&apos;t have an account? </ThemedText>
                <Pressable onPress={() => setMode('signup')} hitSlop={8}>
                  <ThemedText style={{ color: theme.primary, fontWeight: '600' }}>Sign Up</ThemedText>
                </Pressable>
              </View>
            ) : (
              <View style={styles.switchRow}>
                <ThemedText style={{ color: theme.textSecondary }}>Already have an account? </ThemedText>
                <Pressable onPress={() => setMode('login')} hitSlop={8}>
                  <ThemedText style={{ color: theme.primary, fontWeight: '600' }}>Sign In</ThemedText>
                </Pressable>
              </View>
            )}
          </View>
        </View>

        {/* App Store Badges */}
        <View style={styles.appStoreSection}>
          <ThemedText type="small" style={[styles.availableText, { color: theme.textSecondary }]}>
            Also available on
          </ThemedText>
          <View style={styles.storeBadges}>
            <Pressable 
              onPress={handleOpenAppStore}
              style={styles.storeBadge}
              disabled={isLoading}
            >
              {Platform.OS === 'ios' ? (
                <FontAwesome name="apple" size={24} color={theme.text} />
              ) : (
                <FontAwesome5 name="google-play" size={20} color={theme.text} />
              )}
              <ThemedText style={[styles.storeText, { color: theme.text }]}>
                {Platform.OS === 'ios' ? 'App Store' : 'Play Store'}
              </ThemedText>
            </Pressable>
            
            {/* Show both badges on web */}
            {Platform.OS === 'web' && (
              <>
                <Pressable 
                  onPress={() => WebBrowser.openBrowserAsync(APP_STORE_URL)}
                  style={styles.storeBadge}
                  disabled={isLoading}
                >
                  <FontAwesome name="apple" size={24} color={theme.text} />
                  <ThemedText style={[styles.storeText, { color: theme.text }]}>
                    App Store
                  </ThemedText>
                </Pressable>
                <Pressable 
                  onPress={() => WebBrowser.openBrowserAsync(PLAY_STORE_URL)}
                  style={styles.storeBadge}
                  disabled={isLoading}
                >
                  <FontAwesome5 name="google-play" size={20} color={theme.text} />
                  <ThemedText style={[styles.storeText, { color: theme.text }]}>
                    Play Store
                  </ThemedText>
                </Pressable>
              </>
            )}
          </View>
        </View>

        {/* Footer Links */}
        <View style={styles.footer}>
          <ThemedText type="small" style={[styles.footerText, { color: theme.textSecondary }]}>
            By continuing, you agree to our{' '}
            <ThemedText 
              type="small" 
              style={[styles.footerLink, { color: theme.primary }]}
              onPress={() => WebBrowser.openBrowserAsync('https://yourapp.com/terms')}
            >
              Terms
            </ThemedText>
            {' '}and{' '}
            <ThemedText 
              type="small" 
              style={[styles.footerLink, { color: theme.primary }]}
              onPress={() => WebBrowser.openBrowserAsync('https://yourapp.com/privacy')}
            >
              Privacy Policy
            </ThemedText>
          </ThemedText>
        </View>
      </ScrollView>

      {/* Loading Overlay */}
      {isLoading ? (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={theme.primary} />
          <ThemedText style={[styles.loadingText, { color: theme.text }]}>
            {mode === 'forgot' ? 'Sending reset link...' : 'Authenticating...'}
          </ThemedText>
        </View>
      ) : null}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.xl,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing['2xl'],
    paddingTop: Spacing.xl,
  },
  logoContainer: {
    width: 96,
    height: 96,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
    ...Shadows.card,
  },
  appName: {
    textAlign: 'center',
    marginBottom: Spacing.xs,
    fontSize: 32,
    fontWeight: '700',
  },
  tagline: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  formContainer: {
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    marginBottom: Spacing.xl,
    borderWidth: 1,
    ...Shadows.card,
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.sm,
    fontSize: 24,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: Spacing.lg,
    fontSize: 14,
    lineHeight: 20,
  },
  alertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.lg,
    gap: Spacing.sm,
  },
  alertText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
  },
  inputContainer: {
    gap: Spacing.md,
    marginBottom: Spacing.md,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BorderRadius.md,
    height: Spacing.inputHeight,
    paddingHorizontal: Spacing.lg,
  },
  inputIcon: {
    marginRight: Spacing.md,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: '100%',
  },
  eyeButton: {
    padding: Spacing.sm,
    marginRight: -Spacing.sm,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: Spacing.lg,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: '500',
  },
  mainButton: {
    marginBottom: Spacing.lg,
    height: 52,
    borderRadius: BorderRadius.md,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  guestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  guestText: {
    fontSize: 15,
    fontWeight: '500',
  },
  switchMode: {
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appStoreSection: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  availableText: {
    marginBottom: Spacing.md,
    fontSize: 13,
    fontWeight: '500',
  },
  storeBadges: {
    flexDirection: 'row',
    gap: Spacing.md,
    justifyContent: 'center',
  },
  storeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  storeText: {
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: Spacing.xl,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
  },
  footerLink: {
    fontWeight: '600',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  loadingText: {
    marginTop: Spacing.md,
    fontSize: 16,
    fontWeight: '500',
  },
});
