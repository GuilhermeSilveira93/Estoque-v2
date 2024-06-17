import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import {
  CreateProdSchema,
  CreateProdType
} from '@/@schemas/cadastros/produtos/CreateProdSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useEmpresaCreateFormProps = {
  criarProduto: (data: CreateProdType) => Promise<{
    message: string
  }>
};
export const useEmpresaCreateForm = ({
  criarProduto
}: useEmpresaCreateFormProps) => {
  const router = useRouter();
  const form = useForm<CreateProdType>({
    mode: 'all',
    defaultValues: {
      ID_TIPO: '9',
      N_SERIAL: '',
      S_NOME: ''
    },
    resolver: zodResolver(CreateProdSchema)
  });
  const createProd = async (data: CreateProdType): Promise<void> => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        criarProduto(data)
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
    createProd: form.handleSubmit(createProd)
  };
};
