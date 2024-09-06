'use client'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui'

import { DeleteCookie } from '@/@actions/LogOut'
import { toast } from 'sonner'
export const LogoutButton = () => {
  const t = useTranslations('SIDEBAR')
  const router = useRouter()
  const LogOut = async () => {
    const deleteCookie = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        DeleteCookie('token')
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
          .finally(() => {
            router.push('/login')
          })
      })
    }
    toast.promise(deleteCookie, {
      loading: t('LEAVING'),
      success: (data) => {
        return t(data.message as 'LOGGEDOUT')
      },
      error: (data) => {
        return data.message
      },
    })
  }

  return (
    <Button
      className="w-full text-secondary-foreground"
      variant={'secondary'}
      onClick={LogOut}
    >
      {t('LOGOUT')}
    </Button>
  )
}
