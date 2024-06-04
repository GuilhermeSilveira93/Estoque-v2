import { HomeProps } from '@/@types';
import { Produto } from '@/@types/api';

import { HttpClient } from '../RequestAdapter';
interface ProdutosInterface {
  get: ({searchParams}: HomeProps) => Promise<{ statusCode: number, body: {data: Produto[], total: number} }>;
}
export class Produtos implements ProdutosInterface {
  constructor (readonly httpClient: HttpClient) {}
  async get({searchParams}: HomeProps):Promise<{ statusCode: number, body: {data: Produto[], total: number} }>{
    const { ID_PRODUTO, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
    return await this.httpClient.request({
      method: 'get',
      url: '/produto/tabela',
        params: {
        S_ATIVO,
        ID_PRODUTO,
        Search,
        Page,
        LimitPerPage
      },
    });
  }
}