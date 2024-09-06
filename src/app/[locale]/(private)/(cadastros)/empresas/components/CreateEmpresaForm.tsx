'use client'
import { useTranslations } from 'next-intl'
import React, { memo } from 'react'

import { Button, Input } from '@/components/ui'
import {
  Form as FormRoot,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { CreateEmpresaSchema, CreateEmpresaType } from '@/@schemas'
import { ResponseReturn, useGenericCreateForm } from '@/hooks/genericCreateForm'
type CreateEmpresaFormProps = {
  // eslint-disable-next-line no-unused-vars
  criarEmpresa: (payload: CreateEmpresaType) => Promise<ResponseReturn>
}
const CreateEmpForm = memo(({ criarEmpresa }: CreateEmpresaFormProps) => {
  const { form, isSubmitting, submit } = useGenericCreateForm<
    CreateEmpresaType,
    ResponseReturn
  >({
    requestHandler: criarEmpresa,
    schema: CreateEmpresaSchema,
  })
  const t = useTranslations('COMPANIE.TABLE')
  return (
    <>
      <FormRoot {...form}>
        <form onSubmit={submit} className="space-y-3">
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
          <div className="grid">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('SUBMITTING') : t('SAVE')}
            </Button>
          </div>
        </form>
      </FormRoot>
    </>
  )
})
CreateEmpForm.displayName = 'CreateEmpForm'
export default CreateEmpForm
