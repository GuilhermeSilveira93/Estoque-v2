import React from 'react'

import HeaderHome from './components/Header'
import { SearchData } from '@/components/Tabela'
import { Container, ScrollArea } from '@/components/ui'

import { HomeProps } from '@/@types'
import { fetchTabela } from '@/@utils'

const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  const cabecalhos = Object.keys(produtos[0]!)
  return (
    <Container>
      <HeaderHome produtos={produtos} />
      <section className="px-4">
        <SearchData Search={searchParams.Search} />
        <ScrollArea className="m-auto p-2 w-full h-full text-center border"></ScrollArea>
      </section>
    </Container>
  )
}
export default DashBoard
