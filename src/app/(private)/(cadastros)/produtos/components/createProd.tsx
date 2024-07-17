import Link from 'next/link';
import { memo } from 'react';

import { Button } from '@/components/ui';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { criarProduto } from '@/@actions';
import { Tipo } from '@/@classes/Tipo';

import CreateProdForm from './CreateProdForm';

const CreateProd = memo(async () => {
  const tipos = (await new Tipo().getAll()).body;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="shadow-md shadow-primary">
          Criar Produto +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {tipos.total > 0 ? (
          <>
            <DialogHeader>
              <DialogTitle>Cadastro de Produto</DialogTitle>
            </DialogHeader>
            <CreateProdForm criarProduto={criarProduto} tipos={tipos.data} />
          </>
        ) : (
          <Link href={'/tipos'}>Crie um tipo antes de criar um produto</Link>
        )}
      </DialogContent>
    </Dialog>
  );
});
CreateProd.displayName = 'CreateProd';
export default CreateProd;
