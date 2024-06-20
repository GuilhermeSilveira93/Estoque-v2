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
}: atualizarProdutoParam): Promise<{ message: string }> => {
  try {
    const response = await new Produto().attProd({
      ID_PRODUTO,
      data
    });
    if (response.statusCode !== 202)
      throw new Error('Algo deu errado, entre em contato com suporte', {
        cause: 'ServerError'
      });
    return response.body;
  } catch (error) {
    throw new Error(error as string);
  }
};
