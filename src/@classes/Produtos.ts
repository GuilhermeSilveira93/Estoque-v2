import { CreateProdType, EditProdType } from '@/@schemas';
import { Produtos as ProdutosType, TabelaType } from '@/@types/api';
import { ProdutosPageProps } from '@/app/(private)/(cadastros)/produtos/page';

import { AdapterRequest } from './RequestAdapter';
type attProdParams = {
  ID_PRODUTO: number,
  data: EditProdType
};
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
  async getAll({ searchParams }: ProdutosPageProps) {
    const { ID_PRODUTO, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
    try {
      return await this.request<{ data: ProdutosType[], total: number }>({
        method: 'get',
        url: '/produto',
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
  async getTabela({ searchParams }: ProdutosPageProps) {
    const { ID_PRODUTO, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
    try {
      return await this.request<{ data: TabelaType[], total: number }>({
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
  async attProd({ ID_PRODUTO, data }: attProdParams) {
    const resposta = await this.request<{ message: string }>({
      method: 'patch',
      url: `produto/${ID_PRODUTO}`,
      body: { ...data, ID_TIPO: Number(data.ID_TIPO) }
    });
    return resposta;
  }
  async getMovimentacao() {
    return await this.request<GetMovimentacaoType>({
      method: 'get',
      url: '/produto/movimentacao'
    });
  }
  async createProd(data: CreateProdType) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: '/produto',
      body: { ...data, ID_TIPO: Number(data.ID_TIPO) }
    });
  }
}
