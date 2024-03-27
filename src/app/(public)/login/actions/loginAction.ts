'use server'
import { SetCookie } from '@/utils'
import { http } from '@/utils/httpAxios'
import { AxiosError } from 'axios'

import { loginType } from '../formularioLogin'

export const LoginAction = async (dados: loginType) => {
  const { S_EMAIL, S_SENHA } = dados
  try {
    return await http
      .post('/auth/login', {
        S_EMAIL,
        S_SENHA
      })
      .then(async (res) => {
        if (res) {
          SetCookie('token', res.data.token)
          return res.data
        }
      })
      .catch((errors: AxiosError) => {
        return errors.response?.data
      })
  } catch (e) {
    return false
  }
}
