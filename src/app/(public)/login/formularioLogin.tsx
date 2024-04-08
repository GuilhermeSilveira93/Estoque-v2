'use client'
import { useRouter } from 'next/navigation'
import React, { ReactComponentElement, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input } from '@/components/ui'

import { loginSchema, loginType } from '@/@types/LoginZod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { LoginAction } from './actions/loginAction'
import LoadingDots from './loading-dots'

export default function Form({
  children,
  className
}: {
  children: ReactComponentElement<'image'>
  className: string
}) {
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
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        LoginAction(dados)
          .then((res) => {
            if (res.code === 202) {
              resolve(res)
              router.push('/')
            }
            reject(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
    toast.promise(response, {
      loading: 'Consultando seu usuário.',
      success: (data) => {
        return data.message
      },
      error: (data) => {
        return data.message
      }
    })
    setLoading(false)
  }
  return (
    <div>
      <form
        /*@ts-expect-error: tipagem está correta.*/
        action={handleSubmit(login)}
        className={className}
      >
        {children}
        <div className="mb-8">
          <label className="text-lg" htmlFor="S_EMAIL">
            E-mail:
          </label>
          <Input
            className="w-full rounded-3xl p-1 text-colors-light-texto bg-colors-light-background focus:border-colors-dark-terciaria border-2 focus:outline-none dark:text-colors-dark-texto dark:bg-colors-dark-background dark:focus:border-colors-dark-terciaria"
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
          <Input
            className="w-full rounded-3xl p-1 text-colors-light-texto bg-colors-light-background focus:border-colors-dark-terciaria border-2 focus:outline-none dark:text-colors-dark-texto dark:bg-colors-dark-background dark:focus:border-colors-dark-terciaria"
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
          variant={'outline'}
          value={'Login'}
          disabled={loading}
          className="rounded-xl"
        >
          {loading ? <LoadingDots /> : <p>Login</p>}
        </Button>
      </form>
    </div>
  )
}
