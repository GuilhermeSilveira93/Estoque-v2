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

import { criarFornecedor } from '@/@actions'

import CreateFornecedorForm from './createFornecedorForm'

const CreateFornecedor = memo(async () => {
  const t = await getTranslations('SUPPLIERS')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          {t('CADSUPL')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('CREATESUPL')}</DialogTitle>
        </DialogHeader>
        <CreateFornecedorForm criarFornecedor={criarFornecedor} />
      </DialogContent>
    </Dialog>
  )
})
CreateFornecedor.displayName = 'CreateFornecedor'
export default CreateFornecedor
