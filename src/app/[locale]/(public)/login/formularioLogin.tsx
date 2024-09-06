'use client'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input } from '@/components/ui'

import { LoginAction } from '@/@actions/loginAction'
import { loginSchema, loginType } from '@/@types/LoginZod'
import logoProd from '@/images/LogoProd.png'
import logoProdDark from '@/images/LogoProdDark.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

export default function Form({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false)
  const t = useTranslations('LOGIN')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    defaultValues: { S_EMAIL: '', S_SENHA: '' },
    resolver: zodResolver(loginSchema),
  })

  const router = useRouter()
  const { theme } = useTheme()
  const login = async (dados: loginType) => {
    setLoading(true)
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        LoginAction(dados)
          .then((res) => {
            if (!res.success) {
              reject(res.message)
            }
            resolve(res.message)
            router.push('/')
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
    toast.promise(response, {
      loading: t('LOOKING_USER'),
      success: (data) => {
        return t(data as 'AUTH_SUCCESS')
      },
      error: (data) => {
        return t(data as 'INVALID_PASSWORD' | 'INVALID_EMAIL')
      },
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
        <Image
          src={theme === 'light' ? logoProdDark : logoProd}
          alt="Login Icon"
          loading="lazy"
        />
        <div className="mb-8">
          <label className="text-lg" htmlFor="S_EMAIL">
            {t('EMAIL')}
          </label>
          <Input
            className="w-full rounded-3xl border-2 p-1 focus:outline-none"
            {...register('S_EMAIL')}
            name="S_EMAIL"
            type="email"
            max={150}
          />
          {errors.S_EMAIL && (
            <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
              {t(
                errors.S_EMAIL.message as 'MAX_LENGHT_EMAIL' | 'REQUIRE_EMAIL'
              )}
            </p>
          )}
        </div>
        <div className="mb-12">
          <label className="w-12 text-lg" htmlFor="S_SENHA">
            {t('PASSWORD')}
          </label>
          <Input
            className="w-full rounded-3xl border-2 p-1 focus:outline-none"
            {...register('S_SENHA')}
            name="S_SENHA"
            max={150}
            type="password"
          />
          {errors.S_SENHA && (
            <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
              {t(
                errors.S_SENHA.message as
                  | 'MAX_LENGHT_PASSWORD'
                  | 'REQUIRE_PASSWORD'
              )}
            </p>
          )}
        </div>
        <Button
          type="submit"
          value={'Login'}
          disabled={loading}
          className="w-full text-primary-foreground"
        >
          <p>Login</p>
        </Button>
      </form>
    </div>
  )
}
