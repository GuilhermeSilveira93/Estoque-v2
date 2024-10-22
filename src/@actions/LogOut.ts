'use server'
import { cookies } from 'next/headers'

export const DeleteCookie = async (key: string) => {
  ;(await cookies()).delete(key)
  return { message: 'LOGGEDOUT' }
}
