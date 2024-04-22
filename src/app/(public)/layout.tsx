export const metadata = {
  title: 'Login'
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="to-66% from-33% flex-1 bg-gradient-to-r from-background to-secondary-foreground">
      {children}
    </main>
  );
}
