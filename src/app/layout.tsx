import { Metadata, Viewport } from 'next'
import React from 'react'

import { ThemeChanger } from '@/components/theme-mode'
import { Toaster } from '@/components/ui'

import '@/styles/globals.css'
import { Providers } from '@/providers/providers'

const title = 'Estoque Softrack'
const description = 'Desenvolvido por Guilherme Silveira'
export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app')
}
export const viewport: Viewport = {
  themeColor: '#ddd'
}
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-bl to-66% from-33% from-colors-light-background to-colors-light-secundaria dark:from-colors-dark-terciaria dark:to-colors-dark-background">
        <Providers>
          <div className="fixed w-screen h-screen bg-softrack-pattern bg-repeat bg-cover -z-10 opacity-30" />
          <main className="w-full mx-auto max-w-screen-3xl h-screen">
            {children}
          </main>
          <Toaster richColors position="top-right" />
          <ThemeChanger />
        </Providers>
      </body>
    </html>
  )
}
