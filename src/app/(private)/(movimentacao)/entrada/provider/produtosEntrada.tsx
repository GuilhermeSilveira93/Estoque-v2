'use client';
import { Dispatch, SetStateAction, useState } from 'react';

import { createContext } from 'use-context-selector';
interface ProdutosEntradaContextValues {
  entrada: never[];
  setEntrada: Dispatch<SetStateAction<never[]>>;
}
export const ProdutosEntradaContext = createContext(
  {} as ProdutosEntradaContextValues
);

export const ProdutosEntradaProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [entrada, setEntrada] = useState([]);
  return (
    <ProdutosEntradaContext.Provider value={{ entrada, setEntrada }}>
      {children}
    </ProdutosEntradaContext.Provider>
  );
};
