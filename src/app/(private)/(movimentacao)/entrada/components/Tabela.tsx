'use client';
import React from 'react';

import {
  ScrollArea,
  ScrollBar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';

import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada';

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
            <TableRow
              key={`Produto${produto.ID_PRODUTO}${i}`}
              className="border-card-foreground"
            >
              <TableCell>{produto.S_NOME}</TableCell>
              <TableCell>{produto.N_QUANTIDADE}</TableCell>
              <TableCell>{produto.N_VALOR}</TableCell>
              <TableCell>{produto.S_DETALHES}</TableCell>
              <TableCell>{produto.S_DIMENSAO}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
