import Link from 'next/link';

import { Tabela } from '../produtos/components/Tabela';
import CreateProd from './components/createProd';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Produto } from '@/@classes';
import { RolesRequired } from '@/@types';
import { FiltersPage } from '@/@types/FiltersType';
import { userCanSeePage } from '@/@utils';

export type ProdutosPageProps = {
  searchParams: FiltersPage & {
    ID_PRODUTO: string
  }
};
const ProdutosPage = async ({ searchParams }: ProdutosPageProps) => {
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR
    ]
  });
  const produtos = (await new Produto().getAll({ searchParams })).body ?? {
    data: [],
    total: 0
  };
  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={{ pathname: '/produtos' }}>Produtos</Link>
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {produtos.total > 0 ? (
            <Tabela
              data={produtos.data}
              searchParams={searchParams}
              ocultar={[
                'ID_PRODUTO',
                'ID_TIPO',
                'N_SERIAL',
                'ST_TIPO',
                'S_ATIVO'
              ]}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>Não há dados</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {produtos.total > 0 && <Pagination total={produtos.total} />}
        </footer>
      </section>
      <CreateProd />
    </section>
  );
};
export default ProdutosPage;
