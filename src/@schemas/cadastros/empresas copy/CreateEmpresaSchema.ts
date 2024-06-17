import * as zod from 'zod';

export const CreateEmpresaSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Nome da Empresa' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
});
export type CreateEmpresaType = zod.infer<typeof CreateEmpresaSchema>