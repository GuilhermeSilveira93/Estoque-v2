'use server';
import { Empresa } from '@/@classes/Empresa';
import { CreateEmpresaType } from '@/@schemas';
export const criarEmpresa = async (
  data: CreateEmpresaType
): Promise<{ message: string }> => {
  try {
    const response = await new Empresa().createEmp(data);
    if (response.statusCode !== 202)
      throw new Error('Algo deu errado, entre em contato com suporte', {
        cause: 'ServerError'
      });

    return response.body;
  } catch (error) {
    return { message: JSON.stringify(error) };
  }
};
