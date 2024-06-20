import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { atualizarFornecedorParam } from '@/@actions';
import { EditEmpresaSchema, EditEmpresaType } from '@/@schemas';
import { FornecedorType } from '@/@types/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useFornecedorEditFormProps = {
  fornecedor: FornecedorType,
  atualizarFornecedor: ({ data, ID_FORNECEDOR }: atualizarFornecedorParam) => Promise<{
    message: string;
}>
};
export const useFornecedorEditForm = ({
  fornecedor,
  atualizarFornecedor
}: useFornecedorEditFormProps) => {
  const router = useRouter();
  const form = useForm<EditEmpresaType>({
    mode: 'all',
    defaultValues: {
      S_NOME: fornecedor.S_NOME,
      S_ATIVO: fornecedor.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditEmpresaSchema)
  });
const updateFornecedor = async (data: EditEmpresaType): Promise<void> => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        atualizarFornecedor({ ID_FORNECEDOR: fornecedor.ID_FORNECEDOR, data })
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
      loading: 'Atualizando Fornecedor...',
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
    updateFornecedor: form.handleSubmit(updateFornecedor)
  };
};
