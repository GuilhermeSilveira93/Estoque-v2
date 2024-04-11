import React from 'react'

import { Container } from '@/components/ui'

import { HomeProps } from '@/@types'
import { Produto } from '@/@types/api'

import { fetchTabela } from './fetchTabela'

const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  const estoque = produtos.reduce(
    (acc, produto) => {
      acc.total += produto.quantidade
      return acc
    },
    { total: 0 }
  )
  return (
    <Container>
      <header className="absolute w-full h-60 -mt-[118px] grid grid-flow-row grid-rows-2 gap-6 p-6 grid-cols-4 xl:grid-cols-3 xl:grid-rows-1">
        <section className="flex items-center justify-center p-4 border-4 max-xl:col-span-2 bg-colors-light-card dark:bg-colors-dark-card border-colors-light-terciaria dark:border-colors-dark-terciaria rounded-xl">
          <div>
            <p>Total:</p>
            <p>{estoque.total}</p>
          </div>
        </section>
        <section className="p-4 border-4 max-xl:col-span-2 bg-colors-light-card dark:bg-colors-dark-card border-colors-light-terciaria dark:border-colors-dark-terciaria rounded-xl">
          2
        </section>
        <section className="p-4 border-4 max-xl:row-start-2 max-xl:col-start-2 max-xl:col-span-2 bg-colors-light-card dark:bg-colors-dark-card border-colors-light-terciaria dark:border-colors-dark-terciaria rounded-xl">
          3
        </section>
      </header>
    </Container>
  )
}
export default DashBoard
