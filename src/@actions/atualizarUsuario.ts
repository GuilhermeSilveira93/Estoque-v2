'use server';
import { Produtos } from '@/@classes';
import { EditUserType } from '@/@schemas/cadastros/usuarios/EditUserSchema';
export type atualizarUsuarioParam = {
  data: EditUserType,
  ID_USUARIO: number
};
export const atualizarUsuario = async ({
  data,
  ID_USUARIO
}: atualizarUsuarioParam): Promise<{ message: string }> => {
  const { S_ATIVO, S_NOME } = data;
  try {
    const response = await new Produtos().attProd({
      ID_PRODUTO,
      S_ATIVO,
      S_NOME
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
