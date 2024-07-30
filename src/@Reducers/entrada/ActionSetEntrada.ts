import { FormEntradaEditProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaEditProdutoSchema';
import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';

import {
  EnumActionSetEntrada,
  ReturnFunctionsTypes
} from './ReturnFunctionsTypes';

/* 1º Importamos os Enums que criamos e a tipagem que une todos
   2º Para não passarmos na mão o objetos que os reducers usarão, exemplo: setEntrada({type..., payload...})
   vamos criar funções que retornam os objetos para nós.
   3º Então ficou assim, boa diversão.
*/

export const InserirItem = (
  payload: FormEntradaProdutoSchemaType
): ReturnFunctionsTypes => {
  return {
    type: EnumActionSetEntrada.InserirItem,
    payload
  };
};
export const LimparEntrada = (payload: null): ReturnFunctionsTypes => {
  return {
    type: EnumActionSetEntrada.LimparEntrada,
    payload
  };
};
export const AlterarItem = ({
  ID_PRODUTO,
  payload
}: {
  ID_PRODUTO: string,
  payload: FormEntradaEditProdutoSchemaType
}): ReturnFunctionsTypes => {
  return {
    type: EnumActionSetEntrada.EditItemEntrada,
    payload: { ID_PRODUTO, payload }
  };
};
export const RemoverItem = ({
  ID_PRODUTO
}: {
  ID_PRODUTO: string
}): ReturnFunctionsTypes => {
  return {
    type: EnumActionSetEntrada.DeleteItemEntrada,
    payload: { ID_PRODUTO }
  };
};
