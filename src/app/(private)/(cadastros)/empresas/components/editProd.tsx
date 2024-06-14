import { memo } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarProduto } from '@/@actions';
import { Produtos } from '@/@types/api';
import { TiposType } from '@/@types/api/ReqTipos';
import { Settings } from 'lucide-react';

import EditProdForm from './EditProdForm';
type EditProdProps = {
  produto: Produtos,
  tipos: TiposType[]
};
const EditProd = memo(async ({ produto, tipos }: EditProdProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditProdForm
          produto={produto}
          atualizarProduto={atualizarProduto}
          tipos={tipos}
        />
      </PopoverContent>
    </Popover>
  );
});
EditProd.displayName = 'EditProd';
export default EditProd;
