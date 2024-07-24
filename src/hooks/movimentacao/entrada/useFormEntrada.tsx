import { useForm } from 'react-hook-form';

import { InserirItem } from '@/@Reducers/entrada/ActionSetEntrada';
import {
  FormEntradaProdutoSchemaType,
  FormEntradaProdutoSchema
} from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import { useProdutosEntrada } from './useProdutosEntrada';

export const useFormEntrada = () => {
  const { setEntrada } = useProdutosEntrada();
  const form = useForm<FormEntradaProdutoSchemaType>({
    mode: 'all',
    defaultValues: {
      ID_PRODUTO: '',
      S_DIMENSAO: '',
      S_DETALHES: '',
      N_VALOR: undefined,
      N_QUANTIDADE: 0
    },
    resolver: zodResolver(FormEntradaProdutoSchema)
  });
  const onSubmit = (data: FormEntradaProdutoSchemaType) => {
    setEntrada(InserirItem(data));
    form.reset();
  };
  return { form, onSubmit: form.handleSubmit(onSubmit) };
};
