'use client'
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
                <FormLabel>Nome:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o nome do usuário"
                    {...field}
                  />
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
                <FormLabel>E-mail: </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o e-mail do usuário"
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
                <FormLabel>Senha: </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Senha de acesso" {...field} />
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
                <FormLabel>Grupo</FormLabel>
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
              {isSubmitting ? 'Loading...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </FormRoot>
    </>
  )
})
CreateUserForm.displayName = 'CreateUserForm'
export default CreateUserForm
