'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@/components/ui';
import { Label } from '@/components/ui/label';

import { atualizarProduto } from '@/@actions';
import { Produto } from '@/@types/api';
import { PascalCase } from '@/@utils/pascalCaseString';
import { useProdEditForm } from '@/hooks/home';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
type EditProdFormProps = {
  produto: Produto
};
const EditProdForm = ({ produto }: EditProdFormProps) => {
  const router = useRouter();
  const { form } = useProdEditForm(produto);
  const updateProd = async (data: EditProdType) => {
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        atualizarProduto({ ID_PRODUTO: produto.ID_PRODUTO, data })
          .then((res) => {
            router.refresh();
            resolve(res);
          })
          .catch((err) => {
            reject(JSON.stringify(err));
          });
      });
    };
    toast.promise(response, {
      loading: 'Atualizando Produto...',
      success: (data) => {
        return data.message;
      },
      error: (data) => {
        return data.message;
      }
    });
  };
  return (
    /*@ts-expect-error: tipagem está correta.*/
    <form action={form.handleSubmit(updateProd)}>
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
      <Button title="Enviar" value={'Enviar'} type="submit">
        Salvar
      </Button>
    </form>
  );
};
export default EditProdForm;
