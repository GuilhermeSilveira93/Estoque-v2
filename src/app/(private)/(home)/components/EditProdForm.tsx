'use client';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Button, Input } from '@/components/ui';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

import { Produto } from '@/@types/api';
import { EditProdSchema, EditProdType } from '@/@types/EditProd';
import { PascalCase } from '@/@utils/pascalCaseString';
import { atualizarProduto } from '@/api';
import { zodResolver } from '@hookform/resolvers/zod';
type EditProdFormProps = {
  produto: Produto
};
const EditProdForm = ({ produto }: EditProdFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EditProdType>({
    mode: 'all',
    defaultValues: {
      S_NOME: produto.produto,
      S_ATIVO: produto.S_ATIVO === 'S'
    },
    resolver: zodResolver(EditProdSchema)
  });
  const updateProd = async (data: EditProdType) => {
    const { S_NOME, S_ATIVO } = data;
    await atualizarProduto({ ID_PRODUTO: produto.ID_PRODUTO, S_ATIVO, S_NOME });
    console.log(data);
  };
  return (
    /*@ts-expect-error: tipagem está correta.*/
    <form action={handleSubmit(updateProd)}>
      <h1>Editar: {PascalCase(produto.produto)}</h1>
      <Label htmlFor="S_NOME" className="font-bold text-secondary">
        Nome
      </Label>
      <Input {...register('S_NOME')} placeholder={produto.produto} />
      {errors.S_NOME && (
        <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
          {errors.S_NOME.message}
        </p>
      )}
      <div className="flex items-center gap-2 py-4">
        <Label htmlFor="S_ATIVO" className="font-bold text-secondary">
          Ativo?:
        </Label>
        <input
          type="checkbox"
          defaultChecked={produto.S_ATIVO === 'S'}
          {...register('S_ATIVO')}
        />
      </div>
      {errors.S_ATIVO && (
        <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
          {errors.S_ATIVO.message}
        </p>
      )}
      <Button title="Enviar" value={'Enviar'} type="submit">
        Salvar
      </Button>
    </form>
  );
};
export default EditProdForm;
