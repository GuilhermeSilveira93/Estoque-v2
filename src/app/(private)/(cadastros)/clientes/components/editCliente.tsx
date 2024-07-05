import { memo } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarCliente } from '@/@actions';
import { ClienteType } from '@/@types/api/ReqCliente';
import { Settings } from 'lucide-react';

import EditClienteForm from './EditClienteForm';
type EditClienteProps = {
  cliente: ClienteType
};
const EditCliente = memo(async ({ cliente }: EditClienteProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditClienteForm
          cliente={cliente}
          atualizarCliente={atualizarCliente}
        />
      </PopoverContent>
    </Popover>
  );
});
EditCliente.displayName = 'EditCliente';
export default EditCliente;
