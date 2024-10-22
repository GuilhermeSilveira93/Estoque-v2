import { CreateEmpresaType, EditEmpresaType } from '@/@schemas'
import { EmpresaType } from '@/@types/api'
import { FiltersPage } from '@/@types/FiltersType'

import { AdapterRequest } from './RequestAdapter'
export class Empresa extends AdapterRequest {
  constructor() {
    super()
  }
  async getWithParams({
    searchParams,
  }: {
    searchParams: FiltersPage & {
      ID_EMPRESA: string
    }
  }) {
    const { ID_EMPRESA, S_ATIVO, Search, Page, LimitPerPage } = searchParams
    const consulta = await this.request<{ data: EmpresaType[]; total: number }>(
      {
        method: 'get',
        url: 'empresa',
        params: {
          S_ATIVO,
          ID_EMPRESA,
          Search,
          Page,
          LimitPerPage,
        },
      }
    )
    return consulta
  }
  async getAll() {
    return await this.request<{ data: EmpresaType[]; total: number }>({
      method: 'get',
      url: '/empresa/getAll',
    })
  }
  async attEmpresa({
    ID_EMPRESA,
    data,
  }: {
    ID_EMPRESA: string
    data: EditEmpresaType
  }) {
    return await this.request<{ message: string }>({
      method: 'patch',
      url: `empresa/${ID_EMPRESA}`,
      body: {
        ...data,
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
  async createEmp(data: CreateEmpresaType) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: 'empresa',
      body: {
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
}
