import { GrupoType } from '@/@types/api';

import { AdapterRequest } from './RequestAdapter';
type getAllBodyType = {
  data: GrupoType[]
};
export class Grupos extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll(): Promise<{
    statusCode: number,
    body: { data: GrupoType[] }
  }> {
    try {
      return await this.request<getAllBodyType>({
        method: 'get',
        url: '/grupo'
      });
    } catch (error) {
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
}
