import * as zod from 'zod'
export const FormEntradaEditProdutoSchema = zod.object({
  S_DIMENSAO: zod.string({required_error:'Selecione um produto por favor.'}).optional(),
  S_DETALHES: zod.string({required_error:'Selecione um produto por favor.'}).optional(),
  N_VALOR: zod.string().refine(doc => doc.replace(/\D/g, ''), 'Apenas números neste campo').transform(v => Number(v)).optional(),
  N_QUANTIDADE: zod.number(),
})

export type FormEntradaEditProdutoSchemaType = zod.infer<typeof FormEntradaEditProdutoSchema>