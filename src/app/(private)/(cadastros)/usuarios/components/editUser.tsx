import { memo } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarUsuario } from '@/@actions';
import { Grupo, Usuario } from '@/@types/api';
import { Settings } from 'lucide-react';

import EditProdForm from './EditUserForm';
type EditUserProps = {
  usuario: Usuario,
  grupos: Grupo[]
};
const EditUser = memo(({ usuario, grupos }: EditUserProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditProdForm
          usuario={usuario}
          grupos={grupos}
          atualizarUsuario={atualizarUsuario}
        />
      </PopoverContent>
    </Popover>
  );
});
EditUser.displayName = 'EditUser';
export default EditUser;
