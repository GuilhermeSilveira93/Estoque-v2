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

import { criarUsuario } from '@/@actions';
import { Grupos } from '@/@classes/Grupos';

import CreateProdForm from './CreateProdForm';

const CreateProd = memo(async () => {
  const grupos = (await new Grupos().getAll()).body;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar Produto +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro de Produto</DialogTitle>
        </DialogHeader>
        <CreateProdForm criarUsuario={criarUsuario} grupos={grupos.data} />
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
