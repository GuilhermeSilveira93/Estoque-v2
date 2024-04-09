'use client'
import { useTheme } from 'next-themes'
import React from 'react'

import { colors } from '@/components/colors'

import { Menu as MenuIcon } from 'lucide-react'
export const Menu = () => {
  const { systemTheme } = useTheme()
  return (
    <MenuIcon
      size={42}
      color={colors[systemTheme ? systemTheme : 'dark'].primaria}
    />
  )
}
