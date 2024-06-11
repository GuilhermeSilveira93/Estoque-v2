import { Tabela } from './components/Tabela';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Usuarios } from '@/@classes/Usuarios';

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
  const users = (await new Usuarios().getAll({ searchParams })).body;
  return (
    <section className="max-h-96 ">
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Usuários
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
        </header>
        <div className="max-h-148 overflow-auto">
          {users.total > 0 ? (
            <Tabela
              data={users.data}
              searchParams={searchParams}
              ocultar={[
                'ID_USUARIO',
                'S_ATIVO',
                'S_SENHA',
                'ID_GRUPO',
                'D_EXPIRACAO_SENHA',
                'N_TENTATIVAS_LOGIN',
                'S_CHAVE'
              ]}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>Não há dados</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {users.total > 0 && <Pagination total={users.total} />}
        </footer>
      </section>
    </section>
  );
};
export default UserPage;
