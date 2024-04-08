import { cookies } from 'next/headers'

import { userTokenPayLoad } from '@/@types'

export const getUserCurrent = async (): Promise<userTokenPayLoad> => {
  const token = cookies().get('token')?.value
  if (token) {
    const user: userTokenPayLoad = JSON.parse(
      Buffer.from(token.split('.')[1]!, 'base64').toString('utf-8')
    )
    return { ...user }
  }
  return { exp: 0, iat: 0, ID_GRUPO: 0, ID_USUARIO: 0, S_NOME: '', sub: 0 }
}
