import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { atualizarFornecedorParam } from '@/@actions'
import { EditEmpresaSchema, EditEmpresaType } from '@/@schemas'
import { FornecedorType } from '@/@types/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
export type useFornecedorEditFormProps = {
  fornecedor: FornecedorType
  atualizarFornecedor: ({
    // eslint-disable-next-line no-unused-vars
    data,
    // eslint-disable-next-line no-unused-vars
    ID_FORNECEDOR,
  }: atualizarFornecedorParam) => Promise<{
    statusCode: number
    success: boolean
    body: { message: string }
    message: string
  }>
}
export const useFornecedorEditForm = ({
  fornecedor,
  atualizarFornecedor,
}: useFornecedorEditFormProps) => {
  const router = useRouter()
  const form = useForm<EditEmpresaType>({
    mode: 'all',
    defaultValues: {
      S_NOME: fornecedor.S_NOME,
      S_ATIVO: fornecedor.S_ATIVO === 'S',
    },
    resolver: zodResolver(EditEmpresaSchema),
  })
  const t = useTranslations('REQUESTS')
  const updateFornecedor = async (data: EditEmpresaType): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        atualizarFornecedor({ ID_FORNECEDOR: fornecedor.ID_FORNECEDOR, data })
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
    updateFornecedor: form.handleSubmit(updateFornecedor),
  }
}
