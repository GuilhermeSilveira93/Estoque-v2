'use server';
import { Empresa } from '@/@classes/Empresa';
import { EditEmpresaType } from '@/@schemas';
export type atualizarEmpresaParam = {
  data: EditEmpresaType,
  ID_EMPRESA: number
};
export const atualizarEmpresa = async ({
  data,
  ID_EMPRESA
}: atualizarEmpresaParam): Promise<{ message: string }> => {
  try {
    const response = await new Empresa().attEmpresa({
      ID_EMPRESA,
      data
    });
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
