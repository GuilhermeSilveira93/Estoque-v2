import React from 'react'

import { Container } from '@/components/ui'

import { HomeProps } from '@/@types'
const DashBoard = async ({ searchParams }: HomeProps) => {
  const { ID, Search } = searchParams
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
