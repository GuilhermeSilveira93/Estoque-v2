'use server';
import { Produto } from '@/@classes';
import { EditProdType } from '@/@schemas';
export type atualizarProdutoParam = {
  data: EditProdType,
  ID_PRODUTO: number
};
export const atualizarProduto = async ({
  data,
  ID_PRODUTO
}: atualizarProdutoParam) => {
  const date = await new Produto().attProd({
    ID_PRODUTO,
    data
  });
  return date;
};
