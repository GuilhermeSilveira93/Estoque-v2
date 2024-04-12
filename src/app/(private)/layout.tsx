import NavBar from './components/NavBar'

export const metadata = {
  title: 'Home'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <main className="w-full p-4 min-h-screen mx-auto max-w-screen-3xl bg-gradient-to-t from-80% to-80% from-colors-light-background to-colors-light-primaria dark:from-colors-dark-background dark:to-colors-dark-primaria">
        {children}
      </main>
    </>
  )
}
