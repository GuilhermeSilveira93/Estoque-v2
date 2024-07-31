import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema'

import { AdapterRequest } from './RequestAdapter'
export class Lote extends AdapterRequest {
  constructor() {
    super()
  }
  async insertProdutos({
    data,
    ID_FORNECEDOR,
  }: {
    data: FormEntradaProdutoSchemaType[]
    ID_FORNECEDOR: string
  }) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: `lote/${ID_FORNECEDOR}`,
      body: { DADOS: data },
    })
  }
  async removeProdutos({
    data,
    ID_CLIENTE,
  }: {
    data: FormEntradaProdutoSchemaType[]
    ID_CLIENTE: string
  }) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: `lote/saida/${ID_CLIENTE}`,
      body: { DADOS: data },
    })
  }
}
