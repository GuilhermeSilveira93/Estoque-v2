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

import { criarEmpresa } from '@/@actions/cadastros/empresas/criarEmpresa'

import CreateEmpresaForm from './CreateEmpresaForm'

const CreateEmpresa = memo(async () => {
  const t = await getTranslations('COMPANIE')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          {t('CREATECOMP')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('CADCOMP')}</DialogTitle>
        </DialogHeader>
        <CreateEmpresaForm criarEmpresa={criarEmpresa} />
      </DialogContent>
    </Dialog>
  )
})
CreateEmpresa.displayName = 'CreateEmpresa'
export default CreateEmpresa
