import * as zod from 'zod'

export const loginSchema = zod.object({
  S_EMAIL: zod
    .string()
    .min(1, { message: 'Digite um e-mail' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_SENHA: zod
    .string()
    .min(1, { message: 'Digite sua senha' })
    .max(150, { message: 'Tamanho máximo da senha é 150 caracteres.' })
})
export type loginType = zod.infer<typeof loginSchema>
