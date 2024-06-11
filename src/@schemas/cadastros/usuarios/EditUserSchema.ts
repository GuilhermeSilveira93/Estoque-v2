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
    S_Senha: zod.string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    ID_GRUPO: zod.number({message: 'Precisa ser um número'}),
});
export type EditUserType = zod.infer<typeof EditUserSchema>