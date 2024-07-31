import { useRouter } from 'next/navigation'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import * as z from 'zod'
export type ResponseReturn = {
  statusCode: number
  success: boolean
  body: {
    message: string
  }
  message: string
}
type UseGenericCreateFormProps<
  T extends FieldValues,
  R extends ResponseReturn,
> = {
  requestHandler: (data: T) => Promise<R>
  schema: z.ZodSchema<T>
}

export const useGenericCreateForm = <
  T extends FieldValues,
  R extends ResponseReturn,
>({
  requestHandler,
  schema,
}: UseGenericCreateFormProps<T, R>) => {
  const router = useRouter()
  const form = useForm<T>({
    mode: 'all',
    defaultValues: {} as DefaultValues<T>,
    resolver: zodResolver(schema),
  })

  const handleSubmit = async (data: T): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        requestHandler(data)
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
      loading: 'Criando...',
      success: (data) => {
        return data
      },
      error: (data) => {
        return data
      },
    })
  }

  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    submit: form.handleSubmit(handleSubmit),
  }
}
