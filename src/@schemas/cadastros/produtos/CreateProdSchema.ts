import * as zod from 'zod';

export const CreateProdSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    N_SERIAL: zod.string().optional(),
    ID_TIPO: zod.string()
    .min(1, { message: 'Selecione um tipo' })
    .max(2, { message: 'Tipo incorreto!' }),
});
// eslint-disable-next-line prettier/prettier
export type CreateProdType = zod.infer<typeof CreateProdSchema>