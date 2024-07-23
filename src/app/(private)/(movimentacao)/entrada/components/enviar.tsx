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

import { FormEnviar } from './formEnviar';
const Enviar = ({ fornecedores }: { fornecedores: FornecedorType[] }) => {
  const { entrada } = useProdutosEntrada();
  if (!entrada.length) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Enviar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Escolha seu fornecedor.</DialogTitle>
          <FormEnviar fornecedores={fornecedores} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Enviar;
