'use client'
import { useTheme } from 'next-themes'
import React from 'react'

import { colors } from '@/components/colors'

import { Menu as MenuIcon } from 'lucide-react'
export const Menu = () => {
  const { theme } = useTheme()
  return (
    <MenuIcon
      size={42}
      color={colors[theme && theme === 'light' ? theme : 'dark'].background}
    />
  )
}
