'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui';
import {
  Pagination as Page,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { useCustomParam } from '@/hooks';
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
  const { createParam } = useCustomParam();
  const pages = Math.floor(total / 10);
  const goPage = (page: number): string => {
    return createParam('Page', page.toString());
  };
  return (
    <div className="grid grid-flow-col grid-cols-4">
      <div />
      <div className="col-span-2 grid">
        <div className="flex items-center justify-center gap-6 lg:gap-8">
          <span className="text-sm text-foreground">{total} item(s)</span>
          <div className="flex items-center gap-2">
            <Page>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                {Array.from({ length: pages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink href={goPage(i + 1)}>
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Page>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
