import { ProdutosEntradaContext } from '@/app/(private)/movimentacao/provider/produtosEntrada'
import { useContextSelector } from 'use-context-selector'

export const useProdutosEntrada = () => {
  const entrada = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.entrada
  )
  const infoTabela = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.infoTabela
  )
  const setEntrada = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.setEntrada
  )
  return { infoTabela, setEntrada, entrada }
}
