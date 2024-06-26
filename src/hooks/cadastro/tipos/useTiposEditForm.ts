import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { atualizarTipoParam } from '@/@actions';
import { EditTipoSchema, EditTipoType } from '@/@schemas';
import { TiposType } from '@/@types/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useTipoEditFormProps = {
  tipo: TiposType,
  atualizarTipo: ({ data, ID_TIPO }: atualizarTipoParam) => Promise<{
    statusCode: number,
    success: boolean,
    body: {message: string},
    message: string
}>
};
export const useTipoEditForm = ({
  tipo,
  atualizarTipo
}: useTipoEditFormProps) => {
  const router = useRouter();
  const form = useForm<EditTipoType>({
    mode: 'all',
    defaultValues: {
      S_NOME: tipo.S_NOME,
      S_ATIVO: tipo.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditTipoSchema)
  });
const updateTipo = async (data: EditTipoType): Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        atualizarTipo({ ID_TIPO: tipo.ID_TIPO, data })
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
      loading: 'Atualizando Tipos...',
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
    updateTipo: form.handleSubmit(updateTipo)
  };
};
