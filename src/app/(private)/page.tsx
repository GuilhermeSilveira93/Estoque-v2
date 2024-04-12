import React from 'react'

import HeaderHome from './components/Header'
import { SearchData, Tabela } from '@/components/Tabela'
import { Container, ScrollArea } from '@/components/ui'

import { HomeProps } from '@/@types'
import { fetchTabela } from '@/@utils'

const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  // eslint-disable-next-line prettier/prettier
  const cabecalhos = produtos.length > 0 ? Object.keys(produtos[0]!) : ['']
  return (
    <Container>
      <HeaderHome produtos={produtos} />
      <section className="px-4">
        <div className='bg-colors-light-card  dark:bg-colors-dark-card rounded-b-xl overflow-hidden'>
        <SearchData Search={searchParams.Search} />
        <ScrollArea className='m-auto w-full h-full text-center'>
          <Tabela
              data={produtos}
							tableHeader={cabecalhos}
							searchParams={searchParams}
							ocultar={["ID_PRODUTO"]}
           />
        </ScrollArea>
        </div>
        
      </section>
    </Container>
  )
}
export default DashBoard
