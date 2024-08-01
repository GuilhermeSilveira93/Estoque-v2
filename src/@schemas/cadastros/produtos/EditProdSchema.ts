import * as zod from 'zod'

export const EditProdSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_ATIVO: zod.boolean(),
  N_SERIAL: zod.optional(
    zod
      .string()
      .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' })
  ),
  ID_TIPO: zod
    .string()
    .min(36, { message: 'Selecione um tipo válido' })
    .max(36, { message: 'Tipo incorreta!' }),
})
// eslint-disable-next-line prettier/prettier
export type EditProdType = zod.infer<typeof EditProdSchema>;
