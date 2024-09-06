'use client'
import React from 'react'

import { ThemeProviders } from './themeProvider'
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProviders>{children}</ThemeProviders>
}
