import { Grupo } from '@/@types/api';

import { AdapterRequest } from './RequestAdapter';
type getAllBodyType = {
  data: Grupo[]
};
export class Grupos extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll(): Promise<{
    statusCode: number,
    body: { data: Grupo[] }
  }> {
    try {
      return await this.request<getAllBodyType>({
        method: 'get',
        url: '/grupo'
      });
    } catch (error) {
      return { body: { data: [] }, statusCode: 204 };
    }
  }
}
