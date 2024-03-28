'use server'
import { loginType } from '@/@types/LoginZod'
import { SetCookie } from '@/utils'
import { http } from '@/utils/httpAxios'
import { AxiosError } from 'axios'

export const LoginAction = async (dados: loginType) => {
  const { S_EMAIL, S_SENHA } = dados
  try {
    return await http
      .post('auth/login', {
        S_EMAIL,
        S_SENHA
      })
      .then((res) => {
        const { token, ...rest } = res.data
        if (token) {
          SetCookie('token', token)
          return rest
        }
        return rest
      })
      .catch((errors: AxiosError) => {
        return errors.response?.data
      })
  } catch (e) {
    return false
  }
}
