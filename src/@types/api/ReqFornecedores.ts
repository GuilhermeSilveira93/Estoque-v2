export type FornecedorType = {
  ID_FORNECEDOR: number,
  S_NOME: string,
  S_ATIVO: 'S' | 'N'
};
export type FornecedorKeys = keyof FornecedorType;
