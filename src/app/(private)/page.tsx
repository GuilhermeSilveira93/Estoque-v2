import React from 'react'

import HeaderHome from './components/Header'
import Pagination from './components/pagination'
import { SearchData } from './components/search-data'
import { Tabela } from './components/Tabela'

import { HomeProps } from '@/@types'
import { fetchTabela } from '@/@utils'


const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  // eslint-disable-next-line prettier/prettier
  const cabecalhos = produtos.data.length > 0 ? Object.keys(produtos.data[0]!) : ['']
  return (
    <>
      <h1>Produtos</h1>
      <section>
        <div className='bg-colors-light-card  dark:bg-colors-dark-card rounded-b-xl overflow-hidden'>
        <SearchData Search={searchParams.Search} />
          <Tabela
              data={produtos.data}
							tableHeader={cabecalhos}
							searchParams={searchParams}
							ocultar={[""]}
           />
        </div>
      </section>
        <Pagination total={produtos.total}/>
    </>
  )
}
export default DashBoard
