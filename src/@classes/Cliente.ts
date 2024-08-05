import { CreateClienteType, EditClienteType } from '@/@schemas'
import { ClienteType } from '@/@types/api/ReqCliente'
import { ClientesPageProps } from '@/app/(private)/(cadastros)/clientes/page'

import { AdapterRequest } from './RequestAdapter'
export class Cliente extends AdapterRequest {
  constructor() {
    super()
  }
  async getAllWithParams({ searchParams }: ClientesPageProps) {
    return await this.request<{ data: ClienteType[]; total: number }>({
      method: 'get',
      url: 'cliente',
      params: searchParams,
    })
  }
  async getForCompany({ ID_EMPRESA }: { ID_EMPRESA: string }) {
    return await this.request<{
      data: { ID_CLIENTE: string; S_NOME: string }[]
      total: number
    }>({
      method: 'get',
      url: `cliente/${ID_EMPRESA}`,
    })
  }
  async getAll() {
    return await this.request<{ data: ClienteType[]; total: number }>({
      method: 'get',
      url: '/cliente/getAll',
    })
  }
  async attCliente({
    ID_CLIENTE,
    data,
  }: {
    ID_CLIENTE: string
    data: EditClienteType
  }) {
    return await this.request<{ message: string }>({
      method: 'patch',
      url: `cliente/${ID_CLIENTE}`,
      body: {
        ...data,
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
  async createCliente(data: CreateClienteType) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: 'cliente',
      body: {
        S_NOME: data.S_NOME.toUpperCase(),
        ID_EMPRESA: data.ID_EMPRESA,
      },
    })
  }
}
