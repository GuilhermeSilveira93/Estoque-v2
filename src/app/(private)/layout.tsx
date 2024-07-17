import NavBar from './components/NavBar/NavBar';
export const metadata = {
  title: 'Estoque Softrack'
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <aside>
        <NavBar />
      </aside>
      <div className="flex h-screen flex-1 justify-center bg-gradient-to-t from-background from-80% to-primary to-80%">
        <main className="flex max-w-screen-3xl flex-1 flex-col p-6">
          {children}
        </main>
      </div>
    </>
  );
}
