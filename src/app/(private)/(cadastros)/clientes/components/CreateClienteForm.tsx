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

import { CreateClienteType, CreateClienteSchema } from '@/@schemas';
import { EmpresaType } from '@/@types/api';
import {
  ResponseReturn,
  useGenericCreateForm
} from '@/hooks/genericCreateForm';
type CreateClienteFormProps = {
  // eslint-disable-next-line no-unused-vars
  criarCliente: (data: CreateClienteType) => Promise<ResponseReturn>,
  empresas: EmpresaType[]
};
const CreateClienteForm = memo(
  ({ criarCliente, empresas }: CreateClienteFormProps) => {
    const { form, isSubmitting, submit } = useGenericCreateForm<
      CreateClienteType,
      ResponseReturn
    >({
      requestHandler: criarCliente,
      schema: CreateClienteSchema
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
                  <FormLabel>Cliente:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Digite o nome do Cliente"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ID_EMPRESA"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa</FormLabel>
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
                      {empresas.map((empresa) => (
                        <SelectItem
                          key={empresa.ID_EMPRESA + 'EmpresaID'}
                          value={empresa.ID_EMPRESA.toString()}
                        >
                          {empresa.S_NOME}
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
  }
);
CreateClienteForm.displayName = 'CreateClienteForm';
export default CreateClienteForm;
