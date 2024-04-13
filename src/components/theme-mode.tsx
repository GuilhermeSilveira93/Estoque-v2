'use client';

import { useTheme } from 'next-themes';

import { useMount } from '@/hooks/use-mount';
import { LoaderIcon, Moon, Sun } from 'lucide-react';

import { colors } from './colors';

export const ThemeChanger = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const mounted = useMount();

  return (
    <div className="absolute bottom-0 right-0">
      <button
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {mounted ? (
          currentTheme === 'dark' ? (
            <Sun size={40} color={colors[currentTheme].primaria} />
          ) : (
            <Moon size={40} color={colors.light.primaria} />
          )
        ) : (
          <LoaderIcon
            size={40}
            color={colors.dark.primaria}
            className="animate-spin"
          />
        )}
      </button>
    </div>
  );
};
