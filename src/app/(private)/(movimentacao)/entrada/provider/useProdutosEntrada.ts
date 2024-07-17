import { useContextSelector } from 'use-context-selector';

import { ProdutosEntradaContext } from './produtosEntrada';

export const useProdutosEntrada = () => {
  const entrada = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.entrada
  );
  const setEntrada = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.setEntrada
  );
  return { entrada, setEntrada };
};
