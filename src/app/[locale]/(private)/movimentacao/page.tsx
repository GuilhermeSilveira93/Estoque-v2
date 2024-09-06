import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

import Enviar from './components/enviar'
import { FormEntradaProduto } from './components/formEntradaProduto'
import { Tabela } from './components/Tabela'
import { Container } from '@/components/ui'

import { Empresa, Produto } from '@/@classes'
import { Fornecedor } from '@/@classes/Fornecedor'
import { RolesRequired } from '@/@types'
import { userCanSeePage } from '@/@utils'

import { ProdutosEntradaProvider } from './provider/produtosEntrada'
const EntradaPage = async () => {
  await userCanSeePage({
    rolesRequired: [
      RolesRequired.ADM,
      RolesRequired.DESENV,
      RolesRequired.SUPERVISOR,
    ],
  })
  const t = await getTranslations('MOVEMENT')
  const produtos = (await new Produto().getAll()).body
  const fornecedores = (await new Fornecedor().getAll()).body
  const empresas = (await new Empresa().getAll()).body
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={{ pathname: '/movimentacao' }}>{t('TITLE')}</Link>
      </h1>
      <Container>
        <fieldset className="grid grid-flow-col grid-cols-2 gap-2 rounded-md border border-inherit p-2">
          <legend className="px-4">{t('TITLE')}</legend>
          <ProdutosEntradaProvider produtos={produtos}>
            <FormEntradaProduto produtos={produtos} />
            <div className="flex flex-1 flex-col bg-background rounded-xl p-4">
              <Tabela />
              <div>
                <Enviar
                  fornecedores={fornecedores.data}
                  empresas={empresas.data}
                />
              </div>
            </div>
          </ProdutosEntradaProvider>
        </fieldset>
      </Container>
    </>
  )
}
export default EntradaPage
