'use client';

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

import { CancelarEntrada } from '@/@Reducers/entrada/ActionSetEntrada';
import { ProdutosType } from '@/@types/api';
import { useFormEntrada } from '@/hooks/movimentacao/entrada/useFormEntrada';
import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada';
export const FormEntradaProduto = ({
  produtos
}: {
  produtos: { data: ProdutosType[] }
}) => {
  const { form, onSubmit } = useFormEntrada();
  const { setEntrada } = useProdutosEntrada();
  return (
    <FormRoot {...form}>
      <form className="w-full space-y-3" onSubmit={onSubmit}>
        <FormField
          name="ID_PRODUTO"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Produto</FormLabel>
              <Select
                {...field}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="placeholder:text-red-500">
                    <SelectValue datatype="string" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {produtos.data.map((produto) => (
                    <SelectItem
                      key={produto.ID_PRODUTO}
                      value={produto.ID_PRODUTO}
                    >
                      {produto.S_NOME}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="S_DIMENSAO"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dimensões:</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Dimensão do produto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="S_DETALHES"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detalhes:</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Detalhes do produto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="N_VALOR"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor:</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Valor do produto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="N_QUANTIDADE"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade:</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  inputMode="numeric"
                  placeholder="Quantidade do produto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="w-1/2">
            Inserir
          </Button>
          <Button
            variant={'destructive'}
            type="button"
            className="w-1/2"
            onClick={() => setEntrada(CancelarEntrada(null))}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </FormRoot>
  );
};
