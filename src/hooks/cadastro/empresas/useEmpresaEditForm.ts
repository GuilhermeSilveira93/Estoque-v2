import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { atualizarEmpresaParam } from '@/@actions/cadastros/empresas/atualizarEmpresa'
import { EditEmpresaSchema, EditEmpresaType } from '@/@schemas'
import { EmpresaType } from '@/@types/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
export type useEmpresaEditFormProps = {
  empresa: EmpresaType
  // eslint-disable-next-line no-unused-vars
  atualizarEmpresa: ({ data, ID_EMPRESA }: atualizarEmpresaParam) => Promise<{
    statusCode: number
    success: boolean
    body: { message: string }
    message: string
  }>
}
export const useEmpresaEditForm = ({
  empresa,
  atualizarEmpresa,
}: useEmpresaEditFormProps) => {
  const router = useRouter()
  const form = useForm<EditEmpresaType>({
    mode: 'all',
    defaultValues: {
      S_NOME: empresa.S_NOME,
      S_ATIVO: empresa.S_ATIVO === 'S',
    },
    resolver: zodResolver(EditEmpresaSchema),
  })
  const t = useTranslations('REQUESTS')
  const updateEmpresa = async (data: EditEmpresaType): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        atualizarEmpresa({ ID_EMPRESA: empresa.ID_EMPRESA, data })
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
        return t(data as 'COMPANIE.ALTERSUCCESS')
      },
      error: (data) => {
        return data
      },
    })
  }
  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    updateEmpresa: form.handleSubmit(updateEmpresa),
  }
}
