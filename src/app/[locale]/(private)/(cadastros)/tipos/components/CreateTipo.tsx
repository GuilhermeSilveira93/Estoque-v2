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

import { criarTipo } from '@/@actions/cadastros/tipos/criarTipo'

import CreateTipoForm from './CreateTipoForm'

const CreateTipo = memo(async () => {
  const t = await getTranslations('TYPES')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          {t('CREATETYPE')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('CADTYPE')}</DialogTitle>
        </DialogHeader>
        <CreateTipoForm criarTipo={criarTipo} />
      </DialogContent>
    </Dialog>
  )
})
CreateTipo.displayName = 'CreateTipo'
export default CreateTipo
