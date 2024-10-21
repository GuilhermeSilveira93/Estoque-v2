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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { CreateProdSchema, CreateProdType } from '@/@schemas'
import { TiposType } from '@/@types/api/ReqTipos'
import { ResponseReturn, useGenericCreateForm } from '@/hooks/genericCreateForm'
type CreateUserFormProps = {
  // eslint-disable-next-line no-unused-vars
  criarProduto: (data: CreateProdType) => Promise<ResponseReturn>
  tipos: TiposType[]
}
const CreateProdForm = memo(({ criarProduto, tipos }: CreateUserFormProps) => {
  const t = useTranslations('PRODUCT.TABLE')
  const { form, isSubmitting, submit } = useGenericCreateForm<
    CreateProdType,
    ResponseReturn
  >({
    requestHandler: criarProduto,
    schema: CreateProdSchema,
  })
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
          <FormField
            control={form.control}
            name="N_SERIAL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('S_SERIAL')}</FormLabel>
                <FormControl>
                  <Input type="text" placeholder={t('S_SERIALPH')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ID_TIPO"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('S_TIPO')}</FormLabel>
                <Select
                  {...field}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue datatype="number" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {tipos.map((tipo) => (
                      <SelectItem
                        key={tipo.ID_TIPO + 'TipoID'}
                        value={tipo.ID_TIPO.toString()}
                      >
                        {tipo.S_NOME}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
CreateProdForm.displayName = 'CreateProdForm'
export default CreateProdForm
