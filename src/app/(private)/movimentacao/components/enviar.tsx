'use client';
import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { EmpresaType, FornecedorType } from '@/@types/api';
import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada';

import { FormEnviarEntrada } from './formEnviarEntrada';
import { FormEnviarSaida } from './formEnviarSaida';
const Enviar = ({ fornecedores, empresas }: { fornecedores: FornecedorType[], empresas: EmpresaType[] }) => {
  const { entrada } = useProdutosEntrada();
  if (!entrada.length) return null;
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-1/2'>Entrada</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fornecedor dos Produtos.</DialogTitle>
          <FormEnviarEntrada fornecedores={fornecedores} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className='w-1/2'>Saida</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Saida para qual empresa?</DialogTitle>
          <FormEnviarSaida empresas={empresas} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
    </>
  );
};
export default Enviar;
