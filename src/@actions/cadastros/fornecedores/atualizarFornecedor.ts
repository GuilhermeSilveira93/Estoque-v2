'use server'
import { Fornecedor } from '@/@classes/Fornecedor'
import { EditFornecedorType } from '@/@schemas/cadastros/fornecedor/EditFornecedorSchema'
export type atualizarFornecedorParam = {
  data: EditFornecedorType
  ID_FORNECEDOR: string
}
export const atualizarFornecedor = async ({
  data,
  ID_FORNECEDOR,
}: atualizarFornecedorParam) => {
  return await new Fornecedor().attFornecedor({
    ID_FORNECEDOR,
    data,
  })
}
