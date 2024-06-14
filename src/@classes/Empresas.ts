import { EmpresasPageProps } from '@/app/(private)/(cadastros)/empresas/page';

import { AdapterRequest } from './RequestAdapter';
type getAllEmpresas = {
  ID_EMPRESA: number,
  S_NOME: string,
  D_DATA: Date,
  S_ATIVO: 'S' | 'N'
};
export class Empresas extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll({ searchParams }: EmpresasPageProps) {
    return await this.request<{ data: getAllEmpresas[], total: number }>({
      method: 'get',
      url: '/empresa',
      params: searchParams
    });
  }
}
