import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from '@/components/ui/card'

import { Produto } from '@/@classes'
import { ArrowUpRight } from 'lucide-react'

const DashBoard = async () => {
  const produtos = (await new Produto().getMovimentacao()).body
  const total = (await new Produto().getAll()).body.total
  const anoAtual = produtos.anos.length - 1
  return (
    <header>
      <div className="mt-10 grid h-40 grid-flow-row grid-cols-12 space-x-1">
        <Card className="p-2 col-span-4">
          <CardHeader className="flex-row justify-between">
            <div>
              <CardTitle>+ {produtos.anos[anoAtual]?.entrada}</CardTitle>
              <CardDescription>
                Entradas em: {produtos.anos[anoAtual]?.ano}
              </CardDescription>
            </div>
            <ArrowUpRight size={28} strokeWidth={3} className="text-primary" />
          </CardHeader>
        </Card>
        <Card className="p-2 col-span-4">
          <CardHeader className="flex-row justify-between">
            <div>
              <CardTitle>+ {produtos.itensEstoque}</CardTitle>
              <CardDescription>Total em Estoque</CardDescription>
            </div>
            <ArrowUpRight size={28} strokeWidth={3} className="text-primary" />
          </CardHeader>
        </Card>
        <Card className="p-2 col-span-4">
          <CardHeader className="flex-row justify-between">
            <div>
              <CardTitle>Total de produtos</CardTitle>
              <CardTitle>{total}</CardTitle>
            </div>
            <ArrowUpRight size={28} strokeWidth={3} className="text-primary" />
          </CardHeader>
        </Card>
      </div>
    </header>
  )
}
export default DashBoard
