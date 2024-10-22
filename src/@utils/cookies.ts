'use server'
import { cookies } from 'next/headers'
export const SetCookie = async (key: string, value: string) => {
  const storage = await cookies()
  storage.set(key, value, { sameSite: 'lax', path: '/' })
}
export const token = async () => {
  const store = await cookies()
  return store.get('token')?.value
}
