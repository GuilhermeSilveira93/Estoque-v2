import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

import { Tipo } from '@/@classes/Tipo'
import { ProdutosType, ProdutosKeys } from '@/@types/api'
import { PascalCase } from '@/@utils'

import { ProdutosPageProps } from '../page'
import EditProd from './editProd'

type TabelaProps = {
  data: ProdutosType[]
  ocultar: string[]
  searchParams: ProdutosPageProps['searchParams']
}
export const Tabela = async ({ data, ocultar }: TabelaProps) => {
  const tableHeader = Object.keys(data[0] as ProdutosType) as ProdutosKeys[]
  const tipos = (await new Tipo().getAll()).body
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
                    key={`${header} + ${index}Prod`}
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
          {data.map((produto) => {
            return (
              <TableRow
                key={`${produto.ID_PRODUTO}Prod`}
                className="border-card-foreground"
              >
                {tableHeader.map((header, index) => {
                  if (!ocultar.includes(header)) {
                    return (
                      <TableCell
                        key={`${produto.ID_PRODUTO}-${header + index}Prod`}
                      >
                        <>{produto[header] !== undefined && produto[header]}</>
                      </TableCell>
                    )
                  }
                  return null
                })}
                <TableCell
                  key={`${produto.ID_PRODUTO}-actionsProd`}
                  align="center"
                >
                  <EditProd
                    key={`${produto.ID_PRODUTO}-editProd`}
                    produto={produto}
                    tipos={tipos.data}
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
