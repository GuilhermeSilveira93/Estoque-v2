import * as zod from 'zod'

export const FormRelatorioEntradaSchema = zod.object({
  D_DATA: zod
    .object({
      D_INICIO: zod.date({ required_error: 'Data de inicio é obrigatório!' }),
      D_FIM: zod.date({ required_error: 'Data de fim é obrigatório!' }),
    })
    .refine((data) => data.D_FIM <= new Date(), {
      message: 'Data fim deve ser até hoje.',
    }),

  ID_FORNECEDOR: zod.optional(
    zod
      .string()
      .min(36, { message: 'Selecione um fornecedor válido' })
      .max(36, { message: 'Fornecedor incorreto!' })
  ),

  ID_PRODUTO: zod.optional(
    zod
      .string()
      .min(36, { message: 'Selecione um Produto válido' })
      .max(36, { message: 'Produto incorreto!' })
  ),
})
// eslint-disable-next-line prettier/prettier
export type FormRelatorioEntradaSchemaType = zod.infer<typeof FormRelatorioEntradaSchema>