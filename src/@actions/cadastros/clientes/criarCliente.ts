'use server';
import { Tipo } from '@/@classes';
import { CreateTipoType } from '@/@schemas';
export const criarCliente = async (data: CreateTipoType) => {
  return await new Tipo().createTipo(data);
};
