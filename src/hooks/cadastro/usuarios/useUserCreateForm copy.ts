import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { criarUsuarioProps } from '@/@actions';
import { CreateUserSchema, CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useUserCreateFormProps = {
  criarUsuario: ({ data }: criarUsuarioProps) => Promise<{
    message: string;
}>
};
export const useUserCreateForm = ({
  criarUsuario
}: useUserCreateFormProps) => {
  const router = useRouter();
  const form = useForm<CreateUserType>({
    mode: 'all',
    defaultValues: {
      S_NOME: '',
      ID_GRUPO: '3' as '1' | '2' | '3',
      S_EMAIL: '',
      S_Senha: ''
    },
    resolver: zodResolver(CreateUserSchema)
  });
  const createUser = async (data: CreateUserType):Promise<void> => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        criarUsuario({ data })
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
    createUser: form.handleSubmit(createUser)
  };
};
