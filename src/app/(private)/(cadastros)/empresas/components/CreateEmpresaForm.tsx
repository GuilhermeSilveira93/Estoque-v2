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
  useEmpresaCreateForm,
  useEmpresaCreateFormProps
} from '@/hooks/cadastro';
type CreateEmpresaFormProps = useEmpresaCreateFormProps;
const CreateEmpForm = memo(({ criarEmpresa }: CreateEmpresaFormProps) => {
  const { form, createEmpresa, isSubmitting } = useEmpresaCreateForm({
    criarEmpresa
  });
  return (
    <>
      <FormRoot {...form}>
        <form onSubmit={createEmpresa} className="space-y-3">
          <FormField
            control={form.control}
            name="S_NOME"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa:</FormLabel>
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
});
CreateEmpForm.displayName = 'CreateEmpForm';
export default CreateEmpForm;
