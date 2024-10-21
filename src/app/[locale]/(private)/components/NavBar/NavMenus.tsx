'use client'

import { useTranslations } from 'next-intl'
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
  const t = useTranslations('SIDEBAR')
  return (
    <>
      <Navigation>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-full">
              {t('HOMEPAGE')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-4">
                <ListItem href="/" title="Home">
                  {t('TABELADOESTOQUE')}
                </ListItem>
                <ListItem href="/dashboard" title="DashBoard">
                  {t('DASHDESCRIPTION')}
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
                {t('MOVIMENT')}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </Navigation>
      <Navigation>
        <NavigationMenuList>
          <NavigationMenuItem className="relative">
            <NavigationMenuTrigger className="w-full">
              {t('REGISTER')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-4">
                <ListItem href="/usuarios" title={t('USERS')}>
                  {t('CREAT/EDIT')} {t('USERS')}.
                </ListItem>
                <ListItem href="/produtos" title={t('PRODUCTS')}>
                  {t('CREAT/EDIT')} {t('PRODUCTS')}.
                </ListItem>
                <ListItem href="/empresas" title={t('COMPANIES')}>
                  {t('CREAT/EDIT')} {t('COMPANIES')}.
                </ListItem>
                <ListItem href="/fornecedores" title={t('SUPPLIERS')}>
                  {t('CREAT/EDIT')} {t('SUPPLIERS')}.
                </ListItem>
                <ListItem href="/clientes" title={t('CUSTOMERS')}>
                  {t('CREAT/EDIT')} {t('CUSTOMERS')}.
                </ListItem>
                <ListItem href="/tipos" title={t('TYPEOFPRODUCTS')}>
                  {t('CREAT/EDIT')} {t('TYPEOFPRODUCTS')}.
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
              {t('REPORTS')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-4">
                <ListItem href="/relatorio/entrada" title={t('ENTRY')}>
                  {t('RELIN')}
                </ListItem>
                <ListItem href="/relatorio/saida" title={t('EXIT')}>
                  {t('RELOUT')}
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
