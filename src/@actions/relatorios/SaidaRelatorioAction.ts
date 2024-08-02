'use server'
import { Relatorio } from '@/@classes/Relatorio'
import { FormRelatorioSaidaSchemaType } from '@/@schemas'

export const SaidaRelatorioAction = async (
  data: FormRelatorioSaidaSchemaType
) => {
  return await new Relatorio().saida({ data })
}
