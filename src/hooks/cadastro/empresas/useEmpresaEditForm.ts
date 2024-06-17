import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { atualizarEmpresaParam } from '@/@actions';
import { EditEmpresaSchema, EditEmpresaType } from '@/@schemas';
import { EmpresaType } from '@/@types/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useEmpresaEditFormProps = {
  empresa: EmpresaType,
  atualizarEmpresa: ({ data, ID_EMPRESA }: atualizarEmpresaParam) => Promise<{
    message: string;
}>
};
export const useEmpresaEditForm = ({
  empresa,
  atualizarEmpresa
}: useEmpresaEditFormProps) => {
  const router = useRouter();
  const form = useForm<EditEmpresaType>({
    mode: 'all',
    defaultValues: {
      S_NOME: empresa.S_NOME,
      S_ATIVO: empresa.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditEmpresaSchema)
  });
const updateEmpresa = async (data: EditEmpresaType): Promise<void> => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        atualizarEmpresa({ ID_EMPRESA: empresa.ID_EMPRESA, data })
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
