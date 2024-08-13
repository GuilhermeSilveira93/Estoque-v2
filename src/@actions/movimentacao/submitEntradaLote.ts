'use server'

import { Lote } from '@/@classes/Lote'
import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema'

type submitEntradaLoteProps = {
  ID_FORNECEDOR: string
  data: FormEntradaProdutoSchemaType[]
}
export const submitEntradaLote = async ({
  ID_FORNECEDOR,
  data,
}: submitEntradaLoteProps) => {
  return await new Lote().insertProdutos({
    ID_FORNECEDOR,
    data,
  })
}
