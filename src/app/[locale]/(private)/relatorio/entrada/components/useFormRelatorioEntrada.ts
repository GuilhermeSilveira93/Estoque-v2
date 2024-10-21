import { useTranslations } from 'next-intl'
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
  const t = useTranslations('RELATORIO')
  const d = useTranslations('REQUESTS')

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
            const keyofs = res.body?.[0] ? Object.keys(res.body[0]) : []
            const headers = keyofs.flatMap((header) =>
              t(header as 'DATA')
            ) as (keyof RelatorioEntradaType)[]
            RelatorioMovimentacaoExcel<RelatorioEntradaType>({
              data: res.body,
              headers,
              name: t('ENTRADA.TITLE'),
            })
            resolve(res.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
    toast.promise(response, {
      loading: t('GENERATINGREPORT'),
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
