import { CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema';
import { EditUserType } from '@/@schemas/cadastros/usuarios/EditUserSchema';
import { UsuarioType } from '@/@types/api';
import { UserPageProps } from '@/app/(private)/(cadastros)/usuarios/page';

import { AdapterRequest } from './RequestAdapter';
type getAllBodyType = {
  data: UsuarioType[],
  total: number
};
export class Usuario extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll({ searchParams }: UserPageProps): Promise<{
    statusCode: number,
    body: { data: UsuarioType[], total: number }
  }> {
    try {
      return await this.request<getAllBodyType>({
        method: 'get',
        url: '/usuario',
        params: searchParams
      });
    } catch (error) {
      return { body: { data: [], total: 0 }, statusCode: 204 };
    }
  }
  async atualizarUsuario({
    ID_USUARIO,
    data
  }: {
    ID_USUARIO: number,
    data: EditUserType
  }): Promise<{ statusCode: number, body: { message: string } }> {
    return await this.request({
      method: 'patch',
      url: `/usuario/${ID_USUARIO}`,
      body: { ...data, ID_GRUPO: Number(data.ID_GRUPO) }
    });
  }
  async createUser({
    data
  }: {
    data: CreateUserType
  }): Promise<{ statusCode: number, body: { message: string } }> {
    return await this.request({
      method: 'post',
      url: `/usuario`,
      body: {
        ...data,
        ID_GRUPO: Number(data.ID_GRUPO),
        S_NOME: data.S_NOME.toUpperCase()
      }
    });
  }
}