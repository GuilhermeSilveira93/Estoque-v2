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
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-4">
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
        <NavigationMenuList>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="w-full">
              Movimentação
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-4">
                <ListItem href="/entrada" title="Entrada">
                  Realize entrada de materiais.
                </ListItem>
                <ListItem href="/saida" title="Saida">
                  Realize entrada de materiais.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </Navigation>
      <Navigation className="min-w-full" orientation="horizontal">
        <NavigationMenuList>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="w-full">
              Cadastro
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-4">
                <ListItem href="/usuarios" title="Usuários">
                  Crie/edite usuários.
                </ListItem>
                <ListItem href="/produtos" title="Produtos">
                  Crie/edite produtos.
                </ListItem>
                <ListItem href="/empresas" title="Empresas">
                  Crie/edite Empresas.
                </ListItem>
                <ListItem href="/fornecedores" title="Fornecedores">
                  Crie/edite Fornecedores.
                </ListItem>
                <ListItem href="/clientes" title="Clientes">
                  Crie/edite Clientes.
                </ListItem>
                <ListItem href="/tipos" title="Tipos">
                  Crie/edite Tipos de Produtos.
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
