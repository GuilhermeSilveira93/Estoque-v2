import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

import { SaidaRelatorioAction } from '@/@actions/relatorios/SaidaRelatorioAction'
import { RelatorioSaidaType } from '@/@classes/Relatorio'
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
  const t = useTranslations('RELATORIO')
  const onSubmit = async (data: FormRelatorioSaidaSchemaType) => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        SaidaRelatorioAction(data)
          .then((res) => {
            if (!res.success) {
              reject(res.message)
            }
            const keyofs = res.body?.[0] ? Object.keys(res.body[0]) : []
            const headers = keyofs.flatMap((header) =>
              t(header as 'DATA')
            ) as (keyof RelatorioSaidaType)[]
            RelatorioMovimentacaoExcel<RelatorioSaidaType>({
              data: res.body,
              headers,
              name: t('SAIDA.TITLE'),
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
