import React, { useMemo } from 'react'

import { Produto } from '@/@types/api'

const HeaderHome = ({ produtos }: { produtos: Produto[] }) => {
  const estoque = useMemo(() => {
    return produtos.reduce(
      (acc, produto) => {
        acc.total += produto.quantidade
        return acc
      },
      { total: 0 }
    )
  }, [produtos])
  return (
    <header className="w-full h-40 grid grid-flow-row grid-rows-2 gap-10 grid-cols-4 xl:grid-cols-3 xl:grid-rows-1 mb-4">
      <section className="p-4 border-4 max-xl:col-span-2 bg-colors-light-card dark:bg-colors-dark-card border-colors-light-primaria dark:border-colors-dark-primaria rounded-xl shadow">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h1 className="tracking-tight font-medium">Total em estoque</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{estoque.total}</h1>
        </div>
      </section>
      <section className="p-4 border-4 max-xl:col-span-2 bg-colors-light-card dark:bg-colors-dark-card border-colors-light-primaria dark:border-colors-dark-primaria rounded-xl shadow"></section>
      <section className="p-4 border-4 max-xl:col-span-2 bg-colors-light-card dark:bg-colors-dark-card border-colors-light-primaria dark:border-colors-dark-primaria rounded-xl shadow">
        3
      </section>
    </header>
  )
}
export default HeaderHome
