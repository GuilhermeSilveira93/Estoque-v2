import { Button } from '@/components/ui';

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
type PaginationProps = {
  total: number,
};
const Pagination = ({ total }: PaginationProps) => {
  return (
    <div className="grid grid-flow-col grid-cols-3">
      <div />

      <div className="flex items-center justify-center gap-6 lg:gap-8">
        <span className="text-sm text-foreground">
          Total de {total} item(s)
        </span>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Última página</span>
          </Button>
        </div>
      </div>
      <div />
    </div>
  );
};
export default Pagination;
