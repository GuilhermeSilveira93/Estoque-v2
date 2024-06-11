import Link, { LinkProps } from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';
type ListItemProps = LinkProps & {
  children: React.ReactNode,
  className?: string,
  title: string
};
export const ListItem = ({
  className,
  title,
  children,
  ...props
}: ListItemProps) => {
  return (
    <li className="col-span-2 space-y-1 border border-accent p-3 transition-all hover:border-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
      <Link className={cn('', className)} {...props}>
        <div className="text-LG leading-none text-secondary">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
};
