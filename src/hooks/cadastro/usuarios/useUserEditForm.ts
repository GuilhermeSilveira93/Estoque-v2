import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { atualizarUsuarioParam } from '@/@actions';
import { EditUserSchema, EditUserType } from '@/@schemas/cadastros/usuarios/EditUserSchema';
import { Usuario } from '@/@types/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useUserEditFormProps = {
  usuario: Usuario,
  atualizarUsuario: ({ data, ID_USUARIO }: atualizarUsuarioParam) => Promise<{
    message: string;
}>
};
export const useUserEditForm = ({
  usuario,
  atualizarUsuario
}: useUserEditFormProps) => {
  const router = useRouter();
  const form = useForm<EditUserType>({
    mode: 'all',
    defaultValues: {
      S_NOME: usuario.S_NOME,
      S_ATIVO: usuario.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditUserSchema)
  });
  const updateUser = async (data: EditUserType) => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        atualizarUsuario({ ID_USUARIO: usuario.ID_USUARIO, data })
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
      loading: 'Atualizando Produto...',
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
