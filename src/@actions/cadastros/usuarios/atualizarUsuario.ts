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
}: atualizarUsuarioParam) => {
  return await new Usuario().atualizarUsuario({
    ID_USUARIO,
    data
  });
};
