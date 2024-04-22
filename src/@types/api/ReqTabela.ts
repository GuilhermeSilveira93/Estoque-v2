export type Produto = {
  ID_PRODUTO: number,
  produto: string,
  quantidade: number
};
export type ProdutoKeys = keyof Produto;
