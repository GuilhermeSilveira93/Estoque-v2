'use server';
import { Empresa } from '@/@classes/Empresa';
import { EditEmpresaType } from '@/@schemas';
export type atualizarEmpresaParam = {
  data: EditEmpresaType,
  ID_EMPRESA: string
};
export const atualizarEmpresa = async ({
  data,
  ID_EMPRESA
}: atualizarEmpresaParam) => {
  return await new Empresa().attEmpresa({
    ID_EMPRESA,
    data
  });
};
