import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { CreateEmpresaSchema, CreateEmpresaType } from '@/@schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useEmpresaCreateFormProps = {
  criarEmpresa: (data: CreateEmpresaType) => Promise<{
    message: string
  }>
};
export const useEmpresaCreateForm = ({
  criarEmpresa
}: useEmpresaCreateFormProps) => {
  const router = useRouter();
  const form = useForm<CreateEmpresaType>({
    mode: 'all',
    defaultValues: {
      S_NOME: ''
    },
    resolver: zodResolver(CreateEmpresaSchema)
  });
  const createEmpresa = async (data: CreateEmpresaType): Promise<void> => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        criarEmpresa(data)
          .then((res) => {
            router.refresh();
            resolve(res);
          })
          .catch((err) => {
            reject(JSON.stringify(err));
          });
      });
    };
    toast.promise(response, {
      loading: 'Criando Produto...',
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
    createEmpresa: form.handleSubmit(createEmpresa)
  };
};
