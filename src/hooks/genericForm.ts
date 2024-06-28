import { useRouter } from 'next/navigation';
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import * as z from 'zod';

type RequestHandler<T, R> = (data: T) => Promise<R>;

export type useGenericFormProps<T, R> = {
  requestHandler: RequestHandler<T, R>,
  schema: z.ZodSchema<T>
};

export const useGenericForm = <T extends FieldValues, R>({
  requestHandler,
  schema
}: useGenericFormProps<T, R>) => {
  const router = useRouter();
  const form = useForm<T>({
    mode: 'all',
    defaultValues: {} as DefaultValues<T>,
    resolver: zodResolver(schema) // Use o zodResolver com o esquema fornecido
  });

  const handleSubmit = async (data: T): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        requestHandler(data)
          .then((res) => {
            if (!res.success) {
              throw new Error(res.message);
            }
            resolve(res.body.message);
            router.refresh();
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    };

    toast.promise(response, {
      loading: 'Criando...', // Ajuste a mensagem de loading
      success: (data) => {
        return data;
      },
      error: (data) => {
        return data;
      }
    });
  };

  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    submit: form.handleSubmit(handleSubmit)
  };
};
