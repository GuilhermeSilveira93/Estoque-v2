import Enviar from './components/enviar';
import { FormEntradaProduto } from './components/formEntradaProduto';
import { Tabela } from './components/Tabela';

import { Produto } from '@/@classes';
import { Fornecedor } from '@/@classes/Fornecedor';
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
  const fornecedores = (await new Fornecedor().getAll()).body;
  return (
    <>
      <section className="rounded-md bg-card p-4  shadow-primary">
        <fieldset className="grid grid-flow-col grid-cols-2 gap-2 rounded-md border border-inherit p-2">
          <legend className="px-4">Movimentação de Mercadoria</legend>
          <ProdutosEntradaProvider produtos={produtos}>
            <FormEntradaProduto produtos={produtos} />
            <div className="flex flex-1 flex-col">
              <Tabela />
              <div>
                <Enviar fornecedores={fornecedores.data} />
              </div>
            </div>
          </ProdutosEntradaProvider>
        </fieldset>
      </section>
    </>
  );
};
export default EntradaPage;
