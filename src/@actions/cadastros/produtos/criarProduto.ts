'use server';
import { Produto } from '@/@classes';
import { CreateProdType } from '@/@schemas';
export const criarProduto = async (
  data: CreateProdType
): Promise<{ message: string }> => {
  try {
    const response = await new Produto().createProd(data);
    if (response.statusCode !== 202)
      throw new Error('Algo deu errado, entre em contato com suporte', {
        cause: 'ServerError'
      });
    return response.body;
  } catch (error) {
    throw new Error((error as Error).message as string, {
      cause: (error as Error).cause
    });
  }
};
