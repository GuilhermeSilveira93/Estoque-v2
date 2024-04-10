export const metadata = {
  title: 'Login'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex flex-wrap h-full justify-center items-center">
      {children}
    </main>
  )
}
