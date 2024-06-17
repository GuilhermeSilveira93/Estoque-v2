import { atualizarFornecedorParam } from '@/@actions/fornecedores/atualizarProduto';
import { FornecedorType } from '@/@types/api';
import { FornecedorPageProps } from '@/app/(private)/(cadastros)/fornecedores/page';

import { AdapterRequest } from './RequestAdapter';

export class Fornecedor extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll({ searchParams }: FornecedorPageProps) {
    const { ID_FORNECEDOR, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
    try {
      return await this.request<{ data: FornecedorType[], total: number }>({
        method: 'get',
        url: '/fornecedor',
        params: {
          S_ATIVO,
          ID_FORNECEDOR,
          Search,
          Page,
          LimitPerPage
        }
      });
    } catch (error) {
      return { body: { data: [], total: 0 }, statusCode: 204 };
    }
  }
  async attFornecedor({ ID_FORNECEDOR, data }: atualizarFornecedorParam) {
    try {
      return await this.request<{ message: string }>({
        method: 'patch',
        url: `/fornecedor/${ID_FORNECEDOR}`,
        body: {
          ...data,
          S_NOME: data.S_NOME.toUpperCase()
        }
      });
    } catch (error) {
      return { statusCode: 404, body: { message: JSON.stringify(error) } };
    }
  }
}
