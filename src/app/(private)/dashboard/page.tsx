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
  const anoAtual = produtos.anos.length - 1
  return (
    <header>
      <div className="mt-10 grid h-40 grid-flow-row grid-cols-4 space-x-1">
        <Card className="p-2">
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
        <Card>
          <CardHeader className="flex-row justify-between">
            <div>
              <CardTitle>+ {produtos.itensEstoque}</CardTitle>
              <CardDescription>Total em Estoque</CardDescription>
            </div>
            <ArrowUpRight size={28} strokeWidth={3} className="text-primary" />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle title="Create project"></CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle title="Create project"></CardTitle>
          </CardHeader>
        </Card>
      </div>
    </header>
  )
}
export default DashBoard
