import Link from 'next/link'

import { FormRelatorioEntrada } from './components'
import { Container } from '@/components/ui'

import { Produto } from '@/@classes'
import { Fornecedor } from '@/@classes/Fornecedor'

const RelatorioEntrada = async () => {
  const fornecedores = (await new Fornecedor().getAll()).body
  const produtos = (await new Produto().getAll()).body
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground">
        <Link href={{ pathname: '/relatorio/entrada' }}>
          Relatório de Entrada
        </Link>
      </h1>
      <Container className="flex justify-center">
        <FormRelatorioEntrada
          fornecedores={fornecedores.data}
          produtos={produtos.data}
        />
      </Container>
    </>
  )
}
export default RelatorioEntrada
