import React from 'react'

import { Container } from '@/components/ui'

import { HomeProps } from '@/@types'

import { fetchTabela } from './fetchTabela'

const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  const produtos2 = [
    {
      ID_PRODUTO: 42,
      produto: 'CAIXA AMPLIFICADOR DIVISOR COM PINO (AS0001-F)',
      quantidade: 43
    },
    {
      ID_PRODUTO: 40,
      produto: 'CAIXA AMPLIFICADOR DIVISOR G2',
      quantidade: 69
    }
  ]
  const hum = produtos2.reduce(
    (acc, produto) => {
      acc.total += produto.quantidade
      console.log(produto)
      return acc
    },
    { total: 0 }
  )
  console.log(hum)
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
