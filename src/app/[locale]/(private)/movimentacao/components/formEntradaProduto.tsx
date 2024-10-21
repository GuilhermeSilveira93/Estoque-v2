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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { LimparEntrada } from '@/@Reducers/entrada/ActionSetEntrada'
import { ProdutosType } from '@/@types/api'
import { useFormEntrada } from '@/hooks/movimentacao/entrada/useFormEntrada'
import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada'
export const FormEntradaProduto = ({
  produtos,
}: {
  produtos: { data: ProdutosType[] }
}) => {
  const { form, onSubmit } = useFormEntrada()
  const { setEntrada } = useProdutosEntrada()
  const t = useTranslations('MOVEMENT')
  return (
    <FormRoot {...form}>
      <form className="w-full space-y-3" onSubmit={onSubmit}>
        <FormField
          name="ID_PRODUTO"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('PRODUCT')}</FormLabel>
              <Select
                {...field}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="placeholder:text-red-500">
                    <SelectValue datatype="string" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {produtos?.data?.map((produto) => (
                    <SelectItem
                      key={produto.ID_PRODUTO}
                      value={produto.ID_PRODUTO}
                    >
                      {produto.S_NOME}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input type="text" placeholder={t('VALUEPH')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('AMOUNT')}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder={t('AMOUNTPH')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="N_QUANTIDADE"
        />
        <div>
          <Button type="submit" className="w-1/2">
            {t('INSERT')}
          </Button>
          <Button
            variant={'destructive'}
            type="button"
            className="w-1/2"
            onClick={() => setEntrada(LimparEntrada(null))}
          >
            {t('CANCEL')}
          </Button>
        </div>
      </form>
    </FormRoot>
  )
}
