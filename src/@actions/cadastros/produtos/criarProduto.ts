'use server'
import { Produto } from '@/@classes'
import { CreateProdType } from '@/@schemas'
export const criarProduto = async (data: CreateProdType) => {
  return await new Produto().createProd(data)
}
