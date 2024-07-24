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
  CancelarEntrada = 'CancelarEntrada'
}
export type ReturnInsertItem = {
  type: EnumActionSetEntrada.InserirItem,
  payload: FormEntradaProdutoSchemaType
};
export type ReturnCancelarEntrada = {
  type: EnumActionSetEntrada.CancelarEntrada,
  payload: null
};
export type ReturnFunctionsTypes = ReturnInsertItem | ReturnCancelarEntrada;
