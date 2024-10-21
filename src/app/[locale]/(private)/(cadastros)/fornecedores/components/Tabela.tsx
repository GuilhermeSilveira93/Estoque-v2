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

import { FornecedorKeys, FornecedorType } from '@/@types/api'

import { FornecedorPageProps } from '../page'
import EditFornecedor from './editFornecedor'

type TabelaProps = {
  data: FornecedorType[]
  ocultar: string[]
  searchParams: FornecedorPageProps['searchParams']
}
export const Tabela = async ({ data, ocultar }: TabelaProps) => {
  const t = await getTranslations('SUPPLIERS.TABLE')
  const tableHeader = Object.keys(data[0] as FornecedorType) as FornecedorKeys[]
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
              {t('ACTIONS')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((fornecedor) => {
            return (
              <TableRow
                key={fornecedor.ID_FORNECEDOR}
                className="border-card-foreground"
              >
                {tableHeader.map((header, index) => {
                  if (!ocultar.includes(header)) {
                    return (
                      <TableCell
                        key={`${fornecedor.ID_FORNECEDOR}-${header + index}Forne`}
                      >
                        {fornecedor[header] !== undefined && fornecedor[header]}
                      </TableCell>
                    )
                  }
                  return null
                })}
                <TableCell
                  key={`${fornecedor.ID_FORNECEDOR}-actionsEditForn`}
                  align="center"
                >
                  <EditFornecedor
                    key={`${fornecedor.ID_FORNECEDOR}-editForn`}
                    fornecedor={fornecedor}
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
