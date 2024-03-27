import React from 'react'
import { ThemeProvider } from 'next-themes'
export const ThemeProviders = ({ children }: {children: React.ReactNode}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme='dark' enableSystem>
      {children}
    </ThemeProvider>
  )
}