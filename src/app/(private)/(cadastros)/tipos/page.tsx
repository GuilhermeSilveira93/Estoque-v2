import CreateTipo from './components/CreateTipo';
import { Tabela } from './components/Tabela';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Tipo } from '@/@classes';
import { FiltersPage } from '@/@types/FiltersType';

export type TiposPageProps = {
  searchParams: FiltersPage & {
    ID_EMPRESA: string
  }
};
const TiposPage = async ({ searchParams }: TiposPageProps) => {
  const tipos = (await new Tipo().getAll({ searchParams })).body;
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Tipos
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {tipos.total > 0 ? (
            <Tabela
              data={tipos.data}
              searchParams={searchParams}
              ocultar={['ID_TIPO']}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>Não há dados</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {tipos.total > 0 && <Pagination total={tipos.total} />}
        </footer>
      </section>
      <CreateTipo />
    </section>
  );
};
export default TiposPage;
