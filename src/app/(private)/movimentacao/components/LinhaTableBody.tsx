import { TableCell, TableRow } from '@/components/ui';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Settings } from 'lucide-react';

import { InfoTabela } from '../provider/produtosEntrada';
import { FormEntradaEditProduto } from './formEditEntradaProduto';
export const LinhaTableBody = ({ produto }: { produto: InfoTabela }) => {
  return (
    <TableRow className="border-card-foreground">
      <TableCell>
        <Popover>
          <PopoverTrigger asChild>
            <Settings className="cursor-pointer text-secondary" />
          </PopoverTrigger>
          <PopoverContent side="left" align="center">
            <FormEntradaEditProduto produto={produto} />
          </PopoverContent>
        </Popover>
      </TableCell>
      <TableCell>{produto.S_NOME}</TableCell>
      <TableCell>{produto.N_QUANTIDADE}</TableCell>
      <TableCell>{produto.N_VALOR}</TableCell>
      <TableCell>{produto.S_DETALHES}</TableCell>
      <TableCell>{produto.S_DIMENSAO}</TableCell>
    </TableRow>
  );
}