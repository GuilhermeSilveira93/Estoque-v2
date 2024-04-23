/* eslint-disable prettier/prettier */
import React from 'react';

import Pagination from './components/pagination';
import { SearchData } from './components/search-data';
import { Tabela } from './components/Tabela';

import { HomeProps } from '@/@types';
import { ProdutoKeys } from '@/@types/api';
import { fetchTabela } from '@/@utils';
export const revalidate = 30;
const DashBoard = async ({ searchParams }: HomeProps) => {
  const produtos = await fetchTabela({ searchParams });
  // eslint-disable-next-line prettier/prettier
  const tableHeader = Object.keys(produtos.data[0]!) as ProdutoKeys[];
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        Produtos
      </h1>
      <section>
        <div className="overflow-hidden rounded-b-xl bg-card">
          <SearchData Search={searchParams.Search} />
          <Tabela
            data={produtos.data}
            tableHeader={tableHeader}
            searchParams={searchParams}
            ocultar={['ID_PRODUTO']}
          />
        </div>
      </section>
      <Pagination total={produtos.total} />
    </>
  );
};
export default DashBoard;
