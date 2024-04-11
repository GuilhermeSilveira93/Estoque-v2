import * as React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui'

import { Menu } from './Menu'

const NavBar = async () => {
  return (
    <Sheet>
      <SheetTrigger className="fixed top-0 right-0 z-10">
        <Menu />
      </SheetTrigger>
      <SheetContent
        className="max-w-1/5 sm:w-[540px] bg-colors-light-card dark:bg-colors-dark-card"
        side={'right'}
      >
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
export default NavBar
