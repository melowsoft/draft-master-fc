import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
type ColorScheme = 'light' | 'dark';
type ColorSchemePreference = ColorScheme | 'system';

const COLOR_SCHEME_PREFERENCE_KEY = '@draftmaster_color_scheme_preference';

type ColorSchemeContextValue = {
  preference: ColorSchemePreference;
  setPreference: (value: ColorSchemePreference) => void;
};

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null);

export function ColorSchemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ColorSchemePreference>('system');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const saved = await AsyncStorage.getItem(COLOR_SCHEME_PREFERENCE_KEY);
        if (cancelled) return;
        if (saved === 'light' || saved === 'dark' || saved === 'system') {
          setPreferenceState(saved);
        }
      } catch {
        // ignore
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const setPreference = useCallback((value: ColorSchemePreference) => {
    setPreferenceState(value);
    void AsyncStorage.setItem(COLOR_SCHEME_PREFERENCE_KEY, value);
  }, []);

  const contextValue = useMemo<ColorSchemeContextValue>(() => ({ preference, setPreference }), [preference, setPreference]);

  return React.createElement(ColorSchemeContext.Provider, { value: contextValue }, children);
}

export function useColorSchemePreference() {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) {
    return { preference: 'system' as const, setPreference: (_: ColorSchemePreference) => {} };
  }
  return ctx;
}

export function useColorScheme(): ColorScheme {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const systemScheme = useRNColorScheme();
  const { preference } = useColorSchemePreference();

  if (preference === 'light' || preference === 'dark') {
    return preference;
  }

  if (hasHydrated) {
    return (systemScheme ?? 'light') as ColorScheme;
  }

  return 'light';
}
