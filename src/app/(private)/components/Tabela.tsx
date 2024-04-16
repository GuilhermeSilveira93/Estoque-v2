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
  tableHeader: string[],
  ocultar: string[],
  searchParams: HomeProps['searchParams'],
};
export const Tabela = ({ data, tableHeader, ocultar }: TabelaProps) => {
  return (
    <Table className="text-center">
      <TableHeader>
        <TableRow>
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
                  className="text-blue12 dark:text-blue1 text-center text-xl font-black"
                  key={item}
                >
                  {item}
                </TableHead>
              );
            }
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => {
          return (
            <TableRow key={item.ID_PRODUTO} className="dark:hover:bg-gray-700">
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
