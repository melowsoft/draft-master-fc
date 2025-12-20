import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    Pressable,
    ScrollView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BorderRadius, Colors, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useAuth } from '@/services/authContext';

type AuthMode = 'login' | 'signup' | 'forgot';

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
      }
    } else {
      const result = await signUpWithEmail(email, password);
      if (result.success) {
        if (result.error) {
          setMessage(result.error);
        }
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
    }
  };

  const getTitle = () => {
    switch (mode) {
      case 'login':
        return 'Welcome Back';
      case 'signup':
        return 'Create Account';
      case 'forgot':
        return 'Reset Password';
    }
  };

  const getSubtitle = () => {
    switch (mode) {
      case 'login':
        return 'Sign in to access your lineups and join the community';
      case 'signup':
        return 'Join DraftMaster FC and build your dream team';
      case 'forgot':
        return 'Enter your email to receive a password reset link';
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingTop: insets.top + Spacing['3xl'], paddingBottom: insets.bottom + Spacing['3xl'] },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <View style={[styles.logoContainer, { backgroundColor: theme.primary }]}>
            <Feather name="shield" size={40} color="#FFFFFF" />
          </View>
          <ThemedText type="h1" style={styles.appName}>DraftMaster FC</ThemedText>
        </View>

        <View style={styles.formContainer}>
          <ThemedText type="h2" style={styles.title}>{getTitle()}</ThemedText>
          <ThemedText type="body" style={[styles.subtitle, { color: theme.textSecondary }]}>
            {getSubtitle()}
          </ThemedText>

          {error ? (
            <View style={[styles.alertBox, { backgroundColor: Colors.light.error + '15' }]}>
              <Feather name="alert-circle" size={18} color={Colors.light.error} />
              <ThemedText style={[styles.alertText, { color: Colors.light.error }]}>{error}</ThemedText>
            </View>
          ) : null}

          {message ? (
            <View style={[styles.alertBox, { backgroundColor: Colors.light.success + '15' }]}>
              <Feather name="check-circle" size={18} color={Colors.light.success} />
              <ThemedText style={[styles.alertText, { color: Colors.light.success }]}>{message}</ThemedText>
            </View>
          ) : null}

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
                <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
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
            <Pressable onPress={() => setMode('forgot')} style={styles.forgotButton}>
              <ThemedText style={[styles.forgotText, { color: theme.primary }]}>Forgot password?</ThemedText>
            </Pressable>
          ) : null}

          <Button
            onPress={handleEmailAuth}
            disabled={isLoading}
            style={styles.mainButton}
          >
            {mode === 'forgot' ? 'Send Reset Link' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>

          {mode !== 'forgot' ? (
            <>
              <View style={styles.divider}>
                <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
              </View>
            </>
          ) : null}

          <View style={styles.switchMode}>
            {mode === 'forgot' ? (
              <Pressable onPress={() => setMode('login')}>
                <ThemedText style={{ color: theme.primary }}>Back to Sign In</ThemedText>
              </Pressable>
            ) : mode === 'login' ? (
              <View style={styles.switchRow}>
                <ThemedText style={{ color: theme.textSecondary }}>Don&apos;t have an account? </ThemedText>
                <Pressable onPress={() => setMode('signup')}>
                  <ThemedText style={{ color: theme.primary, fontWeight: '600' }}>Sign Up</ThemedText>
                </Pressable>
              </View>
            ) : (
              <View style={styles.switchRow}>
                <ThemedText style={{ color: theme.textSecondary }}>Already have an account? </ThemedText>
                <Pressable onPress={() => setMode('login')}>
                  <ThemedText style={{ color: theme.primary, fontWeight: '600' }}>Sign In</ThemedText>
                </Pressable>
              </View>
            )}
          </View>

          {mode !== 'forgot' ? (
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
          ) : null}
        </View>

        {isLoading ? (
          <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color={theme.primary} />
          </View>
        ) : null}
      </ScrollView>
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
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing['3xl'],
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.lg,
  },
  appName: {
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  alertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    borderRadius: BorderRadius.sm,
    marginBottom: Spacing.lg,
    gap: Spacing.sm,
  },
  alertText: {
    flex: 1,
    fontSize: 14,
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
  },
  mainButton: {
    marginBottom: Spacing.xl,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: Spacing.md,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.xl,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: Spacing.buttonHeight,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    gap: Spacing.sm,
  },
  googleIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  switchMode: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  switchRow: {
    flexDirection: 'row',
  },
  guestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: Spacing.buttonHeight,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    gap: Spacing.sm,
  },
  guestText: {
    fontSize: 16,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
