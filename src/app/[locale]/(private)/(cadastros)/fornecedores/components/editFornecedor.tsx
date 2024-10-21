import { memo } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { atualizarFornecedor } from '@/@actions/cadastros/fornecedores/atualizarFornecedor'
import { FornecedorType } from '@/@types/api'
import { Settings } from 'lucide-react'

import EditFornecedorForm from './EditFornecedorForm'
type EditFornecedorProps = {
  fornecedor: FornecedorType
}
const EditFornecedor = memo(async ({ fornecedor }: EditFornecedorProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditFornecedorForm
          fornecedor={fornecedor}
          atualizarFornecedor={atualizarFornecedor}
        />
      </PopoverContent>
    </Popover>
  )
})
EditFornecedor.displayName = 'EditFornecedor'
export default EditFornecedor
