import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { atualizarProdutoParam } from '@/@actions';
import { EditProdSchema, EditProdType } from '@/@schemas';
import { Produtos } from '@/@types/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useProdEditFormProps = {
  produto: Produtos,
  atualizarProduto: ({ data, ID_PRODUTO }: atualizarProdutoParam) => Promise<{
    message: string;
}>
};
export const useProdEditForm = ({
  produto,
  atualizarProduto
}: useProdEditFormProps) => {
  const router = useRouter();
  const form = useForm<EditProdType>({
    mode: 'all',
    defaultValues: {
      ID_TIPO: produto.ID_TIPO.toString(),
      N_SERIAL: produto.N_SERIAL,
      S_NOME: produto.S_NOME,
      S_ATIVO: produto.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditProdSchema)
  });
const updateEmpresa = async (data: EditProdType): Promise<void> => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        atualizarProduto({ ID_PRODUTO: produto.ID_PRODUTO, data })
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
      loading: 'Atualizando Usuário...',
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
    updateEmpresa: form.handleSubmit(updateEmpresa)
  };
};
