import { memo } from 'react';

import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { criarTipo } from '@/@actions';

import CreateTipoForm from './CreateClienteForm';

const CreateCliente = memo(async () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar Tipo +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro de Tipos</DialogTitle>
        </DialogHeader>
        <CreateTipoForm criarTipo={criarTipo} />
      </DialogContent>
    </Dialog>
  );
});
CreateCliente.displayName = 'CreateCliente';
export default CreateCliente;
