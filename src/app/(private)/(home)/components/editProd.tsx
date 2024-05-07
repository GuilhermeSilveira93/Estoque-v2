import { Button, Input } from '@/components/ui';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

import { Produto } from '@/@types/api';
import { PascalCase } from '@/@utils';
import { Settings } from 'lucide-react';
const EditProd = async ({ produto }: { produto: Produto }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <form>
          <h1>Editar: {PascalCase(produto.produto)}</h1>
          <Label htmlFor="Nome" className="font-bold text-secondary">
            Nome
          </Label>
          <Input placeholder={produto.produto} className="" />
          <Button title="Enviar" type="submit" />
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default EditProd;
