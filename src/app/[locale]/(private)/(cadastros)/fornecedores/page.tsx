import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import CreateFornecedor from './components/createFornecedor'
import { Tabela } from './components/Tabela'
import Pagination from '@/components/pagination'
import { SearchData } from '@/components/search-data'

import { Fornecedor } from '@/@classes/Fornecedor'
import { RolesRequired } from '@/@types'
import { FiltersPage } from '@/@types/FiltersType'
import { userCanSeePage } from '@/@utils'

export type FornecedorPageProps = {
  searchParams: Promise<
    FiltersPage & {
      ID_FORNECEDOR: string
    }
  >
}
const FornecedoresPage = async ({ searchParams }: FornecedorPageProps) => {
  const urlParams = await searchParams
  const t = await getTranslations('SUPPLIERS')
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR,
    ],
  })
  const fornecedores = (
    await new Fornecedor().getAllWithParams({ searchParams: urlParams })
  ).body
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={'/fornecedores'}>{t('TITLE')}</Link>
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={urlParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {fornecedores.total > 0 ? (
            <Tabela
              data={fornecedores.data}
              searchParams={searchParams}
              ocultar={['ID_FORNECEDOR']}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>{t('NO_DATA')}</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {fornecedores.total > 0 && <Pagination total={fornecedores.total} />}
        </footer>
      </section>
      <CreateFornecedor />
    </section>
  )
}
export default FornecedoresPage
