'use client'

import { useTheme } from 'next-themes'

import { useMount } from '@/hooks/use-mount'
import { LoaderIcon, Moon, Sun } from 'lucide-react'

export const ThemeChanger = () => {
  const { theme, setTheme, systemTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  const mounted = useMount()

  return (
    <div className="float-right">
      <button
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        {mounted ? (
          currentTheme === 'dark' ? (
            <Sun size={40} />
          ) : (
            <Moon size={40} />
          )
        ) : (
          <LoaderIcon size={40} className="animate-spin" />
        )}
      </button>
    </div>
  )
}
