import * as zod from 'zod';

export const EditUserSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    S_ATIVO: zod
    .boolean(),
    S_EMAIL: zod.string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    S_SENHA: zod.string().max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }).optional(),
    ID_GRUPO: zod.enum(['1','2','3'], {message: 'Você está muito longe de casa, aqui é o Brasil!'}),
});
export type EditUserType = zod.infer<typeof EditUserSchema>