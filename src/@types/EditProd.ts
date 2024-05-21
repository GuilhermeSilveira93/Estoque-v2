import * as zod from 'zod';

export const EditProdSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_ATIVO: zod
    .boolean()
});
export type EditProdType = zod.infer<typeof EditProdSchema>
