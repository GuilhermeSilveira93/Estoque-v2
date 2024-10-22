import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import CreateEmpresa from './components/CreateEmpresa'
import { Tabela } from './components/Tabela'
import Pagination from '@/components/pagination'
import { SearchData } from '@/components/search-data'

import { Empresa } from '@/@classes/Empresa'
import { RolesRequired } from '@/@types'
import { FiltersPage } from '@/@types/FiltersType'
import { userCanSeePage } from '@/@utils'

export type EmpresaPageProps = {
  searchParams: Promise<
    FiltersPage & {
      ID_EMPRESA: string
    }
  >
}
const EmpresasPage = async ({ searchParams }: EmpresaPageProps) => {
  const urlParams = await searchParams
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR,
    ],
  })
  const t = await getTranslations('COMPANIE')
  const empresas = await new Empresa().getWithParams({
    searchParams: urlParams,
  })
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={'/empresas'}>{t('TITLE')}</Link>
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={urlParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {empresas.body.total > 0 ? (
            <Tabela
              data={empresas.body.data}
              searchParams={searchParams}
              ocultar={['ID_EMPRESA', 'D_DATA']}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>{t('NO_DATA')}</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {empresas.body.total > 0 && (
            <Pagination total={empresas.body.total} />
          )}
        </footer>
      </section>
      <CreateEmpresa />
      {/* <Link href={'/empresas/editEmp/26262626'}>Modal</Link> */}
    </section>
  )
}
export default EmpresasPage
