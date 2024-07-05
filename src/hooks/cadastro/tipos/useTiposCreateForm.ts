import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { CreateTipoSchema, CreateTipoType } from '@/@schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useTipoCreateFormProps = {
  // eslint-disable-next-line no-unused-vars
  criarTipo: (data: CreateTipoType) => Promise<{
    statusCode: number,
    success: boolean,
    body: { message: string },
    message: string
  }>
};
export const useTipoCreateForm = ({ criarTipo }: useTipoCreateFormProps) => {
  const router = useRouter();
  const form = useForm<CreateTipoType>({
    mode: 'all',
    defaultValues: {
      S_NOME: ''
    },
    resolver: zodResolver(CreateTipoSchema)
  });
  const createTipo = async (data: CreateTipoType): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        criarTipo(data)
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
      loading: 'Criando Tipo...',
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
    createTipo: form.handleSubmit(createTipo)
  };
};
