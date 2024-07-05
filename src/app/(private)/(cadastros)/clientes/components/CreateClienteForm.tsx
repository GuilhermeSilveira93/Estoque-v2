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

import { CreateTipoSchema, CreateTipoType } from '@/@schemas';
import { useTipoCreateFormProps } from '@/hooks/cadastro';
import {
  ResponseReturn,
  useGenericCreateForm
} from '@/hooks/genericCreateForm';
type CreateTipoFormProps = useTipoCreateFormProps;
const CreateTipoForm = memo(({ criarTipo }: CreateTipoFormProps) => {
  const { form, isSubmitting, submit } = useGenericCreateForm<
    CreateTipoType,
    ResponseReturn
  >({
    requestHandler: criarTipo,
    schema: CreateTipoSchema
  });
  return (
    <>
      <FormRoot {...form}>
        <form onSubmit={submit} className="space-y-3">
          <FormField
            control={form.control}
            name="S_NOME"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo:</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o nome do Tipo do Produto"
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
CreateTipoForm.displayName = 'CreateTipoForm';
export default CreateTipoForm;
