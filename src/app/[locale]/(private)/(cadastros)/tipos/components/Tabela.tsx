import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

import { TiposType, TiposTypeKeys } from '@/@types/api'
import { PascalCase } from '@/@utils'

import { TiposPageProps } from '../page'
import EditTipo from './editTipo'

type TabelaProps = {
  data: TiposType[]
  ocultar: string[]
  searchParams: TiposPageProps['searchParams']
}
export const Tabela = async ({ data, ocultar }: TabelaProps) => {
  const tableHeader = Object.keys(data[0] as TiposType) as TiposTypeKeys[]
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
                )
              }
              return null
            })}
            <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((tipo) => {
            return (
              <TableRow
                key={`${tipo.ID_TIPO}TIPO`}
                className="border-card-foreground"
              >
                {tableHeader.map((header, index) => {
                  if (!ocultar.includes(header)) {
                    return (
                      <TableCell key={`${tipo.ID_TIPO}-${header + index}Tipo`}>
                        {tipo[header] !== undefined && tipo[header]}
                      </TableCell>
                    )
                  }
                  return null
                })}
                <TableCell key={`${tipo.ID_TIPO}-actionsTipo`} align="center">
                  <EditTipo key={`${tipo.ID_TIPO}-editTipo`} tipo={tipo} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
