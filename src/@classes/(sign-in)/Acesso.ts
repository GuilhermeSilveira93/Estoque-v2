import { loginType } from "@/@types";

import { HttpClient } from "../RequestAdapter";
interface AcessoInterface {
  login: ({S_EMAIL,S_SENHA}: loginType) => Promise<{statusCode: number, body: {token:string, message: string}}>
}
export class Acesso implements AcessoInterface{
  constructor(readonly httpClient: HttpClient){}
  async login({S_EMAIL,S_SENHA}: loginType):Promise<{statusCode: number, body: {token:string, message: string}}>{
    return await this.httpClient.request({
      method: 'post',
      url: 'auth/login',
      body: {
        S_EMAIL,
        S_SENHA
      }
    });
  }
}