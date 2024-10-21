import { useTranslations } from 'next-intl'
import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

import { TabelaType, TabelaTypeKeys } from '@/@types/api'

type TabelaProps = {
  data: TabelaType[]
  ocultar: string[]
}
export const Tabela = ({ data, ocultar }: TabelaProps) => {
  const tableHeader = Object.keys(data[0] as TabelaType) as TabelaTypeKeys[]
  const t = useTranslations('HOME')
  return (
    <Table className="text-center text-card-foreground">
      <TableHeader className="sticky top-0 border-b-2 bg-card">
        <TableRow className="hover:bg-card ">
          <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
            {t('PRODUTO')}
          </TableHead>
          <TableHead className="border-b-0 border-card-foreground text-center text-3xl font-black text-card-foreground">
            {t('QUANTIDADE')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.ID_PRODUTO} className="border-card-foreground">
            {tableHeader.map((header, index) => {
              if (!ocultar.includes(header)) {
                return (
                  <TableCell key={`${item.ID_PRODUTO}-${header + index}`}>
                    {item[header]}
                  </TableCell>
                )
              }
              return null
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
