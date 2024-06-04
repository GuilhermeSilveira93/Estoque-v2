import { HomeProps } from '@/@types';
import { Produto } from '@/@types/api';

import { HttpClient } from '../RequestAdapter';
interface ProdutosInterface {
  get: ({searchParams}: HomeProps) => Promise<{ statusCode: number, body: {data: Produto[], total: number} }>;
  attProd: ({ID_PRODUTO, S_NOME, S_ATIVO}:{ID_PRODUTO: number,S_NOME:string, S_ATIVO:boolean}) => Promise<{statusCode: number, body: {message:string}}>
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
  async attProd({ ID_PRODUTO, S_NOME, S_ATIVO }: { ID_PRODUTO: number, S_NOME: string, S_ATIVO: boolean }):Promise<{statusCode: number, body: {message:string}}>{
    const resposta = await this.httpClient.request({
      method: 'patch',
      url: 'produto',
      body: { ID_PRODUTO, S_NOME, S_ATIVO}
    });
    return resposta;
  }
}