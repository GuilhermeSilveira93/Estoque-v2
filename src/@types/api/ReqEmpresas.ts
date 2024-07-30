export type EmpresaType = {
  ID_EMPRESA: string,
  S_NOME: string,
  D_DATA: Date,
  S_ATIVO: 'S' | 'N'
};
export type EmpresasKeys = keyof EmpresaType;
