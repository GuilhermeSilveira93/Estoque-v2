import { getTranslations } from 'next-intl/server'
import { memo } from 'react'

import { Button } from '@/components/ui'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { criarCliente } from '@/@actions'
import { Empresa } from '@/@classes'

import CreateTipoForm from './CreateClienteForm'

const CreateCliente = memo(async () => {
  const t = await getTranslations('CUSTOMERS')
  const empresas = (await new Empresa().getAll()).body
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          {t('CREATECUSTOMER')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('CADCUSTOMER')}</DialogTitle>
        </DialogHeader>
        <CreateTipoForm criarCliente={criarCliente} empresas={empresas.data} />
      </DialogContent>
    </Dialog>
  )
})
CreateCliente.displayName = 'CreateCliente'
export default CreateCliente
