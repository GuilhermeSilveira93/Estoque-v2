export type Grupo = {
  ID_GRUPO: number,
  S_NOME: string,
  N_NIVEL: number,
  S_ATIVO: 'S' | 'N'
};
export type GrupoKeys = keyof Grupo;
