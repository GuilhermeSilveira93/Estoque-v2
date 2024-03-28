'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'

import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import * as zod from 'zod'

import { LoginAction } from './actions/loginAction'
import LoadingDots from './loading-dots'

const loginSchema = zod.object({
  S_EMAIL: zod
    .string()
    .min(1, { message: 'Digite um e-mail' })
    .max(150, { message: 'Tamanho máximo do e-mail é 150 caracteres.' }),
  S_SENHA: zod
    .string()
    .min(1, { message: 'Digite sua senha' })
    .max(150, { message: 'Tamanho máximo da senha é 150 caracteres.' })
})
export type loginType = zod.infer<typeof loginSchema>
export default function Form() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginType>({
    defaultValues: { S_EMAIL: '', S_SENHA: '' },
    resolver: zodResolver(loginSchema)
  })
  const router = useRouter()
  const login = async (dados: loginType) => {
    setLoading(true)
    const response = () =>
      new Promise((resolve, reject) => {
        LoginAction(dados)
          .then((res) => {
            console.log('aqui')
            console.log(res)
            // if (res.code === 202) {
            resolve(res)
            // }
            // reject(res)
          })
          .catch((err) => {
            console.log('aqui2')
            reject(err)
          })
      })
    toast.promise(response, {
      loading: 'Loading...',
      success: (data) => {
        return `${data}`
      },
      error: (data) => {
        return `${data}`
      }
    })
    setLoading(false)
    // router.push("/");
  }
  return (
    <>
      {/*@ts-expect-error: tipagem está correta.*/}
      <form action={handleSubmit(login)} className="w-full text-center">
        <div className="mb-8">
          <label className="text-lg" htmlFor="S_EMAIL">
            E-mail:
          </label>
          <input
            className="w-full rounded-3xl p-1 dark:text-white dark:bg-gray-700 border-2 focus:outline-none focus:border-colors-dark-orange"
            {...register('S_EMAIL')}
            name="S_EMAIL"
            type="email"
            max={150}
          />
          {errors.S_EMAIL && (
            <p className="text-red-600">{errors.S_EMAIL.message}</p>
          )}
        </div>
        <div className="mb-12">
          <label className="text-lg w-12" htmlFor="S_SENHA">
            Senha:
          </label>
          <input
            className="w-full rounded-3xl p-1 dark:text-white dark:bg-gray-700 border-2 focus:outline-none focus:border-colors-dark-orange"
            {...register('S_SENHA')}
            name="S_SENHA"
            max={150}
            type="password"
          />
          {errors.S_SENHA && (
            <p className="text-red-600">{errors.S_SENHA.message}</p>
          )}
        </div>
        <Button
          type="submit"
          value={'Login'}
          variant={'destructive'}
          disabled={loading}
          className="rounded-xl bg-colors-dark-orange border-colors-dark-orange hover:bg-colors-dark-orangeHover"
        >
          {loading ? <LoadingDots /> : <p>Login</p>}
        </Button>
      </form>
    </>
  )
}
