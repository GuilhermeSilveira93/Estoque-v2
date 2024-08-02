import React from 'react'

import { cn } from '@/lib/utils'

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <section
      className={cn(
        `p-4 w-full rounded-lg bg-card shadow-sm shadow-foreground ${className}`
      )}
    >
      {children}
    </section>
  )
}
