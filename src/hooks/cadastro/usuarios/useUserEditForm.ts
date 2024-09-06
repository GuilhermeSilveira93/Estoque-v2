import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { atualizarUsuarioParam } from '@/@actions'
import {
  EditUserSchema,
  EditUserType,
} from '@/@schemas/cadastros/usuarios/EditUserSchema'
import { UsuarioType } from '@/@types/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
export type useUserEditFormProps = {
  usuario: UsuarioType

  // eslint-disable-next-line no-unused-vars
  atualizarUsuario: ({ data, ID_USUARIO }: atualizarUsuarioParam) => Promise<{
    statusCode: number
    success: boolean
    body: { message: string }
    message: string
  }>
}
export const useUserEditForm = ({
  usuario,
  atualizarUsuario,
}: useUserEditFormProps) => {
  const router = useRouter()
  const t = useTranslations('REQUESTS')
  const form = useForm<EditUserType>({
    mode: 'all',
    defaultValues: {
      S_NOME: usuario.S_NOME,
      S_ATIVO: usuario.S_ATIVO === 'S',
      ID_GRUPO: usuario.ID_GRUPO,
      S_EMAIL: usuario.S_EMAIL,
      S_SENHA: undefined,
    },
    resolver: zodResolver(EditUserSchema),
  })
  const updateUser = async (data: EditUserType): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        atualizarUsuario({ ID_USUARIO: usuario.ID_USUARIO, data })
          .then((res) => {
            if (!res.success) {
              throw new Error(res.message)
            }
            resolve(res.body.message)
            router.refresh()
          })
          .catch((err) => {
            reject(err.message)
          })
      })
    }
    toast.promise(response, {
      loading: t('SENDREQ'),
      success: (data) => {
        return t(data as 'USER.ALTERSUCCESS')
      },
      error: (data) => {
        return t(data as 'USER.ALTERSUCCESS')
      },
    })
  }
  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    updateUser: form.handleSubmit(updateUser),
  }
}
