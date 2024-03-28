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
      .then(async (res: { data: { message: string; code: number } }) => {
        console.log(res)
        /*         if (res.data.token) {
          SetCookie('token', res.data.token)
          return res.data
        } */
        return res.data
      })
      .catch((errors: AxiosError) => {
        console.log(errors.response?.data)
        return errors.response?.data
      })
  } catch (e) {
    return false
  }
}
