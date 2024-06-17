'use server';
import { Produtos } from '@/@classes';
import { CreateProdType } from '@/@schemas';
export const criarProduto = async (
  data: CreateProdType
): Promise<{ message: string }> => {
  try {
    const response = await new Produtos().createProd(data);
    console.log(response);
    if (response.statusCode !== 202)
      throw new Error('Algo deu errado, entre em contato com suporte', {
        cause: 'ServerError'
      });

    return response.body;
  } catch (error) {
    return { message: JSON.stringify(error) };
  }
};
