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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { GrupoType } from '@/@types/api'
import { useUserEditForm, useUserEditFormProps } from '@/hooks/cadastro'
type EditProdFormProps = useUserEditFormProps & {
  grupos: GrupoType[]
}
const EditProdForm = memo(
  ({ usuario, atualizarUsuario, grupos }: EditProdFormProps) => {
    const t = useTranslations('USERS.TABLE')
    const { form, updateUser, isSubmitting } = useUserEditForm({
      usuario,
      atualizarUsuario,
    })
    return (
      <>
        <FormRoot {...form}>
          <form onSubmit={updateUser} className="space-y-3">
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
                    <Input
                      type="text"
                      placeholder={t('S_EMAILPH')}
                      {...field}
                    />
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
                    <Input
                      type="text"
                      placeholder={t('S_SENHAPH')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ID_GRUPO"
              render={({ field }) => {
                console.log(field)
                return (
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
                )
              }}
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
EditProdForm.displayName = 'EditProdForm'
export default EditProdForm
