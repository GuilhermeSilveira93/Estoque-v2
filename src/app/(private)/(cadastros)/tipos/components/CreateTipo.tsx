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

import CreateTipoForm from './CreateTipoForm';

const CreateTipo = memo(async () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          Criar Tipo +
        </Button>
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
CreateTipo.displayName = 'CreateTipo';
export default CreateTipo;
