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

import { criarUsuario } from '@/@actions'
import { Grupos } from '@/@classes/Grupos'

import CreateUserForm from './CreateUserForm'

const CreateUser = memo(async () => {
  const t = await getTranslations('USERS')
  const grupos = (await new Grupos().getAll()).body
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          {t('CREATEUSER')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('CADUSER')}</DialogTitle>
        </DialogHeader>
        <CreateUserForm criarUsuario={criarUsuario} grupos={grupos.data} />
      </DialogContent>
    </Dialog>
  )
})
CreateUser.displayName = 'CreateUser'
export default CreateUser
