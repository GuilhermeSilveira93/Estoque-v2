import { memo } from 'react';

import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { criarProduto } from '@/@actions';
import { Tipos } from '@/@classes/Tipo';

import CreateProdForm from './CreateProdForm';

const CreateProd = memo(async () => {
  const tipos = (await new Tipos().getAll()).body;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar Produto +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro de Produto</DialogTitle>
        </DialogHeader>
        <CreateProdForm criarProduto={criarProduto} tipos={tipos.data} />
      </DialogContent>
    </Dialog>
  );
});
CreateProd.displayName = 'CreateProd';
export default CreateProd;
