'use client';
import { Dispatch, SetStateAction, useState } from 'react';

import { FormEntradaProdutoSchemaType } from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';
import { createContext } from 'use-context-selector';
interface ProdutosEntradaContextValues {
  entrada: FormEntradaProdutoSchemaType[];
  setEntrada: Dispatch<SetStateAction<FormEntradaProdutoSchemaType[]>>;
}
export const ProdutosEntradaContext = createContext(
  {} as ProdutosEntradaContextValues
);

export const ProdutosEntradaProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [entrada, setEntrada] = useState<FormEntradaProdutoSchemaType[]>([]);
  return (
    <ProdutosEntradaContext.Provider value={{ entrada, setEntrada }}>
      {children}
    </ProdutosEntradaContext.Provider>
  );
};
