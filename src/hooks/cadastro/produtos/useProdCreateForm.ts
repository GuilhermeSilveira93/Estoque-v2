import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import {
  CreateProdSchema,
  CreateProdType
} from '@/@schemas/cadastros/produtos/CreateProdSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useProdCreateFormProps = {
  criarProduto: (data: CreateProdType) => Promise<{
    statusCode: number,
    success: boolean,
    body: { message: string },
    message: string
  }>
};
export const useProdCreateForm = ({ criarProduto }: useProdCreateFormProps) => {
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
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        criarProduto(data)
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
    createProd: form.handleSubmit(createProd)
  };
};
