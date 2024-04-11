import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative shadow-xl h-screen shadow-colors-dark-terciaria">
      <div className="-z-10 min-h-[20%] w-full bg-colors-light-primaria dark:bg-colors-dark-primaria" />
      <div className="-z-10 h-[80%] w-full bg-colors-light-background dark:bg-colors-dark-background">
        {children}
      </div>
    </div>
  )
}
