import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';

import { Grupos } from '@/@classes/Grupos';
import { UserProps } from '@/@types';
import { Usuario, UsuarioKeys } from '@/@types/api';
import { PascalCase, getUserCurrent } from '@/@utils';

import EditUser from './editUser';

type TabelaProps = {
  data: Usuario[],
  ocultar: string[],
  searchParams: UserProps['searchParams']
};
export const Tabela = async ({ data, ocultar }: TabelaProps) => {
  const userNivel = (await getUserCurrent()).ST_GRUPO.N_NIVEL;
  const tableHeader = Object.keys(data[0] as Usuario) as UsuarioKeys[];
  const grupos = (await new Grupos().getAll()).body;
  return (
    <>
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
          {data.map((usuario) => {
            if (usuario.ST_GRUPO.N_NIVEL < userNivel) {
              return null;
            }
            return (
              <TableRow
                key={usuario.ID_USUARIO}
                className="border-card-foreground"
              >
                {tableHeader.map((header, index) => {
                  if (!ocultar.includes(header) || !usuario.ST_GRUPO.N_NIVEL) {
                    return (
                      <TableCell
                        key={`${usuario.ID_USUARIO}-${header + index}`}
                      >
                        {usuario[header] !== undefined && usuario[header]}
                      </TableCell>
                    );
                  }
                  return null;
                })}
                <TableCell key={`${usuario.ID_USUARIO}-actions`} align="center">
                  <EditUser
                    key={`${usuario.ID_USUARIO}-editProd`}
                    usuario={usuario}
                    grupos={grupos.data}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};