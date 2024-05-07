import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';

import { HomeProps } from '@/@types';
import { Produto } from '@/@types/api';
import { PascalCase } from '@/@utils';

import EditProd from './editProd';

type TabelaProps = {
  data: Produto[],
  ocultar: string[],
  searchParams: HomeProps['searchParams'],
  tableHeader: ProdutoKeys[]
};
type ProdutoKeys = keyof Produto;
export const Tabela = ({ data, ocultar, tableHeader }: TabelaProps) => {
  return (
    <Table className="text-center text-card-foreground">
      <TableHeader className="sticky top-0 border-b-2 bg-card">
        <TableRow className="hover:bg-card ">
          {tableHeader.map((header) => {
            let existe = false;
            for (let i = 0; i < ocultar.length; i++) {
              if (header === ocultar[i]) {
                existe = true;
              }
            }
            if (!existe) {
              return (
                <TableHead
                  className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground"
                  key={header}
                >
                  {PascalCase(header)}
                </TableHead>
              );
            }
          })}
          <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
            Ações
          </TableHead>
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
                  return (
                    <>
                      <TableCell key={`${item[header]}${item.quantidade}`}>
                        {item[header]}
                      </TableCell>
                    </>
                  );
                }
                return null;
              })}
              <TableCell align="center">
                <EditProd produto={item} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
