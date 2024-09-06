import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
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
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const idioma = await getMessages({ locale })

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={idioma}>
          <Providers>
            <div className="max-h-screen min-h-screen min-w-full">
              {children}
            </div>
            <Toaster richColors position="top-right" />
            <ThemeChanger />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
