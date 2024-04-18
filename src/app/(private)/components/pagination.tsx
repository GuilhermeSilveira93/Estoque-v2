'use client';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import {
  Pagination as Page,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { getElementsAroundIndex } from '@/@utils/getArrayPages';
import { useCustomParam } from '@/hooks';
type PaginationProps = {
  total: number,
};
const Pagination = ({ total }: PaginationProps) => {
  const { createParam } = useCustomParam();
  const { get } = useSearchParams();
  const currentPage = Number(get('Page')) ?? 1;
  const pages = Math.floor(total / 10);
  const goPage = (page: number): string => {
    if (page === 1) {
      return createParam('Page', '0');
    }
    return createParam('Page', page.toString());
  };
  const numberPage = Array.from({ length: pages }).map((_, i) => i + 1);
  const pagesAtt = getElementsAroundIndex({
    array: numberPage,
    selectedIndex: currentPage === 1 ? 0 : currentPage - 1,
  });

  return (
    <div className="grid grid-flow-col grid-cols-4">
      <div />
      <div className="col-span-2 grid">
        <div className="flex items-center justify-center gap-6 lg:gap-8">
          <span className="text-sm text-foreground">{total} item(s)</span>
          <div className="flex items-center gap-2">
            <Page>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={goPage(currentPage - 1)} />
                  </PaginationItem>
                )}
                {pagesAtt.map((value) => {
                  return (
                    <PaginationLink
                      key={value}
                      href={goPage(value)}
                      isActive={value === currentPage}
                    >
                      {value}
                    </PaginationLink>
                  );
                })}
                {currentPage !== numberPage.length && (
                  <PaginationItem>
                    <PaginationNext href={goPage(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Page>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pagination;
