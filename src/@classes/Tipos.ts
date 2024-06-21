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
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
  async attTipo({ ID_TIPO, data }: { ID_TIPO: number, data: TiposType }) {
    try {
      return await this.request<{ message: string }>({
        method: 'patch',
        url: `/empresa/${ID_TIPO}`,
        body: {
          ...data,
          S_NOME: data.S_NOME.toUpperCase()
        }
      });
    } catch (error) {
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
}
