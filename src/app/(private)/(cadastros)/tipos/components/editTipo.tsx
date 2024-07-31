import { memo } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { atualizarTipo } from '@/@actions'
import { TiposType } from '@/@types/api'
import { Settings } from 'lucide-react'

import EditTipoForm from './EditTipoForm'
type EditEmpresaProps = {
  tipo: TiposType
}
const EditTipo = memo(async ({ tipo }: EditEmpresaProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditTipoForm tipo={tipo} atualizarTipo={atualizarTipo} />
      </PopoverContent>
    </Popover>
  )
})
EditTipo.displayName = 'EditTipo'
export default EditTipo
