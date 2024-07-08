export const metadata = {
  title: 'Empresas - Estoque'
};
export default function EmpresasLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal: React.ReactNode
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
