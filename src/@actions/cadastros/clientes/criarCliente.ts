'use server';
import { Cliente } from '@/@classes';
import { CreateClienteType } from '@/@schemas';
export const criarCliente = async (data: CreateClienteType) => {
  return await new Cliente().createCliente(data);
};
