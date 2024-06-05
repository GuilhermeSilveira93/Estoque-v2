import { redirect } from 'next/navigation';
import React from 'react';

import Pagination from './components/pagination';
import { SearchData } from './components/search-data';
import { Tabela } from './components/Tabela';

import { Produtos } from '@/@classes';
import { HomeProps } from '@/@types';
import { ProdutoKeys } from '@/@types/api';
export const revalidate = 30;
const HomePage = async ({ searchParams }: HomeProps) => {
  const produtos = (await new Produtos().getTabela({searchParams})).body;
  if (produtos?.data?.length === 0) {
    redirect('/');
  }
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-non-null-asserted-optional-chain
  const tableHeader = Object.keys(produtos?.data[0]!) as ProdutoKeys[] ?? [];
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
          <Tabela
            data={produtos.data}
            tableHeader={tableHeader}
            searchParams={searchParams}
            ocultar={['ID_PRODUTO','S_ATIVO']}
          />
        </div>
        <footer className="flex w-full">
          <Pagination total={produtos.total} />
        </footer>
      </section>
    </section>
  );
};
export default HomePage;
