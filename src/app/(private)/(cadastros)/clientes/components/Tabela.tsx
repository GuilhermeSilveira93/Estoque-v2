import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

import { ClienteType, ClienteTypeKeys } from '@/@types/api/ReqCliente'
import { PascalCase } from '@/@utils'

import { ClientesPageProps } from '../page'
import EditCliente from './editCliente'

type TabelaProps = {
  data: ClienteType[]
  searchParams: ClientesPageProps['searchParams']
}
export const Tabela = async ({ data }: TabelaProps) => {
  const tableHeader = Object?.keys(
    data[0]?.data as ClienteType['data']
  ) as ClienteTypeKeys[]
  return (
    <>
      <Table className="text-center text-card-foreground">
        <TableHeader className="sticky top-0 border-b-2 bg-card">
          <TableRow className="hover:bg-card">
            {tableHeader.map((header, index) => {
              return (
                <TableHead
                  className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground"
                  key={header + index}
                >
                  {PascalCase(header)}
                </TableHead>
              )
            })}
            <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((cliente) => {
            return (
              <TableRow
                key={`${cliente.ID_CLIENTE}CLIENTE`}
                className="border-card-foreground"
              >
                {tableHeader.map((header) => {
                  return (
                    <TableCell key={cliente.ID_CLIENTE}>
                      {cliente.data[header as keyof typeof cliente.data]}
                    </TableCell>
                  )
                })}
                <TableCell
                  key={`${cliente.ID_CLIENTE}-actionsCliente`}
                  align="center"
                >
                  <EditCliente
                    key={`${cliente.ID_CLIENTE}-editCliente`}
                    cliente={cliente}
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}
