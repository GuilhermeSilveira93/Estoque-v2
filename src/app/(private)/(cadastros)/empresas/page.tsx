import Link from 'next/link';

import CreateEmpresa from './components/CreateEmpresa';
import { Tabela } from './components/Tabela';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Empresa } from '@/@classes/Empresa';
import { FiltersPage } from '@/@types/FiltersType';

export type EmpresaPageProps = {
  searchParams: FiltersPage & {
    ID_EMPRESA: string
  }
};
const EmpresasPage = async ({ searchParams }: EmpresaPageProps) => {
  const empresas = (await new Empresa().getAll({ searchParams })).body;
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Empresas
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {empresas.total > 0 ? (
            <Tabela
              data={empresas.data}
              searchParams={searchParams}
              ocultar={['ID_EMPRESA', 'D_DATA']}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>Não há dados</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {empresas.total > 0 && <Pagination total={empresas.total} />}
        </footer>
      </section>
      <CreateEmpresa />
      <Link href={'/empresas/editEmp/26262626'}>Modal</Link>
    </section>
  );
};
export default EmpresasPage;
