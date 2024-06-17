import * as zod from 'zod';

export const EditEmpresaSchema = zod.object({
  S_NOME: zod
    .string()
    .min(1, { message: 'Edite o nome' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
    S_ATIVO: zod
    .boolean(),
});
export type EditEmpresaType = zod.infer<typeof EditEmpresaSchema>