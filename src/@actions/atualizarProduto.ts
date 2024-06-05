'use server';
import { Produtos } from '@/@classes/(home)/Produtos';
import { EditProdType } from '@/@schemas/home/EditProdSchema';
export type atualizarProdutoParam = {
  data: EditProdType,
  ID_PRODUTO: number
};
export const atualizarProduto = async ({
  data,
  ID_PRODUTO
}: atualizarProdutoParam): Promise<{ message: string }> => {
  const { S_ATIVO, S_NOME } = data;
  try {
    const response = await new Produtos().attProd({
      ID_PRODUTO,
      S_ATIVO,
      S_NOME
    });
    if (response.statusCode !== 202)
      throw new Error('Algo deu errado, entre em contato com suporte', {
        cause: 'ServerError'
      });
    return response.body;
  } catch (error) {
    return { message: JSON.stringify(error) };
  }
};
