import { useForm } from 'react-hook-form'

import { EntradaRelatorioAction } from '@/@actions/relatorios/EntradaRelatorioAction'
import { RelatorioEntradaType } from '@/@classes/Relatorio'
import { RelatorioMovimentacaoExcel } from '@/@Relatorios/RelatorioMovimentacao'
import {
  FormRelatorioEntradaSchemaType,
  FormRelatorioEntradaSchema,
} from '@/@schemas/'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
export const useFormRelatorioEntrada = () => {
  const fromData = new Date().setDate(new Date().getDate() - 10)
  const form = useForm<FormRelatorioEntradaSchemaType>({
    mode: 'all',
    resolver: zodResolver(FormRelatorioEntradaSchema),
    defaultValues: {
      D_DATA: {
        D_INICIO: new Date(fromData),
        D_FIM: new Date(),
      },
    },
  })
  const onSubmit = async (data: FormRelatorioEntradaSchemaType) => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        EntradaRelatorioAction(data)
          .then((res) => {
            if (!res.success) {
              reject(res.message)
            }
            RelatorioMovimentacaoExcel<RelatorioEntradaType>({
              data: res.body,
              name: 'Relatório de Entrada',
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
