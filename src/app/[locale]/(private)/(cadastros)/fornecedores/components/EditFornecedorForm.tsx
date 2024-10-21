'use client'
import { useTranslations } from 'next-intl'
import React, { memo } from 'react'

import { Button, Input } from '@/components/ui'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form as FormRoot,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  useFornecedorEditForm,
  useFornecedorEditFormProps,
} from '@/hooks/cadastro'
type EditFornecedorFormProps = useFornecedorEditFormProps

const EditFornecedorForm = memo(
  ({ fornecedor, atualizarFornecedor }: EditFornecedorFormProps) => {
    const t = useTranslations('SUPPLIERS.TABLE')
    const { form, updateFornecedor, isSubmitting } = useFornecedorEditForm({
      fornecedor,
      atualizarFornecedor,
    })
    return (
      <>
        <FormRoot {...form}>
          <form onSubmit={updateFornecedor} className="space-y-3">
            <FormField
              control={form.control}
              name="S_NOME"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('S_NOME')}</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={t('S_NOMEPH')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="S_ATIVO"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-2 shadow">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{t('S_ATIVO')}?</FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <div className="grid">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t('SUBMITTING') : t('SAVE')}
              </Button>
            </div>
          </form>
        </FormRoot>
      </>
    )
  }
)
EditFornecedorForm.displayName = 'EditFornecedorForm'
export default EditFornecedorForm
