import { memo } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarProduto } from '@/@actions';
import { Empresas } from '@/@types/api';
import { Settings } from 'lucide-react';

import EditEmpresaForm from './EditEmpresaForm';
type EditEmpresaProps = {
  empresas: Empresas
};
const EditEmpresa = memo(async ({ empresas }: EditEmpresaProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditEmpresaForm
          empresas={empresas}
          atualizarEmpresa={atualizarProduto}
        />
      </PopoverContent>
    </Popover>
  );
});
EditEmpresa.displayName = 'EditEmpresa';
export default EditEmpresa;
