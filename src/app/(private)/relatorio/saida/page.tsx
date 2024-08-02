import Link from 'next/link'

import { FormRelatorioSaida } from './components'
import { Container } from '@/components/ui'

import { Empresa, Produto } from '@/@classes'

const RelatorioSaida = async () => {
  const empresas = (await new Empresa().getAll()).body
  const produtos = (await new Produto().getAll()).body
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={{ pathname: '/relatorio/saida' }}>Relatório de Saida</Link>
      </h1>
      <Container className="flex justify-center">
        <FormRelatorioSaida empresas={empresas.data} produtos={produtos.data} />
      </Container>
    </>
  )
}
export default RelatorioSaida
