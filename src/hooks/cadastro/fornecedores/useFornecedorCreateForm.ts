import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { CreateFornecedorSchema, CreateFornecedorType } from '@/@schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useFornecedorCreateFormProps = {
  criarFornecedor: (data: CreateFornecedorType) => Promise<{
    statusCode: number,
    success: boolean,
    body: { message: string },
    message: string
  }>
};
export const useFornecedorCreateForm = ({
  criarFornecedor
}: useFornecedorCreateFormProps) => {
  const router = useRouter();
  const form = useForm<CreateFornecedorType>({
    mode: 'all',
    defaultValues: {
      S_NOME: ''
    },
    resolver: zodResolver(CreateFornecedorSchema)
  });
  const createFornecedor = async (
    data: CreateFornecedorType
  ): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        criarFornecedor(data)
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
      loading: 'Criando Fornecedor...',
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
    createFornecedor: form.handleSubmit(createFornecedor)
  };
};
