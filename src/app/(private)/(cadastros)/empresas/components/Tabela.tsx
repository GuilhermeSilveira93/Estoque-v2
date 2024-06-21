import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui';

import { EmpresaType, EmpresasKeys } from '@/@types/api';
import { PascalCase } from '@/@utils';

import { EmpresaPageProps } from '../page';
import EditEmpresa from './editEmpresa';

type TabelaProps = {
  data: EmpresaType[],
  ocultar: string[],
  searchParams: EmpresaPageProps['searchParams']
};
export const Tabela = async ({ data, ocultar }: TabelaProps) => {
  const tableHeader = Object.keys(data[0] as EmpresaType) as EmpresasKeys[];
  return (
    <>
      <Table className="text-center text-card-foreground">
        <TableHeader className="sticky top-0 border-b-2 bg-card">
          <TableRow className="hover:bg-card">
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
          {data.map((empresa) => {
            return (
              <TableRow
                key={`${empresa.ID_EMPRESA}Emp`}
                className="border-card-foreground"
              >
                {tableHeader.map((header, index) => {
                  if (!ocultar.includes(header)) {
                    return (
                      <TableCell
                        key={`${empresa.ID_EMPRESA}-${header + index}Emp`}
                      >
                        <>{empresa[header] !== undefined && empresa[header]}</>
                      </TableCell>
                    );
                  }
                  return null;
                })}
                <TableCell
                  key={`${empresa.ID_EMPRESA}-actionsEmp`}
                  align="center"
                >
                  <EditEmpresa
                    key={`${empresa.ID_EMPRESA}-editEmp`}
                    empresa={empresa}
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
