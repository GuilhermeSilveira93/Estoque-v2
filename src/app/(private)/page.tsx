import React from 'react'

import { Container } from '@/components/ui'

import { HomeProps } from '@/@types'
const DashBoard = async ({ searchParams }: HomeProps) => {
  return (
    <Container>
      <h1 className="text-blue-600 dark:text-red-600">dash</h1>
    </Container>
  )
}
export default DashBoard
