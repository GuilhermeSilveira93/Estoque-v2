import { atualizarFornecedorParam } from '@/@actions'
import { CreateFornecedorType } from '@/@schemas'
import { FornecedorType } from '@/@types/api'
import { FornecedorPageProps } from '@/app/(private)/(cadastros)/fornecedores/page'

import { AdapterRequest } from './RequestAdapter'

export class Fornecedor extends AdapterRequest {
  constructor() {
    super()
  }
  async getAll() {
    return await this.request<{ data: FornecedorType[]; total: number }>({
      method: 'get',
      url: 'fornecedor',
    })
  }
  async getAllWithParams({ searchParams }: FornecedorPageProps) {
    const { ID_FORNECEDOR, S_ATIVO, Search, Page, LimitPerPage } = searchParams
    return await this.request<{ data: FornecedorType[]; total: number }>({
      method: 'get',
      url: 'fornecedor',
      params: {
        S_ATIVO,
        ID_FORNECEDOR,
        Search,
        Page,
        LimitPerPage,
      },
    })
  }
  async attFornecedor({ ID_FORNECEDOR, data }: atualizarFornecedorParam) {
    return await this.request<{ message: string }>({
      method: 'patch',
      url: `fornecedor/${ID_FORNECEDOR}`,
      body: {
        ...data,
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
  async createFornecedor(data: CreateFornecedorType) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: 'fornecedor',
      body: {
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
}
