import { CreateTipoType, EditTipoType } from '@/@schemas';
import { TiposType } from '@/@types/api/ReqTipos';
import { TiposPageProps } from '@/app/(private)/(cadastros)/tipos/page';

import { AdapterRequest } from './RequestAdapter';
export class Tipos extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll() {
    try {
      return await this.request<{ data: TiposType[], total: number }>({
        method: 'get',
        url: '/tipos'
      });
    } catch (error) {
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
  async getFilter({ searchParams }: TiposPageProps) {
    try {
      return await this.request<{ data: TiposType[], total: number }>({
        method: 'get',
        url: '/tipos',
        params: searchParams
      });
    } catch (error) {
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
  async attTipo({ ID_TIPO, data }: { ID_TIPO: number, data: EditTipoType }) {
    try {
      return await this.request<{ message: string }>({
        method: 'patch',
        url: `/tipos/${ID_TIPO}`,
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
  async createTipo(data: CreateTipoType) {
    try {
      return await this.request<{ message: string }>({
        method: 'post',
        url: '/tipos',
        body: {
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
