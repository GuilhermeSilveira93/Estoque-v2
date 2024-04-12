export const metadata = {
  title: 'Login'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex-1 bg-gradient-to-tr to-66% from-33% from-colors-light-background to-colors-light-secundaria dark:from-colors-dark-terciaria dark:to-colors-dark-background">
      {children}
    </main>
  )
}
