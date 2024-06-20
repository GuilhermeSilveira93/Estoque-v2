import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { CreateEmpresaSchema } from '@/@schemas';
import {
  CreateFornecedorSchema,
  CreateFornecedorType
} from '@/@schemas/cadastros/fornecedor/CreateEmpresaSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useFornecedorCreateFormProps = {
  criarFornecedor: (data: CreateFornecedorType) => Promise<{
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
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        criarFornecedor(data)
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
      loading: 'Criando Fornecedor...',
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
    createFornecedor: form.handleSubmit(createFornecedor)
  };
};
