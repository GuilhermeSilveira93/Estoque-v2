import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { atualizarClienteParam } from '@/@actions'
import { EditClienteType, EditTipoSchema, EditTipoType } from '@/@schemas'
import { ClienteType } from '@/@types/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
export type useClientesEditFormProps = {
  cliente: ClienteType
  // eslint-disable-next-line no-unused-vars
  atualizarCliente: ({ data, ID_CLIENTE }: atualizarClienteParam) => Promise<{
    statusCode: number
    success: boolean
    body: { message: string }
    message: string
  }>
}
export const useClienteEditForm = ({
  cliente,
  atualizarCliente,
}: useClientesEditFormProps) => {
  const router = useRouter()
  const form = useForm<EditClienteType>({
    mode: 'all',
    defaultValues: {
      S_NOME: cliente.data.S_NOME,
      S_ATIVO: cliente.data.S_ATIVO === 'S',
    },
    resolver: zodResolver(EditTipoSchema),
  })
  const t = useTranslations('REQUESTS')
  const updateCliente = async (data: EditTipoType): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        atualizarCliente({ ID_CLIENTE: cliente.ID_CLIENTE, data })
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
        return t(data as 'CLIENTE.CREATESUCCESS')
      },
      error: (data) => {
        return data
      },
    })
  }
  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    updateCliente: form.handleSubmit(updateCliente),
  }
}
