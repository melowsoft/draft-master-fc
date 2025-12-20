import AsyncStorage from '@react-native-async-storage/async-storage';
import { Session, User } from '@supabase/supabase-js';
import { router } from 'expo-router';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Profile } from './database.types';
import { isSupabaseConfigured, supabase } from './supabase';

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signInWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUpWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signInAnonymously: () => Promise<{ success: boolean; error?: string }>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  updateProfile: (updates: Partial<Profile>) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ANONYMOUS_USER_KEY = '@draftmaster_anonymous_user';

interface AnonymousUser {
  id: string;
  username: string;
  avatarColor: number;
  createdAt: string;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [anonymousUser, setAnonymousUser] = useState<AnonymousUser | null>(null);

  useEffect(() => {
    initializeAuth();
  }, []);

  async function initializeAuth() {
    setIsLoading(true);

    if (isSupabaseConfigured() && supabase) {
      console.log('🔑 Initializing Supabase auth...');
      
      try {
        // Get current session
        const { data: { session } } = await supabase.auth.getSession();
        console.log('Session loaded:', session ? 'Yes' : 'No');
        
        setSession(session);
        setUser(session?.user || null);

        if (session?.user) {
          console.log('Fetching profile for user:', session.user.id);
          await fetchProfile(session.user.id);
        }

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            console.log('Auth state changed:', event);
            setSession(session);
            setUser(session?.user || null);

            if (session?.user) {
              await fetchProfile(session.user.id);
            } else {
              setProfile(null);
            }
          }
        );

        setIsLoading(false);
        return () => subscription.unsubscribe();
      } catch (error) {
        console.error('Error initializing auth:', error);
        setIsLoading(false);
      }
    } else {
      console.log('⚠️ Supabase not configured, using local mode');
      const storedUser = await loadAnonymousUser();
      if (storedUser) {
        setAnonymousUser(storedUser);
        setProfile({
          id: storedUser.id,
          username: storedUser.username,
          avatar_url: null,
          avatar_color: storedUser.avatarColor,
          favorite_formation: '4-3-3',
          created_at: storedUser.createdAt,
          updated_at: storedUser.createdAt,
        });
      }
      setIsLoading(false);
    }
  }

  async function fetchProfile(userId: string) {
    if (!supabase) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.log('Profile fetch error:', error.message);
        // Create profile if doesn't exist
        const newProfile = await createProfile(userId);
        setProfile(newProfile);
      } else {
        console.log('Profile loaded:', data.username);
        setProfile(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }

  async function createProfile(userId: string): Promise<Profile> {
    if (!supabase) {
      return {
        id: userId,
        username: `User${Math.floor(Math.random() * 10000)}`,
        avatar_url: null,
        avatar_color: Math.floor(Math.random() * 3),
        favorite_formation: '4-3-3',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
    }

    const newProfile: Profile = {
      id: userId,
      username: `User${Math.floor(Math.random() * 10000)}`,
      avatar_url: null,
      avatar_color: Math.floor(Math.random() * 3),
      favorite_formation: '4-3-3',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('profiles')
      .insert(newProfile)
      .select()
      .single();

    if (error) {
      console.error('Error creating profile:', error);
      return newProfile;
    }

    return data;
  }

  async function signInWithEmail(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    console.log('🔐 Attempting sign in with email:', email);
    
    if (!isSupabaseConfigured() || !supabase) {
      console.log('❌ Supabase not configured');
      return { success: false, error: 'Backend not configured. Please check your Supabase settings.' };
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        console.log('❌ Sign in error:', error.message);
        return { success: false, error: error.message };
      }

      console.log('✅ Sign in successful for:', data.user?.email);
      return { success: true };
    } catch (error: any) {
      console.log('❌ Sign in exception:', error.message);
      return { success: false, error: error.message || 'An unexpected error occurred' };
    }
  }

  async function signUpWithEmail(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    console.log('📝 Attempting sign up with email:', email);
    
    if (!isSupabaseConfigured() || !supabase) {
      return { success: false, error: 'Backend not configured' };
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        console.log('❌ Sign up error:', error.message);
        return { success: false, error: error.message };
      }

      console.log('✅ Sign up successful:', data.user?.email);
      
      if (data.user && !data.session) {
        return { success: true, error: 'Please check your email to verify your account' };
      }

      return { success: true };
    } catch (error: any) {
      console.log('❌ Sign up exception:', error.message);
      return { success: false, error: error.message || 'An unexpected error occurred' };
    }
  }

  async function signInAnonymously(): Promise<{ success: boolean; error?: string }> {
    console.log('👤 Creating anonymous user...');
    
    try {
      // Create a unique anonymous user ID
      const anonymousId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const username = `Guest${Math.floor(Math.random() * 10000)}`;
      const avatarColor = Math.floor(Math.random() * 5);
      const createdAt = new Date().toISOString();
      
      const anonymousUser: AnonymousUser = {
        id: anonymousId,
        username,
        avatarColor,
        createdAt,
      };
      
      // Save to async storage
      await AsyncStorage.setItem(ANONYMOUS_USER_KEY, JSON.stringify(anonymousUser));
      
      // Set user state
      setAnonymousUser(anonymousUser);
      setProfile({
        id: anonymousId,
        username,
        avatar_url: null,
        avatar_color: avatarColor,
        favorite_formation: '4-3-3',
        created_at: createdAt,
        updated_at: createdAt,
      });
      
      console.log('✅ Anonymous user created:', username);
      return { success: true };
    } catch (error: any) {
      console.log('❌ Anonymous sign in error:', error.message);
      return { success: false, error: error.message || 'Failed to create anonymous user' };
    }
  }

  async function resetPassword(email: string): Promise<{ success: boolean; error?: string }> {
    console.log('📧 Resetting password for:', email);
    
    if (!isSupabaseConfigured() || !supabase) {
      return { success: false, error: 'Backend not configured' };
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim());
      
      if (error) {
        console.log('❌ Reset password error:', error.message);
        return { success: false, error: error.message };
      }
      
      console.log('✅ Password reset email sent');
      return { success: true };
    } catch (error: any) {
      console.log('❌ Reset password exception:', error.message);
      return { success: false, error: error.message || 'Failed to send reset email' };
    }
  }

  async function signOut(): Promise<void> {
    console.log('🚪 Signing out...');
    
    if (isSupabaseConfigured() && supabase) {
      await supabase.auth.signOut();
    }
    
    setUser(null);
    setSession(null);
    setProfile(null);
    setAnonymousUser(null);
    await AsyncStorage.removeItem(ANONYMOUS_USER_KEY);
    
    // Navigate to auth screen
    router.replace('/(auth)');
  }

  async function updateProfile(updates: Partial<Profile>): Promise<{ success: boolean; error?: string }> {
    const userId = user?.id;
    if (!userId) {
      return { success: false, error: 'Not authenticated' };
    }

    const now = new Date().toISOString();
    const updatedProfile = profile ? { ...profile, ...updates, updated_at: now } : null;
    setProfile(updatedProfile);

    if (isSupabaseConfigured() && supabase && user) {
      try {
        const { error } = await supabase
          .from('profiles')
          .update({ ...updates, updated_at: now })
          .eq('id', userId);

        if (error) {
          console.log('Profile update error:', error.message);
          return { success: false, error: error.message };
        }
      } catch (e) {
        console.log('Failed to sync profile:', e);
      }
    }

    return { success: true };
  }

  async function loadAnonymousUser(): Promise<AnonymousUser | null> {
    try {
      const data = await AsyncStorage.getItem(ANONYMOUS_USER_KEY);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  const value: AuthContextType = {
    user,
    profile,
    session,
    isLoading,
    isAuthenticated: Boolean(user || anonymousUser),
    signInWithEmail,
    signUpWithEmail,
    signInAnonymously,
    resetPassword,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
