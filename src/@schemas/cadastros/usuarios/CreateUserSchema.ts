import * as zod from 'zod'

export const CreateUserSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_EMAIL: zod
    .string()
    .min(1, { message: 'Confirme seu e-mail, está certo isso?' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_SENHA: zod
    .string()
    .min(6, { message: 'Senha muito Fraca' })
    .max(40, { message: '40 caracteres no máximo' }),
  ID_GRUPO: zod
    .string()
    .min(36, { message: 'Selecione um grupo válida' })
    .max(36, { message: 'Grupo incorreto!' }),
})
// eslint-disable-next-line prettier/prettier
export type CreateUserType = zod.infer<typeof CreateUserSchema>;
