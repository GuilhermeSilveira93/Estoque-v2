import React from 'react'

export const Container = ({ children }: { children: React.ReactNode }) => {
  // className="w-full max-w-screen-2xl max-h-full h-screen p-2 overflow-hidden rounded-2xl mx-auto bg-colors-light-background dark:bg-colors-dark-background border-2"
  return <div>{children}</div>
}
