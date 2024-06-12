export type userTokenPayLoad = {
  sub: number,
  ID_USUARIO: number,
  S_NOME: string,
  ID_GRUPO: number,
  ST_GRUPO: { N_NIVEL: number },
  iat: number,
  exp: number
};
