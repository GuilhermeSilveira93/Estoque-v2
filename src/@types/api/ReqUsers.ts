export type UsuarioType = {
  ID_USUARIO: number,
  S_NOME: string,
  S_EMAIL: string,
  ID_GRUPO: number,
  D_EXPIRACAO_SENHA: string,
  S_ATIVO: 'S' | 'N',
  N_TENTATIVAS_LOGIN?: number,
  st_grupo: {
    N_NIVEL: number
  }
};
export type UsuarioKeys = keyof UsuarioType;
