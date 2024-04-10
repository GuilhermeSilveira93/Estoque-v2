import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-xl h-screen shadow-colors-dark-terciaria bg-gradient-to-b from-20% to-0% from-colors-dark-terciaria to-colors-dark-background">
      {children}
    </div>
  )
}
