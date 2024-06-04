'use client';
import React from 'react';

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

import { useProdEditForm, useProdEditFormProps } from '@/hooks/home';

const EditProdForm = ({ produto, atualizarProduto }: useProdEditFormProps) => {
  const { form, updateProd, isSubmitting } = useProdEditForm({
    produto,
    atualizarProduto
  });

  return (
    <>
      <FormRoot {...form}>
        <form onSubmit={updateProd} className="space-y-3">
          <FormField
            control={form.control}
            name="S_NOME"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Produto</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Digite o nome do Produto"
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
      {/* <form action={form.handleSubmit(updateProd)}>
        <h1>Editar: {PascalCase(produto.produto)}</h1>
        <Label htmlFor="S_NOME" className="font-bold text-secondary">
          Nome
        </Label>
        <Input {...form.register('S_NOME')} placeholder={produto.produto} />
        {form.formState.errors.S_NOME && (
          <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
            {form.formState.errors.S_NOME.message}
          </p>
        )}
        <div className="flex items-center gap-2 py-4">
          <Label htmlFor="S_ATIVO" className="font-bold text-secondary">
            Ativo?:
          </Label>
          <input
            type="checkbox"
            defaultChecked={produto.S_ATIVO === 'S'}
            {...form.register('S_ATIVO')}
          />
        </div>
        {form.formState.errors.S_ATIVO && (
          <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
            {form.formState.errors.S_ATIVO.message}
          </p>
        )}
        <Button
          title="Enviar"
          value={'Enviar'}
          type="submit"
          disabled={isSubmitting}
        >
          Salvar
        </Button>
      </form> */}
    </>
  );
};
export default EditProdForm;
