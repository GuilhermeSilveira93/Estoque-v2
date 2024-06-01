import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { atualizarProduto } from '@/@actions';
import { Produto } from '@/@types/api';
import { Settings } from 'lucide-react';

import EditProdForm from './EditProdForm';

const EditProd = async ({ produto }: { produto: Produto }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditProdForm produto={produto} atualizarProduto={atualizarProduto} />
      </PopoverContent>
    </Popover>
  );
};
export default EditProd;
