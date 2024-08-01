import * as zod from 'zod'
export const FormEntradaEditProdutoSchema = zod.object({
  S_DIMENSAO: zod.optional(
    zod.string({ required_error: 'Selecione um produto por favor.' })
  ),
  S_DETALHES: zod.optional(
    zod.string({ required_error: 'Selecione um produto por favor.' })
  ),

  N_VALOR: zod.optional(
    zod
      .string()
      .refine((doc) => doc.replace(/\D/g, ''), 'Apenas números neste campo')
      .transform((v) => Number(v))
  ),

  N_QUANTIDADE: zod.number(),
})

export type FormEntradaEditProdutoSchemaType = zod.infer<
  typeof FormEntradaEditProdutoSchema
>
