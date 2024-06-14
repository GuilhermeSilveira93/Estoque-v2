import { Tabela } from '../produtos/components/Tabela';
import CreateProd from './components/createProd';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Produtos } from '@/@classes';

const UserPage = async ({
  searchParams
}: {
  searchParams: {
    ID_USUARIO: string,
    S_ATIVO: string,
    Search: string,
    Page: string,
    LimitPerPage: string
  }
}) => {
  const produtos = (await new Produtos().getAll()).body;
  return (
    <section className="max-h-96 ">
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Produtos
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
        </header>
        <div className="max-h-148 overflow-auto">
          {produtos.total > 0 ? (
            <Tabela
              data={produtos.data}
              searchParams={searchParams}
              ocultar={[]}
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
export default UserPage;
