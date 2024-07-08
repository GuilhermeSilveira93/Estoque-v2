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

import { CreateFornecedorSchema, CreateFornecedorType } from '@/@schemas';
import {
  ResponseReturn,
  useGenericCreateForm
} from '@/hooks/genericCreateForm';
type CreateFornecedorFormProps = useFornecedorCreateFormProps;
const CreateFornecedorForm = memo(
  ({ criarFornecedor }: CreateFornecedorFormProps) => {
    const { form, isSubmitting, submit } = useGenericCreateForm<
      CreateFornecedorType,
      ResponseReturn
    >({ requestHandler: criarFornecedor, schema: CreateFornecedorSchema });
    return (
      <>
        <FormRoot {...form}>
          <form onSubmit={submit} className="space-y-3">
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
CreateFornecedorForm.displayName = 'CreateFornecedorForm';
export default CreateFornecedorForm;
