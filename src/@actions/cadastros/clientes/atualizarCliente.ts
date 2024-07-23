'use server';
import { Cliente } from '@/@classes';
import { EditClienteType } from '@/@schemas';
export type atualizarClienteParam = {
  data: EditClienteType,
  ID_CLIENTE: string
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
