import React, { useMemo } from 'react';

import { Produto } from '@/@types/api';

const HeaderHome = ({ produtos }: { produtos: Produto[] }) => {
  const estoque = useMemo(() => {
    return produtos.reduce(
      (acc, produto) => {
        acc.total += produto.quantidade;
        return acc;
      },
      { total: 0 },
    );
  }, [produtos]);
  return (
    <header className="mb-4 grid h-40 w-full grid-flow-row grid-cols-4 grid-rows-2 gap-10 xl:grid-cols-3 xl:grid-rows-1">
      <section className="rounded-xl border-4 border-colors-light-primaria bg-colors-light-card p-4 shadow dark:border-colors-dark-primaria dark:bg-colors-dark-card max-xl:col-span-2">
        <div className="flex flex-row items-center justify-between space-y-0 pb-2">
          <h1 className="font-medium tracking-tight">Total em estoque</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{estoque.total}</h1>
        </div>
      </section>
      <section className="rounded-xl border-4 border-colors-light-primaria bg-colors-light-card p-4 shadow dark:border-colors-dark-primaria dark:bg-colors-dark-card max-xl:col-span-2"></section>
      <section className="rounded-xl border-4 border-colors-light-primaria bg-colors-light-card p-4 shadow dark:border-colors-dark-primaria dark:bg-colors-dark-card max-xl:col-span-2">
        3
      </section>
    </header>
  );
};
export default HeaderHome;
