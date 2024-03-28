import React from 'react'

import { Toaster } from '@/components/ui/sonner'

import '@/styles/globals.css'
import { Providers } from '@/providers/providers'
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <main className="h-screen flex justify-center items-center bg-colors-light-background dark:bg-colors-dark-background">
            {children}
            <Toaster richColors position="top-right" />
          </main>
        </Providers>
      </body>
    </html>
  )
}
