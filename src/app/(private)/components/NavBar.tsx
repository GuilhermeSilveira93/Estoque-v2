import * as React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { Menu } from 'lucide-react'

const NavBar = async () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="animate-in duration-500 fade-in zoom-in" />
      </SheetTrigger>
      <SheetContent
        className="max-w-1/5 sm:w-[540px] bg-gray-300 dark:bg-colors-dark-gray"
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
  )
}
export default NavBar
