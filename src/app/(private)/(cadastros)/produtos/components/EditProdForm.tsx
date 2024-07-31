'use client'
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

import { TiposType } from '@/@types/api/ReqTipos'
import { useProdEditForm, useProdEditFormProps } from '@/hooks/cadastro'
type EditProdFormProps = useProdEditFormProps & {
  tipos: TiposType[]
}

const EditProdForm = memo(
  ({ produto, atualizarProduto, tipos }: EditProdFormProps) => {
    const { form, updateProd, isSubmitting } = useProdEditForm({
      produto,
      atualizarProduto,
    })
    return (
      <>
        <FormRoot {...form}>
          <form onSubmit={updateProd} className="space-y-3">
            <FormField
              control={form.control}
              name="S_NOME"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Digite o nome do produto"
                      {...field}
                    />
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
                  <FormLabel>Tipo do Produto:</FormLabel>
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
                          key={tipo.ID_TIPO + 'GrupoID'}
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
            <FormField
              control={form.control}
              name="N_SERIAL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Serial: </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Serial do produto"
                      {...field}
                    />
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
                    <FormLabel>Ativo?</FormLabel>
                  </div>
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
  }
)
EditProdForm.displayName = 'EditProdForm'
export default EditProdForm
