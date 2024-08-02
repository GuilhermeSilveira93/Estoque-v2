import {
  FormRelatorioEntradaSchemaType,
  FormRelatorioSaidaSchemaType,
} from '@/@schemas'

import { AdapterRequest } from './RequestAdapter'
export type RelatorioEntradaType = {
  PRODUTO: string
  QUANTIDADE: number
  FORNECEDOR: string
  DATA: string
}
export type RelatorioSaidaType = {
  PRODUTO: string
  QUANTIDADE: number
  FORNECEDOR: string
  DATA: string
}
export class Relatorio extends AdapterRequest {
  constructor() {
    super()
  }
  async entrada({ data }: { data: FormRelatorioEntradaSchemaType }) {
    return await this.request<RelatorioEntradaType[]>({
      method: 'post',
      url: `lote/relatorio/entrada`,
      body: data,
    })
  }
  async saida({ data }: { data: FormRelatorioSaidaSchemaType }) {
    return await this.request<RelatorioSaidaType[]>({
      method: 'post',
      url: `lote/relatorio/saida`,
      body: data,
    })
  }
}
