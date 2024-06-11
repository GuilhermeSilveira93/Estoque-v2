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
}
