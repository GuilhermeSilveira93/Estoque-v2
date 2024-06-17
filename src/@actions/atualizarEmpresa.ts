'use server';
import { Produtos } from '@/@classes';
import { EditProdType } from '@/@schemas';
export type atualizarEmpresaParam = {
  data: EditProdType,
  ID_EMPRESA: number
};
export const atualizarEmpresa = async ({
  data,
  ID_EMPRESA
}: atualizarEmpresaParam): Promise<{ message: string }> => {
  try {
    /* const response = await new Produtos().attProd({
      ID_EMPRESA,
      data
    });
    if (response.statusCode !== 202)
      throw new Error('Algo deu errado, entre em contato com suporte', {
        cause: 'ServerError'
      });
    return response.body; */
  } catch (error) {
    return { message: JSON.stringify(error) };
  }
};
