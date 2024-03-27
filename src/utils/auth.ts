type tokenPayLoad = {
  sub: number;
  ID_USUARIO: number;
  S_NOME: string;
  ID_GRUPO: number;
  iat: number;
  exp: number;
};
export const isTokenExpired = (exp: number) => {
    const clockTimestap: number = Math.floor(Date.now() / 1000);
    return clockTimestap > exp
};
