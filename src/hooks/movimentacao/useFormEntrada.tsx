import { useForm } from 'react-hook-form';

import {
  FormEntradaProdutoSchema,
  FormEntradaProdutoSchemaType
} from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import { useProdutosEntrada } from './useProdutosEntrada';

export const useFormEntrada = () => {
  const { setEntrada } = useProdutosEntrada();
  const form = useForm<FormEntradaProdutoSchemaType>({
    mode: 'all',
    defaultValues: {
      ID_PRODUTO: '',
      N_QUANTIDADE: undefined,
      S_DIMENSAO: undefined,
      S_DETALHES: undefined,
      N_VALOR: undefined
    },
    resolver: zodResolver(FormEntradaProdutoSchema)
  });
  const onSubmit = (data: FormEntradaProdutoSchemaType) => {
    setEntrada((prev) => [...prev, data]);
    form.reset();
  };
  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
