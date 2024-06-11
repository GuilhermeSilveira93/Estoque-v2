import NavBar from './components/NavBar/NavBar';
import {} from './components/index';

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
      <div className="min-h-screen w-full bg-gradient-to-t from-background from-80% to-primary to-80%">
        <main className="m-auto w-full max-w-screen-3xl p-6">{children}</main>
      </div>
    </>
  );
}
