import Link from 'next/link';

import CreateCliente from './components/CreateCliente';
import { Tabela } from './components/Tabela';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Cliente } from '@/@classes';
import { FiltersPage } from '@/@types/FiltersType';

export type ClientesPageProps = {
  searchParams: FiltersPage & {
    ID_CLIENTE: string
  }
};
const ClientesPage = async ({ searchParams }: ClientesPageProps) => {
  const clientes = (await new Cliente().getAll({ searchParams })).body;

  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={'/clientes'}>Clientes</Link>
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {clientes.total > 0 ? (
            <Tabela data={clientes.data} searchParams={searchParams} />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>Não há dados</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {clientes.total > 0 && <Pagination total={clientes.total} />}
        </footer>
      </section>
      <CreateCliente />
    </section>
  );
};
export default ClientesPage;
