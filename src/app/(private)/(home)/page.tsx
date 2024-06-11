import React from 'react';

import Pagination from './components/pagination';
import { SearchData } from './components/search-data';
import { Tabela } from './components/Tabela';

import { Produtos } from '@/@classes';
import { HomeProps } from '@/@types';
export const revalidate = 30;
const HomePage = async ({ searchParams }: HomeProps) => {
  const produtos = (await new Produtos().getTabela({ searchParams }))?.body;
  console.log(produtos);
  if (!produtos.data) return null;
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-non-null-asserted-optional-chain
  return (
    <section className="max-h-96 ">
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Produtos
      </h1>
      <section className="rounded-b-xl bg-card">
        <header>
          <SearchData Search={searchParams.Search} />
        </header>
        <div className="max-h-148 overflow-auto">
          {produtos.total > 0 ? (
            <Tabela
              data={produtos.data}
              searchParams={searchParams}
              ocultar={['ID_PRODUTO', 'S_ATIVO']}
            />
          ) : (
            <div className="flex h-32 items-center justify-center">
              <p>Não há produtos em estoque</p>
            </div>
          )}
        </div>
        <footer className="flex w-full">
          {produtos.total > 0 && <Pagination total={produtos.total} />}
        </footer>
      </section>
    </section>
  );
};
export default HomePage;
