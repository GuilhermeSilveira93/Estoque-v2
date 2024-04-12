import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui'

import { HomeProps } from '@/@types'
import { Produto } from '@/@types/api'
type TabelaProps = {
  data: Produto[],
  tableHeader: string[],
  ocultar: string[],
  searchParams: HomeProps['searchParams']
}
export const Tabela = ({
  data,
  tableHeader,
  searchParams,
  ocultar
}: TabelaProps) => {
  const { Page } = searchParams
  const limit = 8
  const dataResultPage = Page
    ? data.slice((Number(Page) - 1) * limit, Number(Page) * limit)
    : data.slice(0, limit)
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeader.map((item) => {
            let existe = false
            for (let i = 0; i < ocultar.length; i++) {
              if (item === ocultar[i]) {
                existe = true
              }
            }
            if (!existe) {
              return (
                <TableHead
                  className="text-center font-black text-xl text-blue12 dark:text-blue1"
                  key={item}
                >
                  {item}
                </TableHead>
              )
            }
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataResultPage.map((item) => {
          return (
            <TableRow
              key={item.ID_PRODUTO}
              className="cursor-pointer hover:bg-blue5 dark:hover:bg-gray-700"
            >
              {tableHeader.map((header) => {
                let existe = false
                for (let i = 0; i < ocultar.length; i++) {
                  if (header === ocultar[i]) {
                    existe = true
                  }
                }
                if (!existe) {
                  return <TableCell key={header}>{item[header]}</TableCell>
                }
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
