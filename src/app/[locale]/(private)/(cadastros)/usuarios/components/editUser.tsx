import { memo } from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { atualizarUsuario } from '@/@actions'
import { GrupoType, UsuarioType } from '@/@types/api'
import { Settings } from 'lucide-react'

import EditProdForm from './EditUserForm'
type EditUserProps = {
  usuario: UsuarioType
  grupos: GrupoType[]
}
const EditUser = memo(({ usuario, grupos }: EditUserProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Settings className="cursor-pointer text-secondary" />
      </PopoverTrigger>
      <PopoverContent side="left" align="center">
        <EditProdForm
          usuario={usuario}
          grupos={grupos}
          atualizarUsuario={atualizarUsuario}
        />
      </PopoverContent>
    </Popover>
  )
})
EditUser.displayName = 'EditUser'
export default EditUser
