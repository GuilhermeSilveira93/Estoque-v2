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

import { CreateUserSchema, CreateUserType } from '@/@schemas'
import { GrupoType } from '@/@types/api'
import { ResponseReturn, useGenericCreateForm } from '@/hooks/genericCreateForm'
type CreateUserFormProps = {
  // eslint-disable-next-line no-unused-vars
  criarUsuario: (data: CreateUserType) => Promise<ResponseReturn>
  grupos: GrupoType[]
}
const CreateUserForm = memo(({ criarUsuario, grupos }: CreateUserFormProps) => {
  const t = useTranslations('USERS.TABLE')
  const u = useTranslations('USERS')
  const { form, isSubmitting, submit } = useGenericCreateForm<
    CreateUserType,
    ResponseReturn
  >({
    requestHandler: criarUsuario,
    schema: CreateUserSchema,
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
                <FormLabel>{t('S_NOME')}:</FormLabel>
                <FormControl>
                  <Input type="text" placeholder={t('S_NOMEPH')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="S_EMAIL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('S_EMAIL')}:</FormLabel>
                <FormControl>
                  <Input type="text" placeholder={t('S_EMAILPH')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="S_SENHA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('S_SENHA')}:</FormLabel>
                <FormControl>
                  <Input type="text" placeholder={u('S_SENHAPH')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ID_GRUPO"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('S_GRUPO')}:</FormLabel>
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
                    {grupos.map((grupo) => (
                      <SelectItem
                        key={grupo.ID_GRUPO + 'GrupoID'}
                        value={grupo.ID_GRUPO.toString()}
                      >
                        {grupo.S_NOME}
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
              {isSubmitting ? 'Loading...' : t('SAVE')}
            </Button>
          </div>
        </form>
      </FormRoot>
    </>
  )
})
CreateUserForm.displayName = 'CreateUserForm'
export default CreateUserForm
