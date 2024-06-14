import CreateUser from '../usuarios/components/createUser';
import { Tabela } from '../usuarios/components/Tabela';
import Pagination from '@/components/pagination';
import { SearchData } from '@/components/search-data';

import { Usuarios } from '@/@classes/Usuarios';
import { FiltersPage } from '@/@types/FiltersType';
type UserPageProps = {
  searchParams: FiltersPage & {
    ID_USUARIO: string
  }
};
const UsuariosPage = async ({ searchParams }: UserPageProps) => {
  const users = (await new Usuarios().getAll({ searchParams })).body;
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
                'S_CHAVE',
                'ST_GRUPO'
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
      <CreateUser />
    </section>
  );
};
export default UsuariosPage;
