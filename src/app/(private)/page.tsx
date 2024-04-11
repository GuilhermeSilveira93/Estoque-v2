import React from 'react'

import { Container } from '@/components/ui'

import { HomeProps } from '@/@types'
import { Produto } from '@/@types/api'

import { fetchTabela } from './fetchTabela'

const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams })
  return (
    <Container>
      <header className="absolute w-full h-60 lg:-mt-32 -mt-[118px] grid grid-flow-row gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-4 border-4 border-colors-light-terciaria dark:border-colors-dark-terciaria rounded-xl"></div>
        <div className="p-4 border-4 border-colors-light-terciaria dark:border-colors-dark-terciaria rounded-xl"></div>
        <div className="p-4 border-4 border-colors-light-terciaria dark:border-colors-dark-terciaria rounded-xl"></div>
      </header>
    </Container>
  )
}
export default DashBoard
