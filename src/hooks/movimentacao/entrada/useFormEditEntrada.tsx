import { useForm } from 'react-hook-form'

import { AlterarItem } from '@/@Reducers/entrada/ActionSetEntrada'
import {
  FormEntradaEditProdutoSchema,
  FormEntradaEditProdutoSchemaType,
} from '@/@schemas/movimentacao/entrada/FormEntradaEditProdutoSchema'
import { InfoTabela } from '@/app/(private)/movimentacao/provider/produtosEntrada'
import { zodResolver } from '@hookform/resolvers/zod'

import { useProdutosEntrada } from './useProdutosEntrada'

export const useFormEditEntrada = ({ produto }: { produto: InfoTabela }) => {
  const { setEntrada } = useProdutosEntrada()
  const form = useForm<FormEntradaEditProdutoSchemaType>({
    mode: 'all',
    defaultValues: {
      N_QUANTIDADE: produto.N_QUANTIDADE,
      N_VALOR: produto.N_VALOR,
      S_DETALHES: produto.S_DETALHES,
      S_DIMENSAO: produto.S_DIMENSAO,
    },
    resolver: zodResolver(FormEntradaEditProdutoSchema),
  })
  const onSubmit = (data: FormEntradaEditProdutoSchemaType) => {
    setEntrada(AlterarItem({ ID_PRODUTO: produto.ID_PRODUTO, payload: data }))
  }
  return { form, onSubmit: form.handleSubmit(onSubmit) }
}
