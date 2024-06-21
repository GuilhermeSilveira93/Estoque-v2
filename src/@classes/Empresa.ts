import { CreateEmpresaType, EditEmpresaType } from '@/@schemas';
import { EmpresaType } from '@/@types/api';
import { EmpresaPageProps } from '@/app/(private)/(cadastros)/empresas/page';

import { AdapterRequest } from './RequestAdapter';
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
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
  async attEmpresa({
    ID_EMPRESA,
    data
  }: {
    ID_EMPRESA: number,
    data: EditEmpresaType
  }) {
    try {
      return await this.request<{ message: string }>({
        method: 'patch',
        url: `/empresa/${ID_EMPRESA}`,
        body: {
          ...data,
          S_NOME: data.S_NOME.toUpperCase()
        }
      });
    } catch (error) {
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
  async createEmp(data: CreateEmpresaType) {
    try {
      return await this.request<{ message: string }>({
        method: 'post',
        url: '/empresa',
        body: {
          S_NOME: data.S_NOME.toUpperCase()
        }
      });
    } catch (error) {
      throw new Error((error as Error).message as string, {
        cause: (error as Error).cause
      });
    }
  }
}
