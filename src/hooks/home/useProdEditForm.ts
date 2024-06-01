import { useForm } from 'react-hook-form';

import { EditProdSchema, EditProdType } from '@/@schemas/home/EditProdSchema';
import { Produto } from '@/@types/api';
import { zodResolver } from '@hookform/resolvers/zod';

export const useProdEditForm = (produto: Produto) => {
  const form = useForm<EditProdType>({
    mode: 'all',
    defaultValues: {
      S_NOME: produto.produto,
      S_ATIVO: produto.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditProdSchema)
  });
  return { form };
};
