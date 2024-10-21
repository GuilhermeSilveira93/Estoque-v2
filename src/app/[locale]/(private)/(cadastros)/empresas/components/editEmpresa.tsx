import { memo } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { atualizarEmpresa } from '@/@actions/cadastros/empresas/atualizarEmpresa'
import { EmpresaType } from '@/@types/api'
import { Settings } from 'lucide-react'

import EditEmpresaForm from './EditEmpresaForm'
type EditEmpresaProps = {
  empresa: EmpresaType
}
const EditEmpresa = memo(async ({ empresa }: EditEmpresaProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditEmpresaForm
          empresa={empresa}
          atualizarEmpresa={atualizarEmpresa}
        />
      </PopoverContent>
    </Popover>
  )
})
EditEmpresa.displayName = 'EditEmpresa'
export default EditEmpresa
