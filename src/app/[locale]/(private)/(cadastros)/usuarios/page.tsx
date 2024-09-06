import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import CreateUser from '../usuarios/components/createUser'
import { Tabela } from '../usuarios/components/Tabela'
import Pagination from '@/components/pagination'
import { SearchData } from '@/components/search-data'

import { Usuario } from '@/@classes/Usuario'
import { RolesRequired } from '@/@types'
import { FiltersPage } from '@/@types/FiltersType'
import { userCanSeePage } from '@/@utils'
export type UserPageProps = {
  searchParams: FiltersPage & {
    ID_USUARIO: string
  }
}
const UsuariosPage = async ({ searchParams }: UserPageProps) => {
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR,
    ],
  })
  const t = await getTranslations('USERS')
  const users = (await new Usuario().getAll({ searchParams })).body
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={{ pathname: '/usuarios' }}>{t('TITLE')}</Link>
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
                'ID_GRUPO',
                'D_EXPIRACAO_SENHA',
                'N_TENTATIVAS_LOGIN',
                'st_grupo',
              ]}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>{t('NO_DATA')}</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {users.total > 0 && <Pagination total={users.total} />}
        </footer>
      </section>
      <CreateUser />
    </section>
  )
}
export default UsuariosPage
