'use server'

import { Cliente } from '@/@classes'

export const getClientForCompany = async ({
  empresaSelecionada,
}: {
  empresaSelecionada: string
}) => {
  return (await new Cliente().getForCompany({ ID_EMPRESA: empresaSelecionada }))
    .body.data
}
