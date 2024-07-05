'use server';
import { Cliente } from '@/@classes';
import { EditClienteType } from '@/@schemas';
export type atualizarClienteParam = {
  data: EditClienteType,
  ID_CLIENTE: number
};
export const atualizarCliente = async ({
  data,
  ID_CLIENTE
}: atualizarClienteParam) => {
  return await new Cliente().attCliente({
    ID_CLIENTE,
    data
  });
};
