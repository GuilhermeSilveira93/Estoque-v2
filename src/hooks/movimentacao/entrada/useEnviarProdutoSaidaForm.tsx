'use client'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { submitSaidaLote } from '@/@actions/movimentacao'
import { LimparEntrada } from '@/@Reducers/entrada/ActionSetEntrada'
import {
  FormEnviarProdutoSchema,
  FormEnviarProdutoSchemaType,
} from '@/@schemas/movimentacao/entrada/FormEnviarProdutoSaidaSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { useProdutosEntrada } from './useProdutosEntrada'

export const useEnviarProdutosSaidaForm = () => {
  const { entrada, setEntrada } = useProdutosEntrada()
  const router = useRouter()
  const t = useTranslations('REQUESTS')
  const form = useForm<FormEnviarProdutoSchemaType>({
    mode: 'all',
    defaultValues: {
      ID_EMPRESA: '',
      ID_CLIENTE: '',
    },
    resolver: zodResolver(FormEnviarProdutoSchema),
  })
  const onSubmit = async (data: FormEnviarProdutoSchemaType) => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        submitSaidaLote({ data: entrada, ID_CLIENTE: data.ID_CLIENTE })
          .then((res) => {
            if (!res.success) {
              throw new Error(res.message)
            }
            resolve(res.body.message)
            setEntrada(LimparEntrada(null))
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
        return t(data as 'ENTRY.CREATESUCCESS')
      },
      error: (data) => {
        return data
      },
    })
    form.reset()
  }
  return { form, onSubmit: form.handleSubmit(onSubmit) }
}
