import { FormEntradaEditProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaEditProdutoSchema';
import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';

/*
  1º Criamos aqui um Enum, para sabermos certinho quais são as funções que teremos
  2º Usando o enum que criamos, temos que tipar o type e o payload que essa função terá.
    2.1º Type para o tipo de função, e payload para os dados que precisaremos para a função.
  Vá para ./ActionSetEntrada.ts
*/

export enum EnumActionSetEntrada {
  // eslint-disable-next-line no-unused-vars
  InserirItem = 'InserirItem',
  // eslint-disable-next-line no-unused-vars
  LimparEntrada = 'LimparEntrada',
  // eslint-disable-next-line no-unused-vars
  EditItemEntrada = 'EditItemEntrada',
  // eslint-disable-next-line no-unused-vars
  DeleteItemEntrada = 'DeleteItemEntrada'
}
export type ReturnInsertItem = {
  type: EnumActionSetEntrada.InserirItem,
  payload: FormEntradaProdutoSchemaType
};
export type ReturnLimparEntrada = {
  type: EnumActionSetEntrada.LimparEntrada,
  payload: null
};
export type ReturnEditItemEntrada = {
  type: EnumActionSetEntrada.EditItemEntrada,
  payload: { ID_PRODUTO: string, payload: FormEntradaEditProdutoSchemaType }
};
export type ReturnDeleteItemEntrada = {
  type: EnumActionSetEntrada.DeleteItemEntrada,
  payload: { ID_PRODUTO: string }
};
export type ReturnFunctionsTypes =
  | ReturnInsertItem
  | ReturnLimparEntrada
  | ReturnEditItemEntrada
  | ReturnDeleteItemEntrada;
