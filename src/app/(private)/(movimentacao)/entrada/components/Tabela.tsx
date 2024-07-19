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

import { useProdutosEntrada } from '@/hooks/movimentacao/useProdutosEntrada';

export const Tabela = () => {
  const { entrada } = useProdutosEntrada();
  return (
    <ScrollArea className="max-h-120 whitespace-nowrap">
      <Table className="text-center text-card-foreground">
        <TableHeader className="sticky top-0 border-b-2 bg-card">
          <TableRow className="hover:bg-card ">
            {entrada.length > 0 && (
              <>
                <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                  Produto
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
                <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
                  Quantidade
                </TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {entrada.map((produto, i) => (
            <TableRow
              key={`Produto${produto.ID_PRODUTO}${i}`}
              className="border-card-foreground"
            >
              <TableCell>{produto.ID_PRODUTO}</TableCell>
              <TableCell>{produto.N_VALOR}</TableCell>
              <TableCell>{produto.S_DETALHES}</TableCell>
              <TableCell>{produto.S_DIMENSAO}</TableCell>
              <TableCell>{produto.N_QUANTIDADE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
