import { GrupoType } from '@/@types/api';

import { AdapterRequest } from './RequestAdapter';
type getAllBodyType = {
  data: GrupoType[]
};
export class Grupos extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll() {
    return await this.request<getAllBodyType>({
      method: 'get',
      url: '/grupo'
    });
  }
}
