import { Card, CardTitle, CardContent } from '@/components/ui/card';

import { Produtos } from '@/@classes';

const DashBoard = async ({ searchParams }: any) => {
  const produtos = await new Produtos().getMovimentacao();
  const dados = produtos.body.reduce(
    (acc, data) => {
      const date = new Date(data.D_DATA_INICIO);
      const mes: string = new Intl.DateTimeFormat('pt-BR', {
        month: 'long'
      }).format(date);
      if (!acc.meses[mes]) {
        acc.meses[mes] = { entrada: 0, saida: 0 };
      }
      if (data.ID_FORNECEDOR) {
        data.ST_PRODUTO_LOTE.forEach((produtoLote) => {
          acc.entrada += produtoLote.N_QUANTIDADE;
          acc.meses[mes] = acc.meses[mes] || { entrada: 0, saida: 0 };
          acc.meses[mes].entrada += produtoLote.N_QUANTIDADE;
        });
      } else {
        data.ST_PRODUTO_LOTE.forEach((produtoLote) => {
          acc.saida += produtoLote.N_QUANTIDADE;
          acc.meses[mes].saida += produtoLote.N_QUANTIDADE;
        });
      }
      return acc;
    },
    {
      entrada: 0,
      saida: 0,
      meses: { janeiro: { entrada: 0, saida: 0 } } as {
        [key: string]: { entrada: number, saida: number }
      }
    }
  );
  console.log(dados);
  return (
    <header>
      <div className="mt-10 grid h-40 grid-flow-row grid-cols-4 space-x-1">
        <Card>
          <CardTitle title="Create project">Movimentações Mes a mes</CardTitle>
          <CardContent></CardContent>
        </Card>
        <Card>
          <CardTitle title="Create project">Total Entrada</CardTitle>
          <CardContent>+ {dados.entrada}</CardContent>
        </Card>
        <Card>
          <CardTitle title="Create project">Total saida</CardTitle>
          <CardContent>- {dados.saida}</CardContent>
        </Card>
        <Card>
          <CardTitle title="Create project"></CardTitle>
          <CardContent>
            <pre>{JSON.stringify(dados.meses)}</pre>
          </CardContent>
        </Card>
      </div>
    </header>
  );
};
export default DashBoard;
