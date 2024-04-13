import React from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex-col bg-colors-light-background shadow-xl shadow-colors-dark-terciaria dark:bg-colors-dark-background">
      <div className="h-1/5 w-full bg-colors-light-primaria dark:bg-colors-dark-primaria" />
      <div className="relative flex-1">{children}</div>
    </div>
  );
};
