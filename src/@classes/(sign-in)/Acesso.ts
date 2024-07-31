import { loginType } from '@/@types'

import { AdapterRequest } from '../RequestAdapter'
export class Acesso extends AdapterRequest {
  constructor() {
    super()
  }
  async login({ S_EMAIL, S_SENHA }: loginType) {
    return await this.request<{ token: string; message: string }>({
      method: 'post',
      url: 'auth/login',
      body: {
        S_EMAIL,
        S_SENHA,
      },
    })
  }
}
