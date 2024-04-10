import { HomeProps } from '@/@types'
import { Produto } from '@/@types/api'
import { api } from '@/@utils'

export const fetchTabela = async ({
  searchParams
}: HomeProps): Promise<Produto[]> => {
  const { ID: ID_PRODUTO, S_ATIVO } = searchParams
  return await api
    .get('/produto/tabela', { params: { S_ATIVO, ID_PRODUTO } })
    .then((res) => {
      return res.data
    })
    .catch((err) => [])
}
