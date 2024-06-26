'use server';
import { Usuario } from '@/@classes/Usuario';
import { CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema';
export type criarUsuarioProps = {
  data: CreateUserType
};
export const criarUsuario = async ({ data }: criarUsuarioProps) => {
  return await new Usuario().createUser({
    data
  });
};
