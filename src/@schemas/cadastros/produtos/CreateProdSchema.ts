import * as zod from 'zod';

export const CreateProdSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    N_SERIAL: zod.string().optional(),
    ID_TIPO: zod.enum(['1','2','3'], {message: 'Você está muito longe de casa, aqui é o Brasil!'}),
});
export type CreateProdType = zod.infer<typeof CreateProdSchema>