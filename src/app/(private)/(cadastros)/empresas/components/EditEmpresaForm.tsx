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

import { useEmpresaEditForm, useEmpresaEditFormProps } from '@/hooks/cadastro';
type EditEmpresaFormProps = useEmpresaEditFormProps;

const EditEmpresaForm = memo(
  ({ empresa, atualizarEmpresa }: EditEmpresaFormProps) => {
    const { form, updateEmpresa, isSubmitting } = useEmpresaEditForm({
      empresa,
      atualizarEmpresa
    });
    return (
      <>
        <FormRoot {...form}>
          <form onSubmit={updateEmpresa} className="space-y-3">
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
            <div className="grid">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Loading...' : 'Salvar'}
              </Button>
            </div>
          </form>
        </FormRoot>
      </>
    );
  }
);
EditEmpresaForm.displayName = 'EditEmpresaForm';
export default EditEmpresaForm;
