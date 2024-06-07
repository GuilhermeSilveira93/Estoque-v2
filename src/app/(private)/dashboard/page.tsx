import {
  Card,
  CardTitle,
  CardContent,
  CardHeader,
  CardDescription
} from '@/components/ui/card';

import { Produtos } from '@/@classes';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

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
              <CardDescription className="flex flex-row items-center">
                Total Entrada
                <ArrowUpRight
                  size={28}
                  strokeWidth={3}
                  className="text-primary"
                />
              </CardDescription>
            </CardHeader>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardHeader>
              <CardTitle>- {produtos.saida}</CardTitle>
              <CardDescription className="flex flex-row items-center">
                Total Saida
                <ArrowDownLeft
                  size={28}
                  strokeWidth={3}
                  className="text-destructive"
                />
              </CardDescription>
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
