'use client'
import * as React from "react"
import { useState } from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
export default function NavBar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="p-0 bg-colors-dark-gray rounded-t-xl h-screen max-w-screen-sm fixed">
      <div className="flex-1 h-full">
              <DrawerTitle className="font-medium mb-4 text-black">
                Unstyled drawer for React.
              </DrawerTitle>
              <p className="text-zinc-600">
                This component can be used as a replacement for a Dialog on
                mobile and tablet devices.
              </p>
              <p className="text-zinc-600">
                It uses{" "}
                <a
                  href="https://www.radix-ui.com/docs/primitives/components/dialog"
                  className="underline"
                  target="_blank"
                >
                  Radix&rsquo;s Dialog primitive
                </a>{" "}
                under the hood and is inspired by{" "}
                <a
                  href="https://twitter.com/devongovett/status/1674470185783402496"
                  className="underline"
                  target="_blank"
                >
                  this tweet.
                </a>
              </p>
          </div>
      </DrawerContent>
    </Drawer>
  )
}
