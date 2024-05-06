import NavBar from './NavBar/NavBar';

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
      <NavBar />
      <div className="flex min-h-screen w-full flex-wrap items-stretch justify-center bg-gradient-to-t from-background from-80% to-primary to-80%">
        <main className="w-full max-w-screen-3xl p-6">{children}</main>
      </div>
    </>
  );
}
