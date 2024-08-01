import { useForm } from 'react-hook-form'

import {
  FormRelatorioEntradaSchemaType,
  FormRelatorioEntradaSchema,
} from '@/@schemas/'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
export const useFormRelatorioEntrada = () => {
  const fromData = new Date().setDate(new Date().getDate() - 10)
  // fromData = new Date(fromData).setHours(0, 0, 0, 0)
  const toData = new Date().setHours(0, 0, 0, 0)
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
    console.log(data)
    /* toast.promise(response, {
      loading: 'Atualizando Cliente...',
      success: (data) => {
        return data
      },
      error: (data) => {
        return data
      },
    }) */
  }
  return { form, onSubmit: form.handleSubmit(onSubmit) }
}
