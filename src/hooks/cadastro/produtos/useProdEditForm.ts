import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { atualizarUsuarioParam } from '@/@actions';
import { EditUserSchema, EditUserType } from '@/@schemas/cadastros/usuarios/EditUserSchema';
import { Produtos } from '@/@types/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useProdEditFormProps = {
  produto: Produtos,
  atualizarUsuario: ({ data, ID_USUARIO }: atualizarUsuarioParam) => Promise<{
    message: string;
}>
};
export const useProdEditForm = ({
  produto,
  atualizarUsuario
}: useProdEditFormProps) => {
  const router = useRouter();
  const form = useForm<EditUserType>({
    mode: 'all',
    defaultValues: {
    },
    resolver: zodResolver(EditUserSchema)
  });
  const updateUser = async (data: EditUserType):Promise<void> => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        /* atualizarUsuario({ ID_USUARIO: usuario.ID_USUARIO, data })
          .then((res) => {
            router.refresh();
            resolve(res);
          })
          .catch((err) => {
            reject(JSON.stringify(err));
          });*/
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
    updateUser: form.handleSubmit(updateUser)
  };
};
