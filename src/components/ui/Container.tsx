import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-screen-2xl h-screen p-2 overflow-hidden rounded-2xl mx-auto bg-colors-light-background dark:bg-colors-dark-background border-2">
      {children}
    </div>
  )
}
