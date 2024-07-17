'use client';
import { useForm } from 'react-hook-form';

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

import {
  FormEntradaProdutoSchema,
  FormEntradaProdutoSchemaType
} from '@/@schemas/movimentacao/entrada/FormEntradaProdutoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
export const FormEntradaProduto = () => {
  const form = useForm<FormEntradaProdutoSchemaType>({
    mode: 'all',
    defaultValues: {
      S_NOME: ''
    },
    resolver: zodResolver(FormEntradaProdutoSchema)
  });
  return (
    <fieldset className="flex flex-1 rounded-md border border-inherit p-2">
      <legend className="px-4">Entrada de Mercadoria</legend>
      <FormRoot {...form}>
        <form className="w-full space-y-3">
          <FormField
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
                  <SelectContent></SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid">
            <Button type="submit">{'Salvar'}</Button>
          </div>
        </form>
      </FormRoot>
    </fieldset>
  );
};
