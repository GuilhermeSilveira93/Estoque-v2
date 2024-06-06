import { Card, CardTitle, CardContent, CardHeader } from '@/components/ui/card';

import { Produtos } from '@/@classes';

const DashBoard = async ({ searchParams }: any) => {
  const produtos = (await new Produtos().getMovimentacao()).body;
  return (
    <header>
      <div className="mt-10 grid h-40 grid-flow-row grid-cols-4 space-x-1">
        <Card className="p-2">
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardHeader>
              <CardTitle>+ {produtos.entrada}</CardTitle>
              <h2>Total Entrada</h2>
            </CardHeader>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardHeader>
              <CardTitle>- {produtos.saida}</CardTitle>
              <h2>Total saida</h2>
            </CardHeader>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle title="Create project"></CardTitle>
          </CardHeader>
        </Card>
      </div>
    </header>
  );
};
export default DashBoard;
