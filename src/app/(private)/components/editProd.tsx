import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { Settings } from 'lucide-react';
const EditProd = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left">
        <form>
          <label htmlFor="Nome">Nome</label>
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default EditProd;
