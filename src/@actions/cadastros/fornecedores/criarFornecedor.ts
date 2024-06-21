'use server';
import { Fornecedor } from '@/@classes/Fornecedor';
import { CreateFornecedorType } from '@/@schemas';
export const criarFornecedor = async (
  data: CreateFornecedorType
): Promise<{ message: string }> => {
  try {
    const response = await new Fornecedor().createFornecedor(data);
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
