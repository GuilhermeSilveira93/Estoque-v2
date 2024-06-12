import { CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema';
import { EditUserType } from '@/@schemas/cadastros/usuarios/EditUserSchema';
import { UserProps } from '@/@types';
import { Usuario } from '@/@types/api';

import { AdapterRequest } from './RequestAdapter';
type getAllBodyType = {
  data: Usuario[],
  total: 0
};
export class Usuarios extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll({ searchParams }: UserProps): Promise<{
    statusCode: number,
    body: { data: Usuario[], total: number }
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
      url: `/usuario/`,
      body: { ...data, ID_GRUPO: Number(data.ID_GRUPO) }
    });
  }
}
