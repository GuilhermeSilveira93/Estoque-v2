'use server'
import { cookies } from 'next/headers'

import { userTokenPayLoad } from '@/@types'

export const getUserCurrent = async (): Promise<userTokenPayLoad> => {
  const token = await cookies().get('token')?.value
  if (token) {
    const user: userTokenPayLoad = JSON.parse(
      Buffer.from(token.split('.')[1]!, 'base64').toString('utf-8')
    )
    return { ...user }
  }
  return {
    exp: 0,
    iat: 0,
    ID_GRUPO: '',
    ID_USUARIO: '',
    S_NOME: '',
    sub: '',
    st_grupo: { N_NIVEL: 999 },
  }
}
