import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';
import { produce } from 'immer';

import {
  EnumActionSetEntrada,
  ReturnFunctionsTypes
} from './ReturnFunctionsTypes';

/*REDUCER RECEBE 2 PARAMETROS:
  1º O ESTADO ATUAL,
  2º A AÇÃO QUE FOI DISPARADA
    2.1º Type, o tipo de função que quer disparar: gravar, excluir, alterar...
    2.2º Payload, os dados que serão utilizados na função
  3º SetEntrada deve SEMPRE retornar o tipo de valor dele, no caso, o mesmo dque definimos para o estado.
  Isso já reduz muito os possiveis erros.
  4º Vá para RetrunFunctionsTypes
*/
export const SetEntrada = (
  state: FormEntradaProdutoSchemaType[],
  action: ReturnFunctionsTypes
): FormEntradaProdutoSchemaType[] => {
  switch (action.type) {
    case EnumActionSetEntrada.InserirItem:
      return produce(state, (rascunho) => {
        rascunho.unshift(action.payload);
      });
    case EnumActionSetEntrada.LimparEntrada:
      return [];
    case EnumActionSetEntrada.EditItemEntrada: {
      return produce(state, (rascunho) => {
        rascunho.forEach((produto) => {
          if (produto.ID_PRODUTO === action.payload.ID_PRODUTO) {
            produto.N_QUANTIDADE = action.payload.payload.N_QUANTIDADE;
            produto.N_VALOR = action.payload.payload.N_VALOR;
            produto.S_DETALHES = action.payload.payload.S_DETALHES;
            produto.S_DIMENSAO = action.payload.payload.S_DIMENSAO;
          }
        });
      });
    }
    case EnumActionSetEntrada.DeleteItemEntrada: {
      return produce(state, (rascunho) => {
        return rascunho.filter(
          (produto) => produto.ID_PRODUTO !== action.payload.ID_PRODUTO
        );
      });
    }
    default:
      break;
  }
  return state;
};
