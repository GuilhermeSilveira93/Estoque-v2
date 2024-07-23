'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Lote } from '@/@classes/Lote';
import {
  FormEnviarProdutoSchema,
  FormEnviarProdutoSchemaType
} from '@/@schemas/movimentacao/entrada/FormEnviarProdutoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { useProdutosEntrada } from './useProdutosEntrada';

export const useEnviarProdutosEntradaForm = () => {
  const { entrada } = useProdutosEntrada();
  const router = useRouter();
  const form = useForm<FormEnviarProdutoSchemaType>({
    mode: 'all',
    defaultValues: {
      ID_FORNECEDOR: ''
    },
    resolver: zodResolver(FormEnviarProdutoSchema)
  });
  const onSubmit = async (data: FormEnviarProdutoSchemaType) => {
    const response = (): Promise<string> => {
      return new Promise((resolve, reject) => {
        new Lote()
          .insertProdutos({
            ID_FORNECEDOR: data.ID_FORNECEDOR,
            data: entrada
          })
          .then((res) => {
            if (!res.success) {
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
      loading: 'Consultando seu usuário.',
      success: (data) => {
        return data;
      },
      error: (data) => {
        return data;
      }
    });
    form.reset();
  };
  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
