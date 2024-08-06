import { cookies } from 'next/headers'
export const SetCookie = (key: string, value: string) => {
  cookies().set(key, value, { sameSite: 'lax', path: '/' })
}
