import * as zod from 'zod'

export const EditTipoSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_ATIVO: zod.boolean(),
})
// eslint-disable-next-line prettier/prettier
export type EditTipoType = zod.infer<typeof EditTipoSchema>