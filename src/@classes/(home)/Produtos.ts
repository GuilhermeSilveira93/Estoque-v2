import { HomeProps } from '@/@types';
import { Produto } from '@/@types/api';

import { AdapterRequest } from '../RequestAdapter';
export class Produtos extends AdapterRequest {
  constructor() {
    super();
  }
  async get({ searchParams }: HomeProps): Promise<{
    statusCode: number,
    body: { data: Produto[], total: number }
  }> {
    const { ID_PRODUTO, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
    return await this.request({
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
  }
  async attProd({
    ID_PRODUTO,
    S_NOME,
    S_ATIVO
  }: {
    ID_PRODUTO: number,
    S_NOME: string,
    S_ATIVO: boolean
  }): Promise<{ statusCode: number, body: { message: string } }> {
    const resposta = await this.request({
      method: 'patch',
      url: 'produto',
      body: { ID_PRODUTO, S_NOME, S_ATIVO }
    });
    return resposta;
  }
}
