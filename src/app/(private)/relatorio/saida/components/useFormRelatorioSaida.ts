import { useForm } from 'react-hook-form'

import { SaidaRelatorioAction } from '@/@actions/relatorios/SaidaRelatorioAction'
import { RelatorioMovimentacaoExcel } from '@/@Relatorios/RelatorioMovimentacao'
import {
  FormRelatorioSaidaSchemaType,
  FormRelatorioSaidaSchema,
} from '@/@schemas/'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
export const useFormRelatorioSaida = () => {
  const fromData = new Date().setDate(new Date().getDate() - 10)
  const form = useForm<FormRelatorioSaidaSchemaType>({
    mode: 'all',
    resolver: zodResolver(FormRelatorioSaidaSchema),
    defaultValues: {
      D_DATA: {
        D_INICIO: new Date(fromData),
        D_FIM: new Date(),
      },
    },
  })
  const onSubmit = async (data: FormRelatorioSaidaSchemaType) => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        SaidaRelatorioAction(data)
          .then((res) => {
            if (!res.success) {
              reject(res.message)
            }
            RelatorioMovimentacaoExcel({
              data: res.body,
              name: 'Relatório de Saida',
            })
            resolve(res.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
    toast.promise(response, {
      loading: 'Gerando Relatório...',
      success: (data) => {
        return data
      },
      error: (data) => {
        return data
      },
    })
  }
  return { form, onSubmit: form.handleSubmit(onSubmit) }
}
