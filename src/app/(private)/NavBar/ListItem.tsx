import Link, { LinkProps } from 'next/link';
import React, { Ref } from 'react';

import { cn } from '@/lib/utils';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
type ListItemProps = LinkProps & {
  children: React.ReactNode,
  className?: string,
  title: string,
  ref?: Ref<HTMLAnchorElement>
};
export const ListItem = ({
  className,
  title,
  children,
  ref,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-LG leading-none text-secondary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
