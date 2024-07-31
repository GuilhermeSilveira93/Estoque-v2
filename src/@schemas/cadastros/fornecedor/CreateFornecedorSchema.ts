import * as zod from 'zod'

export const CreateFornecedorSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Nome do Fornecedor' })
    .max(150, { message: 'Tamanho máximo do nome é 150 caracteres.' }),
})
// eslint-disable-next-line prettier/prettier
export type CreateFornecedorType = zod.infer<typeof CreateFornecedorSchema>