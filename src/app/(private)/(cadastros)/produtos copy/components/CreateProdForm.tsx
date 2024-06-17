'use client';
import React, { memo } from 'react';

import { Button, Input } from '@/components/ui';
import {
  Form as FormRoot,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { TiposType } from '@/@types/api/ReqTipos';
import {
  useProdCreateForm,
  useProdCreateFormProps
} from '@/hooks/cadastro/produtos/useProdCreateForm';
type CreateUserFormProps = useProdCreateFormProps & {
  tipos: TiposType[]
};
const CreateProdForm = memo(({ criarProduto, tipos }: CreateUserFormProps) => {
  const { form, createProd, isSubmitting } = useProdCreateForm({
    criarProduto
  });
  return (
    <>
      <FormRoot {...form}>
        <form onSubmit={createProd} className="space-y-3">
          <FormField
            control={form.control}
            name="S_NOME"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Produto:</FormLabel>
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
            name="N_SERIAL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serial: </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Serial Produto" {...field} />
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
                <FormLabel>Tipo</FormLabel>
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
              {isSubmitting ? 'Loading...' : 'Salvar'}
            </Button>
          </div>
        </form>
      </FormRoot>
    </>
  );
});
CreateProdForm.displayName = 'CreateProdForm';
export default CreateProdForm;
