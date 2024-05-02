export const metadata = {
  title: 'Login'
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="to-66% from-33% bg-gradient-to-r from-primary to-primary-foreground">
      {children}
    </main>
  );
}
