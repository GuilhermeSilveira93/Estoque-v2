import { FormEntradaProduto } from './components/formEntradaProduto';

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
  return (
    <>
      <section className="grid grid-flow-col grid-cols-2 gap-2 rounded-md bg-card p-4  shadow-primary">
        <ProdutosEntradaProvider>
          <FormEntradaProduto />
          <fieldset className="flex flex-1 rounded-md border border-inherit p-2">
            <legend className="px-4">Entrada de Mercadoria</legend>
          </fieldset>
        </ProdutosEntradaProvider>
      </section>
    </>
  );
};
export default EntradaPage;
