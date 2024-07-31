import { memo } from 'react'

import { Button } from '@/components/ui'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { criarFornecedor } from '@/@actions'

import CreateFornecedorForm from './createFornecedorForm'

const CreateFornecedor = memo(async () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          Criar Fornecedor +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Cadastro de Produto</DialogTitle>
        </DialogHeader>
        <CreateFornecedorForm criarFornecedor={criarFornecedor} />
      </DialogContent>
    </Dialog>
  )
})
CreateFornecedor.displayName = 'CreateFornecedor'
export default CreateFornecedor
