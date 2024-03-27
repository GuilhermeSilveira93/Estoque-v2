import { cookies } from "next/headers";
export type userTokenPayLoad = {
  sub: number;
  ID_USUARIO: number;
  S_NOME: string;
  ID_GRUPO: number;
  iat: number;
  exp: number;
};
export const UsuarioAtual = (): userTokenPayLoad | boolean => {
  const token = cookies().get('token')?.value
  if (token) {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString("utf-8"))
  }
    return false
  
}