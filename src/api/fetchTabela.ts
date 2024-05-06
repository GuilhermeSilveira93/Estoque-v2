import { HomeProps } from '@/@types';
import { Produto } from '@/@types/api';

import { api } from './api';

export const fetchTabela = async ({
  searchParams
}: HomeProps): Promise<{ data: Produto[], total: number }> => {
  const { ID_PRODUTO, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
  return await api
    .get('/produto/tabela', {
      params: {
        S_ATIVO,
        ID_PRODUTO,
        Search,
        Page,
        LimitPerPage
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });
};
