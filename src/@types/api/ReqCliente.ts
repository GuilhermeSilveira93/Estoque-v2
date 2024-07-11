export type ClienteType = {
  ID_CLIENTE: number,
  data: {
    S_NOME: string,
    S_ATIVO: 'S' | 'N',
    S_EMPRESA: string
  }
};
export type ClienteTypeKeys = keyof ClienteType;