import { TiposType } from '@/@types/api/ReqTipos';

import { AdapterRequest } from './RequestAdapter';
export class Tipos extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll() {
    try {
      return await this.request<{ data: TiposType[] }>({
        method: 'get',
        url: '/tipos'
      });
    } catch (error) {
      return { body: { data: [] }, statusCode: 204 };
    }
  }
}
