'use server';
import { Empresa } from '@/@classes/Empresa';
import { CreateTipoType } from '@/@schemas';
export const criarTipo = async (
  data: CreateTipoType
): Promise<{ message: string }> => {
  try {
    const response = await new Empresa().createEmp(data);
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
