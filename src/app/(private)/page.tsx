import React from 'react'

import HeaderHome from './components/Header'
import { SearchData } from './components/search-data'
import { Tabela } from './components/Tabela'

import { HomeProps } from '@/@types'
import { fetchTabela } from '@/@utils'


const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  // eslint-disable-next-line prettier/prettier
  const cabecalhos = produtos.length > 0 ? Object.keys(produtos[0]!) : ['']
  return (
    <>
      <HeaderHome produtos={produtos} />
      <section>
        <div className='bg-colors-light-card  dark:bg-colors-dark-card rounded-b-xl overflow-hidden'>
        <SearchData Search={searchParams.Search} />
          <Tabela
              data={produtos}
							tableHeader={cabecalhos}
							searchParams={searchParams}
							ocultar={["ID_PRODUTO"]}
           />
        
        </div>
      </section>
    </>
  )
}
export default DashBoard
