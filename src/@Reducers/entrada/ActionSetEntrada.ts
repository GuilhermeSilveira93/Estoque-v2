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
