'use server'
import { Empresa } from '@/@classes/Empresa'
import { CreateEmpresaType } from '@/@schemas'
export const criarEmpresa = async (data: CreateEmpresaType) => {
  return await new Empresa().createEmp(data)
}
