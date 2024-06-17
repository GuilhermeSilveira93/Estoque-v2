import { Tabela } from '../produtos/components/Tabela';
import CreateProd from './components/createProd';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Produtos } from '@/@classes';
import { FiltersPage } from '@/@types/FiltersType';

export type ProdutosPageProps = {
  searchParams: FiltersPage & {
    ID_PRODUTO: string
  }
};
const ProdutosPage = async ({ searchParams }: ProdutosPageProps) => {
  const produtos = (await new Produtos().getAll({ searchParams })).body;
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Produtos
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
