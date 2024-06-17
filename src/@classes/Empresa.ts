import { EditEmpresaType } from '@/@schemas';
import { EmpresaType } from '@/@types/api';
import { EmpresaPageProps } from '@/app/(private)/(cadastros)/empresas/page';

import { AdapterRequest } from './RequestAdapter';
type attEmpresaParams = {
  ID_EMPRESA: number,
  data: EditEmpresaType
};
export class Empresa extends AdapterRequest {
  constructor() {
    super();
  }
  async getAll({ searchParams }: EmpresaPageProps) {
    const { ID_EMPRESA, S_ATIVO, Search, Page, LimitPerPage } = searchParams;
    try {
      return await this.request<{ data: EmpresaType[], total: number }>({
        method: 'get',
        url: '/empresa',
        params: {
          S_ATIVO,
          ID_EMPRESA,
          Search,
          Page,
          LimitPerPage
        }
      });
    } catch (error) {
      return { body: { data: [], total: 0 }, statusCode: 204 };
    }
  }
  async attEmpresa({ ID_EMPRESA, data }: attEmpresaParams) {
    try {
      return await this.request<{ message: string }>({
        method: 'patch',
        url: '/empresa',
        params: {
          ID_EMPRESA,
          ...data
        }
      });
    } catch (error) {
      return { statusCode: 404, body: { message: JSON.stringify(error) } };
    }
  }
}
