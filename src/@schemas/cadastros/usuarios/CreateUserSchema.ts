import * as zod from 'zod';

export const CreateUserSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    S_EMAIL: zod.string()
    .min(1, { message: 'Confirme seu e-mail, está certo isso?' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    S_SENHA: zod.string().min(6, { message: 'Senha muito Fraca' }).max(40, { message: '40 caracteres no máximo'}),
    ID_GRUPO: zod.enum(['1','2','3'], {message: 'Você está muito longe de casa, aqui é o Brasil!'}),
});
export type CreateUserType = zod.infer<typeof CreateUserSchema>