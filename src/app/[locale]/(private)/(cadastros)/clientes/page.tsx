import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import CreateCliente from './components/CreateCliente'
import { Tabela } from './components/Tabela'
import Pagination from '@/components/pagination'
import { SearchData } from '@/components/search-data'

import { Cliente } from '@/@classes/Cliente'
import { RolesRequired } from '@/@types'
import { FiltersPage } from '@/@types/FiltersType'
import { userCanSeePage } from '@/@utils'

export type ClientesPageProps = {
  searchParams: Promise<
    FiltersPage & {
      ID_CLIENTE: string
    }
  >
}
const ClientesPage = async ({ searchParams }: ClientesPageProps) => {
  const urlParams = await searchParams
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR,
    ],
  })
  const t = await getTranslations('CUSTOMERS')
  const clientes = (
    await new Cliente().getAllWithParams({ searchParams: urlParams })
  ).body
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={'/clientes'}>{t('TITLE')}</Link>
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={urlParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {clientes.total > 0 ? (
            <Tabela data={clientes.data} searchParams={searchParams} />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>{t('NO_DATA')}</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {clientes.total > 0 && <Pagination total={clientes.total} />}
        </footer>
      </section>
      <CreateCliente />
    </section>
  )
}
export default ClientesPage
