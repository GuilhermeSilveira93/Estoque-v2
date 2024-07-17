import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export const useCustomParam = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const param = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );

  const createParam = useCallback(
    (name: string, value: string) => {
      param.set(name, value);
      return `${pathName}?${param.toString()}`;
    },
    [pathName, param]
  );
  const deleteParam = useCallback(
    (params: Array<string>) => {
      for (let i = 0; i < params.length; i++) {
        // eslint-disable-next-line prettier/prettier
        param.delete(params[i]!);
      }
      return `${pathName}?${param.toString()}`;
    },
    [param, pathName]
  );
  return { createParam, deleteParam };
};
