import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { CreateTipoSchema, CreateTipoType } from '@/@schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useTipoCreateFormProps = {
  criarTipo: (data: CreateTipoType) => Promise<{
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
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        criarTipo(data)
          .then((res) => {
            router.refresh();
            resolve(res);
          })
          .catch((err) => {
            reject({ message: err });
          });
      });
    };
    toast.promise(response, {
      loading: 'Criando Tipo...',
      success: (data) => {
        return data.message;
      },
      error: (data) => {
        return data.message;
      }
    });
  };
  return {
    form,
    isSubmitting: form.formState.isSubmitting,
    createTipo: form.handleSubmit(createTipo)
  };
};
