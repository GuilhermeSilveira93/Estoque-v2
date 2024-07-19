import * as zod from 'zod'
export const FormEntradaProdutoSchema = zod.object({
  ID_PRODUTO: zod
  .string({required_error:'Selecione um produto por favor.'})
  .min(36, { message: 'Selecione um Produto' })
  .max(36, { message: 'Produto inválido.' }),
  S_DIMENSAO: zod.string({required_error:'Selecione um produto por favor.'}).optional(),
  S_DETALHES: zod.string({required_error:'Selecione um produto por favor.'}).optional(),
  N_VALOR: zod.string().refine(doc => doc.replace(/\D/g, ''), 'Apenas números neste campo').transform(v => Number(v)).optional(),
  N_QUANTIDADE: zod.string().refine(doc => doc.replace(/\D/g, ''), 'Apenas números neste campo').transform(v => Number(v))
})

export type FormEntradaProdutoSchemaType = zod.infer<typeof FormEntradaProdutoSchema>