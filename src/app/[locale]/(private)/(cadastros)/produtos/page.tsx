import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import { Tabela } from '../produtos/components/Tabela'
import CreateProd from './components/createProd'
import Pagination from '@/components/pagination'
import { SearchData } from '@/components/search-data'

import { Produto } from '@/@classes/Produto'
import { RolesRequired } from '@/@types'
import { FiltersPage } from '@/@types/FiltersType'
import { userCanSeePage } from '@/@utils'

export type ProdutosPageProps = {
  searchParams: Promise<
    FiltersPage & {
      ID_PRODUTO: string
    }
  >
}
const ProdutosPage = async ({ searchParams }: ProdutosPageProps) => {
  const urlParams = await searchParams
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR,
    ],
  })
  const t = await getTranslations('PRODUCT')
  const produtos = (await new Produto().getAllWithParams(urlParams)).body
  return (
    <section className="w-full">
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={{ pathname: '/produtos' }}>{t('TITLE')}</Link>
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={urlParams.Search} />
        </header>
        <div className="max-h-132 overflow-auto">
          {produtos.total > 0 ? (
            <Tabela
              name={t('TABLE.S_NOME')}
              actions={t('TABLE.ACTIONS')}
              data={produtos.data}
              searchParams={searchParams}
              ocultar={[
                'ID_PRODUTO',
                'ID_TIPO',
                'N_SERIAL',
                'ST_TIPO',
                'S_ATIVO',
              ]}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>{t('NO_DATA')}</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {produtos.total > 0 && <Pagination total={produtos.total} />}
        </footer>
      </section>
      <CreateProd />
    </section>
  )
}
export default ProdutosPage
