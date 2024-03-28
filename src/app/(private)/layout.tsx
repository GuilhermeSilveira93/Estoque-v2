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
      {children}
    </>
  )
}
