'use client';
import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { FornecedorType } from '@/@types/api';
import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada';

import { FormEnviarEntrada } from './formEnviarEntrada';
import { FormEnviarSaida } from './formEnviarSaida';
const Enviar = ({ fornecedores }: { fornecedores: FornecedorType[] }) => {
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
          <DialogTitle>Escolha seu fornecedor.</DialogTitle>
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
          <DialogTitle>Escolha seu fornecedor.</DialogTitle>
          <FormEnviarSaida fornecedores={fornecedores} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
    </>
  );
};
export default Enviar;
