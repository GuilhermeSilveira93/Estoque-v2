export type Usuario = {
  ID_USUARIO: number,
  S_NOME: string,
  S_EMAIL: string,
  S_SENHA: string,
  ID_GRUPO: number,
  D_EXPIRACAO_SENHA: string,
  S_ATIVO: 'S' | 'N',
  S_CHAVE: string,
  N_TENTATIVAS_LOGIN?: number
};
export type UsuarioKeys = keyof Usuario;
