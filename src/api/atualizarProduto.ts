'use server';

import { api } from './api';

type atualizarProdutoProps = {
  ID_PRODUTO: number,
  S_NOME: string,
  S_ATIVO: boolean
};
export const atualizarProduto = async ({
  ID_PRODUTO,
  S_ATIVO,
  S_NOME
}: atualizarProdutoProps) => {
  api.patch('produto', {
    ID_PRODUTO,
    S_NOME,
    S_ATIVO
  });
};
