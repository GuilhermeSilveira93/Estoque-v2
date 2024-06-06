import { Card, CardTitle, CardContent, CardHeader } from '@/components/ui/card';

import { Produtos } from '@/@classes';

import { TesteGraph } from './teste';

const DashBoard = async ({ searchParams }: any) => {
  const produtos = (await new Produtos().getMovimentacao()).body;
  return (
    <header>
      <div className="mt-10 grid h-40 grid-flow-row grid-cols-4 space-x-1">
        <Card className="p-2">
          <CardTitle title="Create project">Movimentações Mes a mes</CardTitle>
          <CardContent>
            <TesteGraph produtos={produtos} />
          </CardContent>
        </Card>
        <Card>
          <CardTitle title="Create project">Total Entrada</CardTitle>
          <CardContent>+ {produtos.entrada}</CardContent>
        </Card>
        <Card>
          <CardTitle title="Create project">Total saida</CardTitle>
          <CardContent>- {produtos.saida}</CardContent>
        </Card>
        <Card>
          <CardTitle title="Create project"></CardTitle>
        </Card>
      </div>
    </header>
  );
};
export default DashBoard;
