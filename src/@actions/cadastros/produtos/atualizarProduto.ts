'use server';
import { Produto } from '@/@classes';
import { EditProdType } from '@/@schemas';
export type atualizarProdutoParam = {
  data: EditProdType,
  ID_PRODUTO: string
};
export const atualizarProduto = async ({
  data,
  ID_PRODUTO
}: atualizarProdutoParam) => {
  return await new Produto().attProd({
    ID_PRODUTO,
    data
  });
};
