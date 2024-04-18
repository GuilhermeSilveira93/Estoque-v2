import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

import { HomeProps } from '@/@types';
import { Produto } from '@/@types/api';
type TabelaProps = {
  data: Produto[],
  ocultar: string[],
  searchParams: HomeProps['searchParams'],
  tableHeader: ProdutoKeys[],
};
type ProdutoKeys = keyof Produto;
export const Tabela = ({ data, ocultar, tableHeader }: TabelaProps) => {
  const PascalCase = (texto: string) => {
    return texto.charAt(0).toUpperCase() + texto.substring(1).toLowerCase();
  };
  return (
    <Table className="text-center text-card-foreground">
      <TableHeader>
        <TableRow className="hover:bg-card">
          {tableHeader.map((item) => {
            let existe = false;
            for (let i = 0; i < ocultar.length; i++) {
              if (item === ocultar[i]) {
                existe = true;
              }
            }
            if (!existe) {
              return (
                <TableHead
                  className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground"
                  key={item}
                >
                  {PascalCase(item)}
                </TableHead>
              );
            }
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => {
          return (
            <TableRow key={item.ID_PRODUTO} className="border-card-foreground">
              {tableHeader.map((header) => {
                let existe = false;
                for (let i = 0; i < ocultar.length; i++) {
                  if (header === ocultar[i]) {
                    existe = true;
                  }
                }
                if (!existe) {
                  return <TableCell key={header}>{item[header]}</TableCell>;
                }
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
