'use client'

import { useTranslations } from 'next-intl'

import { Button, Input } from '@/components/ui'
import {
  Form as FormRoot,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { RemoverItem } from '@/@Reducers/entrada/ActionSetEntrada'
import { useFormEditEntrada } from '@/hooks/movimentacao/entrada/useFormEditEntrada'
import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada'

import { InfoTabela } from '../provider/produtosEntrada'

export const FormEntradaEditProduto = ({
  produto,
}: {
  produto: InfoTabela
}) => {
  const { setEntrada } = useProdutosEntrada()
  const t = useTranslations('MOVEMENT')
  const { form, onSubmit } = useFormEditEntrada({ produto })
  return (
    <FormRoot {...form}>
      <form className="w-full space-y-3" onSubmit={onSubmit}>
        <FormField
          name="S_DIMENSAO"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('DIMENSIONS')}</FormLabel>
              <FormControl>
                <Input type="text" placeholder={t('DIMENSIONSPH')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="S_DETALHES"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('DETAILS')}</FormLabel>
              <FormControl>
                <Input type="text" placeholder={t('DETAILSPH')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="N_VALOR"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('VALUE')}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder={t('VALUEPH')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="N_QUANTIDADE"
          render={({ field: { onChange, ...formulario } }) => (
            <FormItem>
              <FormLabel>{t('AMOUNT')}</FormLabel>
              <FormControl>
                <Input
                  onChange={(e) => onChange(Number(e.target.value))}
                  type="number"
                  inputMode="numeric"
                  placeholder={t('AMOUNTPH')}
                  {...formulario}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="w-full">
            {t('SAVE')}
          </Button>
          <Button
            variant={'destructive'}
            type="button"
            className="w-full"
            onClick={() =>
              setEntrada(RemoverItem({ ID_PRODUTO: produto.ID_PRODUTO }))
            }
          >
            {t('DELETE')}
          </Button>
        </div>
      </form>
    </FormRoot>
  )
}
