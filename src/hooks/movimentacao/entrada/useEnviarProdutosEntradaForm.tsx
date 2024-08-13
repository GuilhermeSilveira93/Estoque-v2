'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { submitEntradaLote } from '@/@actions/movimentacao/submitEntradaLote'
import { Lote } from '@/@classes/Lote'
import { LimparEntrada } from '@/@Reducers/entrada/ActionSetEntrada'
import {
  FormEnviarProdutoSchema,
  FormEnviarProdutoSchemaType,
} from '@/@schemas/movimentacao/entrada/FormEnviarProdutoEntradaSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { useProdutosEntrada } from './useProdutosEntrada'

export const useEnviarProdutosEntradaForm = () => {
  const { entrada, setEntrada } = useProdutosEntrada()
  const router = useRouter()
  const form = useForm<FormEnviarProdutoSchemaType>({
    mode: 'all',
    defaultValues: {
      ID_FORNECEDOR: '',
    },
    resolver: zodResolver(FormEnviarProdutoSchema),
  })
  const onSubmit = async (data: FormEnviarProdutoSchemaType) => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        submitEntradaLote({ data: entrada, ID_FORNECEDOR: data.ID_FORNECEDOR })
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
      loading: 'Enviando solicitação...',
      success: (data) => {
        return data
      },
      error: (data) => {
        return data
      },
    })
    form.reset()
  }
  return { form, onSubmit: form.handleSubmit(onSubmit) }
}
