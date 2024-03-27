import React from 'react'

import '@/styles/globals.css'
import { Providers } from '@/providers/providers'
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
        <Providers>
          <main className="flex flex-row">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
