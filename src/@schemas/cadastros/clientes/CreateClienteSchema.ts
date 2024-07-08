import * as zod from 'zod';

export const CreateClienteSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Nome do Cliente' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    ID_EMPRESA: zod.string()
    .min(1, { message: 'Selecione uma empresa' })
    .max(4, { message: 'empresa incorreta!' })
});

// eslint-disable-next-line prettier/prettier
export type CreateClienteType = zod.infer<typeof CreateClienteSchema>