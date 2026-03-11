import { useState, useEffect, useCallback } from 'react';
/**
 * A defensive theme hook for Atticus Integrity Group.
 * Ensures runtime stability by guarding against SSR/test-runner environments 
 * and handling potential localStorage exceptions gracefully.
 */
export function useTheme() {
  // Initialize state with a fallback to light mode.
  // We use a lazy initializer to safely check window/localStorage only in the browser.
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      if (typeof window === 'undefined') return false;
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme !== null) {
        return savedTheme === 'dark';
      }
      // Default to system preference if no user choice is stored
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      console.warn('[ThemeHook] Failed to read initial theme preference:', e);
      return false;
    }
  });
  // Apply theme changes to the DOM and persist to localStorage
  useEffect(() => {
    try {
      const root = window.document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        window.localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      console.error('[ThemeHook] Failed to persist theme or update DOM:', e);
    }
  }, [isDark]);
  // Stable toggle function
  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);
  return { isDark, toggleTheme };
}