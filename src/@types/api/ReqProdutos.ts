export type TabelaType = {
  ID_PRODUTO: number,
  produto: string,
  quantidade: number,
  S_ATIVO: string
};
export type TabelaTypeKeys = keyof TabelaType;

export type Produtos = {
  ID_PRODUTO: number,
  S_NOME: string,
  ID_TIPO: number,
  N_SERIAL: string,
  S_ATIVO: 'S' | 'N',
  ST_TIPO: {
    S_NOME: string
  }
};
export type ProdutosKeys = keyof Produtos;
