'use server'
import { Relatorio } from '@/@classes/Relatorio'
import { FormRelatorioEntradaSchemaType } from '@/@schemas'

export const EntradaRelatorioAction = async (
  data: FormRelatorioEntradaSchemaType
) => {
  return await new Relatorio().entrada({ data })
}
