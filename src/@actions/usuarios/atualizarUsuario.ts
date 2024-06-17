'use server';
import { Usuarios } from '@/@classes/Usuarios';
import { EditUserType } from '@/@schemas/cadastros/usuarios/EditUserSchema';
export type atualizarUsuarioParam = {
  data: EditUserType,
  ID_USUARIO: number
};
export const atualizarUsuario = async ({
  data,
  ID_USUARIO
}: atualizarUsuarioParam): Promise<{ message: string }> => {
  try {
    const response = await new Usuarios().atualizarUsuario({
      ID_USUARIO,
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
