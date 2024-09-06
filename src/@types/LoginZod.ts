import * as zod from 'zod'

export const loginSchema = zod.object({
  S_EMAIL: zod
    .string()
    .min(1, { message: 'REQUIRE_EMAIL' })
    .max(150, { message: 'MAX_LENGHT_EMAIL' }),
  S_SENHA: zod
    .string()
    .min(1, { message: 'REQUIRE_PASSWORD' })
    .max(150, { message: 'MAX_LENGHT_PASSWORD' }),
})
export type loginType = zod.infer<typeof loginSchema>
