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

import CreateUserForm from './CreateUserForm';

const CreateUser = memo(async () => {
  const grupos = (await new Grupos().getAll()).body;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Criar Usuário +</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro de Usuário</DialogTitle>
        </DialogHeader>
        <CreateUserForm criarUsuario={criarUsuario} grupos={grupos.data} />
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
CreateUser.displayName = 'CreateUser';
export default CreateUser;
