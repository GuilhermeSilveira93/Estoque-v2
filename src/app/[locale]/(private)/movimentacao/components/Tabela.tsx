'use client'
import { useTranslations } from 'next-intl'
import React from 'react'

import {
  ScrollArea,
  ScrollBar,
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada'

import { LinhaTableBody } from './LinhaTableBody'

export const Tabela = () => {
  const { infoTabela } = useProdutosEntrada()
  const t = useTranslations('MOVEMENT')
  if (!infoTabela?.length) return null
  return (
    <ScrollArea className="max-h-120 whitespace-nowrap">
      <Table className="text-center text-card-foreground">
        <TableHeader className="sticky top-0 border-0">
          <TableRow>
            <>
              <TableHead className="border-b-0 border-card-foreground text-center text-base font-black text-card-foreground">
                {t('EDIT')}
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-base font-black text-card-foreground">
                {t('PRODUCT')}
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-base font-black text-card-foreground">
                {t('AMOUNT')}
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-base font-black text-card-foreground">
                {t('VALUE')}
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-base font-black text-card-foreground">
                {t('DETAILS')}
              </TableHead>
              <TableHead className="border-b-0 border-card-foreground text-center text-base font-black text-card-foreground">
                {t('DIMENSIONS')}
              </TableHead>
            </>
          </TableRow>
        </TableHeader>
        <TableBody>
          {infoTabela?.map((produto, i) => (
            <LinhaTableBody
              key={`Produto${produto.ID_PRODUTO}${i}`}
              produto={produto}
            />
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
