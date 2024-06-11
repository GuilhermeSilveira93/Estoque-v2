import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';

import { UserProps } from '@/@types';
import { Usuario, UsuarioKeys } from '@/@types/api';
import { PascalCase } from '@/@utils';

import EditUser from './editUser';

type TabelaProps = {
  data: Usuario[],
  ocultar: string[],
  searchParams: UserProps['searchParams']
};
export const Tabela = ({ data, ocultar }: TabelaProps) => {
  const tableHeader = Object.keys(data[0] as Usuario) as UsuarioKeys[];
  return (
    <Table className="text-center text-card-foreground">
      <TableHeader className="sticky top-0 border-b-2 bg-card">
        <TableRow className="hover:bg-card ">
          {tableHeader.map((header, index) => {
            if (!ocultar.includes(header)) {
              return (
                <TableHead
                  className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground"
                  key={header + index}
                >
                  {PascalCase(header)}
                </TableHead>
              );
            }
            return null;
          })}
          <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
            Ações
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.ID_USUARIO} className="border-card-foreground">
            {tableHeader.map((header, index) => {
              if (!ocultar.includes(header)) {
                return (
                  <TableCell key={`${item.ID_USUARIO}-${header + index}`}>
                    {item[header]}
                  </TableCell>
                );
              }
              return null;
            })}
            <TableCell key={`${item.ID_USUARIO}-actions`} align="center">
              <EditUser key={`${item.ID_USUARIO}-editProd`} usuario={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
