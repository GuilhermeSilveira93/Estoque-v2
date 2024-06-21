'use server';
import { Usuario } from '@/@classes/Usuario';
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
    const response = await new Usuario().atualizarUsuario({
      ID_USUARIO,
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
