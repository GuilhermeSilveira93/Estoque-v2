import * as zod from 'zod';

export const EditProdSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_ATIVO: zod
    .string()
    .min(1, { message: 'Digite sua senha' })
    .max(150, { message: 'Tamanho máximo da senha é 150 caracteres.' })
});
export type EditProdType = zod.infer<typeof EditProdSchema>
