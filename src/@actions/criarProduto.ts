'use server';
import { CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema';
export type criarUsuarioProps = {
  data: CreateUserType
};
export const criarProduto = async ({
  data
}: criarUsuarioProps): Promise<{ message: string }> => {
  try {
    const response = await new Usuarios().createUser({
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
