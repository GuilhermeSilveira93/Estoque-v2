import { CreateTipoType, EditTipoType } from '@/@schemas'
import { TiposType } from '@/@types/api/ReqTipos'
import { TiposPageProps } from '@/app/(private)/(cadastros)/tipos/page'

import { AdapterRequest } from './RequestAdapter'
export class Tipo extends AdapterRequest {
  constructor() {
    super()
  }
  async getAll() {
    return await this.request<{ data: TiposType[]; total: number }>({
      method: 'get',
      url: 'tipos/all',
    })
  }
  async getWithParams({ searchParams }: TiposPageProps) {
    return await this.request<{ data: TiposType[]; total: number }>({
      method: 'get',
      url: 'tipos',
      params: searchParams,
    })
  }
  async attTipo({ ID_TIPO, data }: { ID_TIPO: string; data: EditTipoType }) {
    return await this.request<{ message: string }>({
      method: 'patch',
      url: `tipos/${ID_TIPO}`,
      body: {
        ...data,
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
  async createTipo(data: CreateTipoType) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: 'tipos',
      body: {
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
}
