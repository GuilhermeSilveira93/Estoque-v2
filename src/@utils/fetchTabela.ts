import { HomeProps } from '@/@types'
import { Produto } from '@/@types/api'
import { api } from '@/@utils'

export const fetchTabela = async ({
  searchParams
}: HomeProps): Promise<Produto[]> => {
  const { ID: ID_PRODUTO, S_ATIVO, Search } = searchParams
  return await api
    .get('/produto/tabela', { params: { S_ATIVO, ID_PRODUTO, Search } })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      return []
    })
}