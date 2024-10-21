'use server'
import { Tipo } from '@/@classes/Tipo'
import { EditTipoType } from '@/@schemas'
export type atualizarTipoParam = {
  data: EditTipoType
  ID_TIPO: string
}
export const atualizarTipo = async ({ data, ID_TIPO }: atualizarTipoParam) => {
  return await new Tipo().attTipo({
    ID_TIPO,
    data,
  })
}
