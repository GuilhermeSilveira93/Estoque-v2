'use server';
import { Tipos } from '@/@classes';
import { CreateTipoType } from '@/@schemas';
export const criarTipo = async (data: CreateTipoType) => {
  return await new Tipos().createTipo(data);
};
