import { HomeProps } from '@/@types';
import { Tabela, Produtos as ProdutosType } from '@/@types/api';

import { AdapterRequest } from './RequestAdapter';
type GetMovimentacaoType = {
  itensEstoque: number,
  anos: {
    ano: string,
    entrada: number,
    saida: number,
    meses: { name: string, entrada: number, saida: number }[]
  }[]
};
export class Produtos extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll() {
    try {
      return await this.request<{ data: ProdutosType[], total: number }>({
        method: 'get',
        url: '/produto'
      });
    } catch (error) {
      return { body: { data: [], total: 0 }, statusCode: 204 };
    }
  }
  async getTabela({ searchParams }: HomeProps) {
    const { ID_PRODUTO, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
    try {
      return await this.request<{ data: Tabela[], total: number }>({
        method: 'get',
        url: '/produto/tabela',
        params: {
          S_ATIVO,
          ID_PRODUTO,
          Search,
          Page,
          LimitPerPage
        }
      });
    } catch (error) {
      return { body: { data: [], total: 0 }, statusCode: 204 };
    }
  }
  async attProd({
    ID_PRODUTO,
    S_NOME,
    S_ATIVO
  }: {
    ID_PRODUTO: number,
    S_NOME: string,
    S_ATIVO: boolean
  }) {
    const resposta = await this.request<{ message: string }>({
      method: 'patch',
      url: 'produto',
      body: { ID_PRODUTO, S_NOME, S_ATIVO }
    });
    return resposta;
  }
  async getMovimentacao() {
    return await this.request<GetMovimentacaoType>({
      method: 'get',
      url: '/produto/movimentacao'
    });
  }
}
