import * as zod from 'zod'
export const FormEnviarProdutoSchema = zod.object({
  ID_EMPRESA: zod
  .string({required_error:'Selecione um fornecedor por favor.'})
  .min(36, { message: 'Selecione um Fornecedor' })
  .max(36, { message: 'Fornecedor inválido.' }),
  ID_CLIENTE: zod
  .string({required_error:'Selecione um fornecedor por favor.'})
  .min(36, { message: 'Selecione um Fornecedor' })
  .max(36, { message: 'Fornecedor inválido.' }),
})

export type FormEnviarProdutoSchemaType = zod.infer<typeof FormEnviarProdutoSchema>