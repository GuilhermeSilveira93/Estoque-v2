import NavBar from '../../components/NavBar';

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
      <div className="flex h-screen w-full items-stretch justify-center bg-gradient-to-t from-background from-80% to-primary to-80%">
        <main className="w-full max-w-screen-3xl p-6">{children}</main>
      </div>
    </>
  );
}
