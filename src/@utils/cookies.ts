'use server'
import { cookies } from 'next/headers'
export const SetCookie = (key: string, value: string) => {
  const storage = cookies()
  storage.set(key, value, { sameSite: 'lax', path: '/' })
}
export const token = () => {
  const store = cookies()
  return store.get('token')?.value
}
