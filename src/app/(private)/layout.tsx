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
    <main className="flex flex-row">
      <NavBar />
      {children}
    </main>
  )
}
