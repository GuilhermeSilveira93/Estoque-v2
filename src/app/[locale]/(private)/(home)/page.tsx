import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import React from 'react'

import { Tabela } from './components/Tabela'
import Pagination from '@/components/pagination'
import { SearchData } from '@/components/search-data'
import { Container } from '@/components/ui'

import { Produto } from '@/@classes'
import { FiltersPage } from '@/@types/FiltersType'
export type HomePageProps = {
  searchParams: FiltersPage & {
    ID_PRODUTO: string
  }
}
const HomePage = async ({ searchParams }: HomePageProps) => {
  const produtos = (await new Produto().getTabela({ searchParams }))?.body
  const t = await getTranslations('HOME')
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={{ pathname: '/' }}>{t('TITLE')}</Link>
      </h1>
      <Container>
        <section className="rounded-b-xl bg-card">
          <header>
            <SearchData Search={searchParams.Search} />
          </header>
          <div className="max-h-132 overflow-auto">
            {produtos.total > 0 ? (
              <Tabela
                data={produtos.data}
                ocultar={['ID_PRODUTO', 'S_ATIVO']}
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
      </Container>
    </>
  )
}
export default HomePage
