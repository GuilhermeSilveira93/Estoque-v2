import { memo } from 'react';

import { Button } from '@/components/ui';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { criarProduto } from '@/@actions';
import { Tipos } from '@/@classes/Tipos';

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
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
CreateProd.displayName = 'CreateProd';
export default CreateProd;
