'use client';

import * as React from 'react';

import {
  NavigationMenu as Navigation,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

import { ListItem } from './ListItem';

export const NavigationMenu = () => {
  return (
    <>
      <Navigation orientation="vertical">
        <NavigationMenuList>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="w-full">
              Home Page
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-full">
              <ul className="relative left-0 grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/" title="Home">
                  Tabela do Estoque.
                </ListItem>
                <ListItem href="/dashboard" title="DashBoard">
                  DashBoard das movimentações do estoque.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </Navigation>
      <Navigation className="min-w-full" orientation="horizontal">
        <NavigationMenuList className="">
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="w-full">
              Movimentação
            </NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-full">
              <ul className="relative left-0 grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Entrada">
                  Realize entrada de materiais.
                </ListItem>
                <ListItem href="/docs" title="Saida">
                  Realize entrada de materiais.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </Navigation>
    </>
  );
};

export default NavigationMenu;
