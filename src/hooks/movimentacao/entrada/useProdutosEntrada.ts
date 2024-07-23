import { useContextSelector } from 'use-context-selector';

import { ProdutosEntradaContext } from '../../../app/(private)/(movimentacao)/entrada/provider/produtosEntrada';

export const useProdutosEntrada = () => {
  const entrada = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.entrada
  );
  const infoTabela = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.infoTabela
  );
  const setEntrada = useContextSelector(
    ProdutosEntradaContext,
    (context) => context.setEntrada
  );
  return { infoTabela, setEntrada, entrada };
};
