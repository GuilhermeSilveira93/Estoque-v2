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

import { CreateTipoSchema, CreateTipoType } from '@/@schemas'
import { ResponseReturn, useGenericCreateForm } from '@/hooks/genericCreateForm'
type CreateTipoFormProps = {
  // eslint-disable-next-line no-unused-vars
  criarTipo: (payload: CreateTipoType) => Promise<ResponseReturn>
}
const CreateTipoForm = memo(({ criarTipo }: CreateTipoFormProps) => {
  const { form, isSubmitting, submit } = useGenericCreateForm<
    CreateTipoType,
    ResponseReturn
  >({
    requestHandler: criarTipo,
    schema: CreateTipoSchema,
  })
  const t = useTranslations('TYPES.TABLE')
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
CreateTipoForm.displayName = 'CreateTipoForm'
export default CreateTipoForm
