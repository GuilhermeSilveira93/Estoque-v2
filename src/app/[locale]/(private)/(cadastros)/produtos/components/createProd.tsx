import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { memo } from 'react'

import { Button } from '@/components/ui'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { criarProduto } from '@/@actions'
import { Tipo } from '@/@classes/Tipo'

import CreateProdForm from './CreateProdForm'

const CreateProd = memo(async () => {
  const t = await getTranslations('PRODUCT')
  const tipos = (await new Tipo().getAll()).body
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          {t('CADPROD')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {tipos.total > 0 ? (
          <>
            <DialogHeader>
              <DialogTitle>{t('CREATEPROD')}</DialogTitle>
            </DialogHeader>
            <CreateProdForm criarProduto={criarProduto} tipos={tipos.data} />
          </>
        ) : (
          <Link href={'/tipos'}>{t('NOTIPO')}</Link>
        )}
      </DialogContent>
    </Dialog>
  )
})
CreateProd.displayName = 'CreateProd'
export default CreateProd
