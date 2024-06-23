'use client';
import React, { memo } from 'react';

import { Button, Input } from '@/components/ui';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form as FormRoot,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { useTipoEditForm, useTipoEditFormProps } from '@/hooks/cadastro';
type EditTipoFormProps = useTipoEditFormProps;

const EditTipoForm = memo(({ tipo, atualizarTipo }: EditTipoFormProps) => {
  const { form, updateTipo, isSubmitting } = useTipoEditForm({
    tipo,
    atualizarTipo
  });
  return (
    <>
      <FormRoot {...form}>
        <form onSubmit={updateTipo} className="space-y-3">
          <FormField
            control={form.control}
            name="S_NOME"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Empresa:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o nome da Empresa"
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
  );
});
EditTipoForm.displayName = 'EditTipoForm';
export default EditTipoForm;