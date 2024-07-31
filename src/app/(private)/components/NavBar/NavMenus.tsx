'use client'

import Link from 'next/link'
import * as React from 'react'

import {
  NavigationMenu as Navigation,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { ListItem } from './ListItem'

export const NavigationMenu = () => {
  return (
    <>
      <Navigation>
        <NavigationMenuList>
          <NavigationMenuItem>
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
          <NavigationMenuItem>
            <Link href="/movimentacao" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Movimentação
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </Navigation>
      <Navigation>
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
      <Navigation>
        <NavigationMenuList>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="w-full">
              Relatórios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-4">
                <ListItem href="/relatorio/entrada" title="Entrada">
                  Baixe o relatório de entrada aqui.
                </ListItem>
                <ListItem href="/relatorio/saida" title="Saida">
                  Baixe o relatório de saida aqui.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </Navigation>
    </>
  )
}

export default NavigationMenu
