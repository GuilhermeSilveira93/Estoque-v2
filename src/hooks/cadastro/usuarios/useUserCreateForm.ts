import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { criarUsuarioProps } from '@/@actions';
import { CreateUserSchema, CreateUserType } from '@/@schemas/cadastros/usuarios/CreateUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
export type useUserCreateFormProps = {
  criarUsuario: ({ data }: criarUsuarioProps) => Promise<{
    statusCode: number,
    success: boolean,
    body: {message: string},
    message: string
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
      S_SENHA: ''
    },
    resolver: zodResolver(CreateUserSchema)
  });
  const createUser = async (data: CreateUserType):Promise<void> => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        criarUsuario({ data })
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
      loading: 'Criando Usuário...',
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
    createUser: form.handleSubmit(createUser)
  };
};
