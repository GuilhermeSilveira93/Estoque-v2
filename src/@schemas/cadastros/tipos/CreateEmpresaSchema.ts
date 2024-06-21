import * as zod from 'zod';

export const CreateTipoSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Nome do Tipo' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
});
export type CreateTipoType = zod.infer<typeof CreateTipoSchema>