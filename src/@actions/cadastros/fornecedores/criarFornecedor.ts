'use server'
import { Fornecedor } from '@/@classes/Fornecedor'
import { CreateFornecedorType } from '@/@schemas'
export const criarFornecedor = async (data: CreateFornecedorType) => {
  return await new Fornecedor().createFornecedor(data)
}
