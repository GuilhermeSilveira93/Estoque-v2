import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';

import { Table } from 'lucide-react';

const Loading = () => {
  return (
    <>
      <Skeleton className="h-[30px] w-20 rounded-none border" />
      <Skeleton className="h-[40px] w-full rounded-none border" />
      <Skeleton className="h-[48px] w-full rounded-none border" />
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <Skeleton key={i} className="h-[53px] w-full rounded-none border-t" />
        );
      })}
      <div className="flex"></div>
    </>
  );
};
export default Loading;