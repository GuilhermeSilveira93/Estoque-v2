'use client';
import React from 'react';

import {
  ScrollArea,
  ScrollBar,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';

import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada';

import { LinhaTableBody } from './LinhaTableBody';

export const Tabela = () => {
  const { infoTabela } = useProdutosEntrada();
  if (!infoTabela.length) return null;
  return (
    <ScrollArea className="max-h-120 whitespace-nowrap">
      <Table className="text-center text-card-foreground">
        <TableHeader className="sticky top-0 border-b-2 bg-card">
          <TableRow className="hover:bg-card ">
            <>
              <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                Editar
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                Produto
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                Quantidade
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                Valor
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                Detalhes
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                Dimensao
              </TableHead>
            </>
          </TableRow>
        </TableHeader>
        <TableBody>
          {infoTabela.map((produto, i) => (
            <LinhaTableBody
              key={`Produto${produto.ID_PRODUTO}${i}`}
              produto={produto}
            />
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
