import { getTranslations } from 'next-intl/server'
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

import { ClientesPageProps } from '../page'
import EditCliente from './editCliente'

type TabelaProps = {
  data: ClienteType[]
  searchParams: ClientesPageProps['searchParams']
}
export const Tabela = async ({ data }: TabelaProps) => {
  const t = await getTranslations('CUSTOMERS.TABLE')
  const tableHeader = Object?.keys(
    data[0]?.data as ClienteType['data']
  ) as ClienteTypeKeys[]
  return (
    <>
      <Table className="text-center text-card-foreground">
        <TableHeader className="sticky top-0 border-b-2 bg-card">
          <TableRow className="hover:bg-card">
            <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
              {t('S_NOME')}
            </TableHead>
            <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
              {t('S_ATIVO')}
            </TableHead>
            <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
              {t('COMPANIE')}
            </TableHead>
            <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
              {t('ACTIONS')}
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
