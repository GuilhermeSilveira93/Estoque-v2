import { memo } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarUsuario } from '@/@actions';
import { Produtos } from '@/@types/api';
import { Settings } from 'lucide-react';

import EditProdForm from './EditProdForm';
type EditProdProps = {
  produto: Produtos
};
const EditUser = memo(({ produto }: EditProdProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditProdForm produto={produto} atualizarUsuario={atualizarUsuario} />
      </PopoverContent>
    </Popover>
  );
});
EditUser.displayName = 'EditUser';
export default EditUser;
