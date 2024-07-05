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
    statusCode: number,
    success: boolean,
    body: {message: string},
    message: string
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
      N_SERIAL: produto.N_SERIAL ?? undefined,
      S_NOME: produto.S_NOME,
      S_ATIVO: produto.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditProdSchema)
  });
const updateProd = async (data: EditProdType): Promise<void> => {
  
     const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        atualizarProduto({ ID_PRODUTO: produto.ID_PRODUTO, data })
        .then((res) => {
          if(!res.success){
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
      loading: 'Atualizando Produto...',
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
    updateProd: form.handleSubmit(updateProd)
  };
};
