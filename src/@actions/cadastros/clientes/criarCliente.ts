'use server'
import { Cliente } from '@/@classes/Cliente'
import { CreateClienteType } from '@/@schemas'
export const criarCliente = async (data: CreateClienteType) => {
  return await new Cliente().createCliente(data)
}
