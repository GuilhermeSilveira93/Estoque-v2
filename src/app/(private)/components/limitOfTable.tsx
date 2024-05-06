import { useRouter } from 'next/navigation';
import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { useCustomParam } from '@/hooks';

type LimitOfTableProps = {
  LimitPerPage: string
};
export const LimitOfTable = ({ LimitPerPage }: LimitOfTableProps) => {
  const { createParam } = useCustomParam();
  const router = useRouter();
  const changeLimitPerPage = (value: string) => {
    const url = createParam('LimitPerPage', value);
    router.push(url);
  };
  return (
    <Select onValueChange={changeLimitPerPage}>
      <SelectTrigger className="h-9 w-44" defaultValue={LimitPerPage}>
        <SelectValue placeholder="Itens por página." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup datatype="string">
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="14">14</SelectItem>
          <SelectItem value="16">16</SelectItem>
          <SelectItem value="18">18</SelectItem>
          <SelectItem value="20">20</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
