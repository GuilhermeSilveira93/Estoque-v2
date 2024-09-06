import { CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema'
import { EditUserType } from '@/@schemas/cadastros/usuarios/EditUserSchema'
import { UsuarioType } from '@/@types/api'
import { UserPageProps } from '@/app/[locale]/(private)/(cadastros)/usuarios/page'

import { AdapterRequest } from './RequestAdapter'
type getAllBodyType = {
  data: UsuarioType[]
  total: number
}
export class Usuario extends AdapterRequest {
  constructor() {
    super()
  }
  async getAll({ searchParams }: Pick<UserPageProps, 'searchParams'>) {
    return await this.request<getAllBodyType>({
      method: 'get',
      url: 'usuario',
      params: searchParams,
    })
  }
  async atualizarUsuario({
    ID_USUARIO,
    data,
  }: {
    ID_USUARIO: string
    data: EditUserType
  }) {
    return await this.request<{ message: string }>({
      method: 'patch',
      url: `usuario/${ID_USUARIO}`,
      body: data,
    })
  }
  async createUser({ data }: { data: CreateUserType }) {
    return await this.request<{ message: string }>({
      method: 'post',
      url: `usuario`,
      body: {
        ...data,
        S_NOME: data.S_NOME.toUpperCase(),
      },
    })
  }
}
