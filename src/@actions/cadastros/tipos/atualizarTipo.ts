'use server';
import { Tipos } from '@/@classes';
import { EditTipoType } from '@/@schemas';
export type atualizarTipoParam = {
  data: EditTipoType,
  ID_TIPO: number
};
export const atualizarTipo = async ({
  data,
  ID_TIPO
}: atualizarTipoParam): Promise<{ message: string }> => {
  try {
    const response = await new Tipos().attTipo({
      ID_TIPO,
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
