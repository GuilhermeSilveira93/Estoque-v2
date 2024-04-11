import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-xl h-screen shadow-colors-dark-terciaria bg-colors-light-background dark:bg-colors-dark-background">
      <div className="relative h-1/5 w-full bg-colors-light-primaria dark:bg-colors-dark-primaria" />
      <div className="relative">{children}</div>
    </div>
  )
}
