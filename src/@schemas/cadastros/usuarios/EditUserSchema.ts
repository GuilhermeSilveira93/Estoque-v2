import * as zod from 'zod'

export const EditUserSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_ATIVO: zod.boolean(),
  S_EMAIL: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_SENHA: zod.optional(
    zod
      .string()
      .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' })
  ),

  ID_GRUPO: zod
    .string()
    .min(36, { message: 'Selecione um usuário válido' })
    .max(36, { message: 'Usuário incorreto!' }),
})
// eslint-disable-next-line prettier/prettier
export type EditUserType = zod.infer<typeof EditUserSchema>;
