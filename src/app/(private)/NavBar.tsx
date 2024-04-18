import * as React from 'react';

import { Menu } from './components/Menu';
import { Button } from '@/components/ui';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { getUserCurrent } from '@/@utils';

const NavBar = async () => {
  const user = await getUserCurrent();
  return (
    <Sheet>
      <SheetTrigger className="fixed right-0 top-0 z-10">
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col flex-wrap">
        <SheetHeader>
          <SheetTitle className="text-center text-foreground">
            Olá, {user.S_NOME}!
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 bg-gray-500"></div>
        <SheetFooter className="">
          <SheetClose asChild>
            <Button className="w-full" type="submit">
              Sair
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default NavBar;
