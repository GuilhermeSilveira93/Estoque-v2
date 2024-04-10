import React from 'react'

import { Container } from '@/components/ui'

import { HomeProps } from '@/@types'

import { fetchTabela } from './fetchTabela'

const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  const soma = produtos.reduce(
    (acc, produto) => {
      acc.total += produto.quantidade
      return acc
    },
    { total: 0 }
  )
  console.log(soma.total)
  return (
    <Container>
      <header className="flex flex-wrap row gap-2">
        <div className="p-2 border"></div>
        <div className="p-2 border"></div>
        <div className="p-2 border"></div>
      </header>
    </Container>
  )
}
export default DashBoard
