'use client';
import { useSearchParams } from 'next/navigation';

import {
  Pagination as Page,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

import { getElementsAroundIndex } from '@/@utils/getArrayPages';
import { useCustomParam } from '@/hooks';

import { LimitOfTable } from './limitOfTable';
type PaginationProps = {
  total: number,
  dataLenght: number
};
const Pagination = ({ total, dataLenght }: PaginationProps) => {
  const { createParam, deleteParam } = useCustomParam();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('Page')) ?? 0;

  const LimitPerPage = searchParams.get('LimitPerPage') ?? '10';
  const pages = Math.floor(total / Number(LimitPerPage));

  const goPage = (page: number): string => {
    switch (page) {
      case 0:
        return deleteParam(['Page']);
      case 1:
        return deleteParam(['Page']);
      default:
        return createParam('Page', page.toString());
    }
  };

  const numberPage = Array.from({ length: pages }).map((_, i) => i + 1);
  const pagesAtt = getElementsAroundIndex({
    array: numberPage,
    selectedIndex: currentPage === 1 ? 0 : currentPage - 1
  });
  return (
    <>
      <Page>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={goPage(0)} />
          </PaginationItem>
          {pagesAtt.map((page) => {
            return (
              <PaginationLink
                key={page + 'Page'}
                href={goPage(page)}
                isActive={
                  page === currentPage || (page === 1 && currentPage === 0)
                }
              >
                {page}
              </PaginationLink>
            );
          })}
          {currentPage !== numberPage.length && (
            <PaginationItem>
              <PaginationNext href={goPage(pages)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Page>
      <LimitOfTable LimitPerPage={LimitPerPage} />
    </>
  );
};
export default Pagination;
