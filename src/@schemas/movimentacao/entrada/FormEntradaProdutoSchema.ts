import * as zod from 'zod'
export const FormEntradaProdutoSchema = zod.object({
  S_NOME: zod.string()
})

export type FormEntradaProdutoSchemaType = zod.infer<typeof FormEntradaProdutoSchema>