export type userTokenPayLoad = {
  sub: string,
  ID_USUARIO: string,
  S_NOME: string,
  ID_GRUPO: string,
  st_grupo: { N_NIVEL: number },
  iat: number,
  exp: number
};
