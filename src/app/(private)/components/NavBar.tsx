import * as React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui'

import { Menu } from 'lucide-react'

const NavBar = async () => {
  return (
    <nav className="bg-colors-light-card rounded-sm dark:bg-colors-dark-card h-screen">
      <Sheet>
        <SheetTrigger>
          <Menu size={42} className="" />
        </SheetTrigger>
        <SheetContent
          className="max-w-1/5 sm:w-[540px] bg-colors-light-card dark:bg-colors-dark-card"
          side={'left'}
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
    </nav>
  )
}
export default NavBar
