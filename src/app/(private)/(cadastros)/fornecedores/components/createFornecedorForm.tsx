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
  useFornecedorCreateForm,
  useFornecedorCreateFormProps
} from '@/hooks/cadastro';
type CreateFornecedorFormProps = useFornecedorCreateFormProps;
const CreateProdForm = memo(
  ({ criarFornecedor }: CreateFornecedorFormProps) => {
    const { form, createFornecedor, isSubmitting } = useFornecedorCreateForm({
      criarFornecedor
    });
    return (
      <>
        <FormRoot {...form}>
          <form onSubmit={createFornecedor} className="space-y-3">
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
CreateProdForm.displayName = 'CreateProdForm';
export default CreateProdForm;
