import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { CreateEmpresaSchema, CreateEmpresaType } from '@/@schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useEmpresaCreateFormProps = {
  criarEmpresa: (data: CreateEmpresaType) => Promise<{
    statusCode: number,
    success: boolean,
    body: { message: string },
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
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        criarEmpresa(data)
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
      loading: 'Criando Produto...',
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
    createEmpresa: form.handleSubmit(createEmpresa)
  };
};
