export type Produto = {
  ID_PRODUTO: number,
  produto: string,
  quantidade: number,
  S_ATIVO: string
};
export type ProdutoKeys = keyof Produto;
