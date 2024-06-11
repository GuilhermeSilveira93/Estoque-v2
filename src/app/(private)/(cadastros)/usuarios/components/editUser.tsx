import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarUsuario } from '@/@actions';
import { Usuario } from '@/@types/api';
import { Settings } from 'lucide-react';

import EditProdForm from './EditUserForm';

const EditUser = async ({ usuario }: { usuario: Usuario }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditProdForm usuario={usuario} atualizarUsuario={atualizarUsuario} />
      </PopoverContent>
    </Popover>
  );
};
export default EditUser;
