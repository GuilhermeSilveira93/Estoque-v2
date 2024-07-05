'use server';
import { Usuario } from '@/@classes/Usuario';
import { CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema';
export const criarUsuario = async (data: CreateUserType) => {
  return await new Usuario().createUser({
    data
  });
};
