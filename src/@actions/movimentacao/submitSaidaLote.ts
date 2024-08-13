'use server'

import { Lote } from '@/@classes/Lote'
import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema'

type submitSaidaLoteProps = {
  ID_CLIENTE: string
  data: FormEntradaProdutoSchemaType[]
}
export const submitSaidaLote = async ({
  ID_CLIENTE,
  data,
}: submitSaidaLoteProps) => {
  return await new Lote().removeProdutos({
    ID_CLIENTE,
    data,
  })
}
