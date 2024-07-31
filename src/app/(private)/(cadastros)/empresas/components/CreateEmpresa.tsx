import { memo } from 'react'

import { Button } from '@/components/ui'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { criarEmpresa } from '@/@actions'

import CreateEmpresaForm from './CreateEmpresaForm'

const CreateEmpresa = memo(async () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          Criar Empresa +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro de Empresa</DialogTitle>
        </DialogHeader>
        <CreateEmpresaForm criarEmpresa={criarEmpresa} />
      </DialogContent>
    </Dialog>
  )
})
CreateEmpresa.displayName = 'CreateEmpresa'
export default CreateEmpresa
