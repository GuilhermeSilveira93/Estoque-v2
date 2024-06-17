import { memo } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarFornecedor } from '@/@actions';
import { FornecedorType } from '@/@types/api';
import { Settings } from 'lucide-react';

import EditProdForm from './EditProdForm';
type EditProdProps = {
  fornecedor: FornecedorType
};
const EditProd = memo(async ({ fornecedor }: EditProdProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditFornecedorForm
          fornecedor={fornecedor}
          atualizarFornecedor={atualizarFornecedor}
        />
      </PopoverContent>
    </Popover>
  );
});
EditProd.displayName = 'EditProd';
export default EditProd;
