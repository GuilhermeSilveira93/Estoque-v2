import NavBar from './components/NavBar';

export const metadata = {
  title: 'Home',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <NavBar />
      <main className="mx-auto min-h-screen w-full max-w-screen-3xl bg-gradient-to-t from-colors-light-background from-80% to-colors-light-primaria to-80% p-4 dark:from-colors-dark-background dark:to-colors-dark-primaria">
        {children}
      </main>
    </>
  );
}
