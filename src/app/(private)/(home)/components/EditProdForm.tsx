'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@/components/ui';
import { Label } from '@/components/ui/label';

import { Produto } from '@/@types/api';
import { EditProdSchema, EditProdType } from '@/@types/EditProd';
import { PascalCase } from '@/@utils/pascalCaseString';
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
    defaultValues: { S_NOME: '', S_ATIVO: '' },
    resolver: zodResolver(EditProdSchema)
  });
  const updateProd = async (data: EditProdType) => {
    console.log('asdfasiuf');
    console.log(data);
  };
  return (
    /*@ts-expect-error: tipagem está correta.*/
    <form action={handleSubmit(updateProd)}>
      <h1>Editar: {PascalCase(produto.produto)}</h1>
      <Label htmlFor="S_NOME" className="font-bold text-secondary">
        Nome
      </Label>
      <Input
        {...register('S_NOME')}
        placeholder={produto.produto}
        className=""
      />
      {errors.S_NOME && (
        <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
          {errors.S_NOME.message}
        </p>
      )}
      <Label htmlFor="S_ATIVO" className="font-bold text-secondary">
        Nome
      </Label>
      <Input
        {...register('S_ATIVO')}
        placeholder={produto.produto}
        className=""
      />
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
