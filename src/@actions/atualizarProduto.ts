'use server';
import { EditProdType } from '@/@types/EditProd';
import { api } from '@/api';

type atualizarProdutoParam = {
  data: EditProdType,
  ID_PRODUTO: number
};
export const atualizarProduto = async ({
  data,
  ID_PRODUTO
}: atualizarProdutoParam): Promise<{ message: string }> => {
  const { S_ATIVO, S_NOME } = data;
  try {
    const response = await api.patch('produto', {
      ID_PRODUTO,
      S_NOME,
      S_ATIVO
    });
    return response.data;
  } catch (error) {
    return { message: JSON.stringify(error) };
  }
};
