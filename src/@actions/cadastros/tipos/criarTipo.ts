'use server'
import { Tipo } from '@/@classes/Tipo'
import { CreateTipoType } from '@/@schemas'
export const criarTipo = async (data: CreateTipoType) => {
  return await new Tipo().createTipo(data)
}
