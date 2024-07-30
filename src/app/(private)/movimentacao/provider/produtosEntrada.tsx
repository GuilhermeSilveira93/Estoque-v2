'use client';
import { Dispatch, useReducer } from 'react';

import { ReturnFunctionsTypes } from '@/@Reducers/entrada/ReturnFunctionsTypes';
import { SetEntrada } from '@/@Reducers/entrada/SetEntrada';
import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';
import { ProdutosType } from '@/@types/api';
import { createContext } from 'use-context-selector';
interface ProdutosEntradaContextValues {
  infoTabela: {
    ID_PRODUTO: string,
    N_QUANTIDADE: number,
    S_DIMENSAO?: string | undefined,
    S_DETALHES?: string | undefined,
    N_VALOR?: number | undefined,
    S_NOME: string
  }[];
  setEntrada: Dispatch<ReturnFunctionsTypes>;
  entrada: FormEntradaProdutoSchemaType[];
}
export const ProdutosEntradaContext = createContext(
  {} as ProdutosEntradaContextValues
);
export type InfoTabela = {
  N_QUANTIDADE: number,
  ID_PRODUTO: string,
  N_VALOR?: number | undefined,
  S_DETALHES?: string | undefined,
  S_DIMENSAO?: string | undefined,
  S_NOME: string
};
export const ProdutosEntradaProvider = ({
  produtos,
  children
}: {
  produtos: { data: ProdutosType[], total: number },
  children: React.ReactNode
}) => {
  /*Criar Reducer:
  toda vez que setEntrada for chamado, ele irá disparar SetEntrada.
  Vá para Set Entrada.
  Assim como useState, passamos o valor inicial.
  */
  const [entrada, setEntrada] = useReducer(
    SetEntrada,
    [] as FormEntradaProdutoSchemaType[]
  );
  const infoTabela: InfoTabela[] = entrada.map((produtoEntrada) => {
    let S_NOME = '';
    produtos.data.forEach((produto) => {
      if (produto.ID_PRODUTO === produtoEntrada.ID_PRODUTO) {
        S_NOME = produto.S_NOME;
      }
    });
    return {
      S_NOME,
      ...produtoEntrada
    };
  });
  return (
    <ProdutosEntradaContext.Provider
      value={{ infoTabela, setEntrada, entrada }}
    >
      {children}
    </ProdutosEntradaContext.Provider>
  );
};
