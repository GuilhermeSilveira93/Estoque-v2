import CreateFornecedor from './components/createFornecedor'
import { Tabela } from './components/Tabela'
import Pagination from '@/components/pagination'
import { SearchData } from '@/components/search-data'

import { Fornecedor } from '@/@classes/Fornecedor'
import { RolesRequired } from '@/@types'
import { FiltersPage } from '@/@types/FiltersType'
import { userCanSeePage } from '@/@utils'

export type FornecedorPageProps = {
  searchParams: FiltersPage & {
    ID_FORNECEDOR: string
  }
}
const FornecedoresPage = async ({ searchParams }: FornecedorPageProps) => {
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR,
    ],
  })
  const fornecedores = (await new Fornecedor().getAll({ searchParams })).body
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Fornecedores
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
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
              <p>Não há dados</p>
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
