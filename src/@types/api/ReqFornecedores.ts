export type FornecedorType = {
  ID_FORNECEDOR: string
  S_NOME: string
  S_ATIVO: 'S' | 'N'
}
export type FornecedorKeys = keyof FornecedorType
