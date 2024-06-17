'use server';
import { Fornecedor } from '@/@classes/Fornecedor';
import { EditFornecedorType } from '@/@schemas/cadastros/fornecedores/EditEmpresaSchema';
export type atualizarFornecedorParam = {
  data: EditFornecedorType,
  ID_FORNECEDOR: number
};
export const atualizarFornecedor = async ({
  data,
  ID_FORNECEDOR
}: atualizarFornecedorParam): Promise<{ message: string }> => {
  try {
    const response = await new Fornecedor().attFornecedor({
      ID_FORNECEDOR,
      data
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
