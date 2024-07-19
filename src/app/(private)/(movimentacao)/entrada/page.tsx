import { FormEntradaProduto } from './components/formEntradaProduto';
import { Tabela } from './components/Tabela';

import { Produto } from '@/@classes';
import { RolesRequired } from '@/@types';
import { userCanSeePage } from '@/@utils';

import { ProdutosEntradaProvider } from './provider/produtosEntrada';
const EntradaPage = async () => {
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR
    ]
  });
  const produtos = (await new Produto().getAll()).body;
  return (
    <>
      <section className="rounded-md bg-card p-4  shadow-primary">
        <fieldset className="grid grid-flow-col grid-cols-2 gap-2 rounded-md border border-inherit p-2">
          <legend className="px-4">Entrada de Mercadoria</legend>
          <ProdutosEntradaProvider>
            <FormEntradaProduto produtos={produtos} />
            <Tabela />
          </ProdutosEntradaProvider>
        </fieldset>
      </section>
    </>
  );
};
export default EntradaPage;
