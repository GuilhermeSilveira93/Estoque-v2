import * as React from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { PascalCase, getUserCurrent } from '@/@utils'

import { LogoutButton } from './LogOut'
import { Menu } from './Menu'
import { NavigationMenu } from './NavMenus'

const NavBar = async () => {
  const user = await getUserCurrent()

  return (
    <Sheet>
      <SheetTrigger className="fixed right-0 top-0 z-10">
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex w-1/5 flex-col flex-wrap">
        <SheetHeader>
          <SheetTitle className="text-center text-foreground">
            Olá, {PascalCase(user.S_NOME)}!
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1">
          <NavigationMenu />
        </div>
        <SheetFooter className="">
          <SheetClose asChild>
            <LogoutButton />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default NavBar
