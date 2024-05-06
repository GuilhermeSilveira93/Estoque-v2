import { useSearchParams } from 'next/navigation';
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

export const LimitOfTable = () => {
  const { createParam } = useCustomParam();
  const { get } = useSearchParams();
  return (
    <Select>
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Itens por página." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup datatype="number">
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="7">7</SelectItem>
          <SelectItem value="8">8</SelectItem>
          <SelectItem value="9">9</SelectItem>
          <SelectItem value="10">10</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
