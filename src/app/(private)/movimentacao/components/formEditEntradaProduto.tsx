'use client'

import { Button, Input } from '@/components/ui'
import {
  Form as FormRoot,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { RemoverItem } from '@/@Reducers/entrada/ActionSetEntrada'
import { useFormEditEntrada } from '@/hooks/movimentacao/entrada/useFormEditEntrada'
import { useProdutosEntrada } from '@/hooks/movimentacao/entrada/useProdutosEntrada'

import { InfoTabela } from '../provider/produtosEntrada'

export const FormEntradaEditProduto = ({
  produto,
}: {
  produto: InfoTabela
}) => {
  const { setEntrada } = useProdutosEntrada()
  const { form, onSubmit } = useFormEditEntrada({ produto })
  return (
    <FormRoot {...form}>
      <form className="w-full space-y-3" onSubmit={onSubmit}>
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
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Valor do produto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="N_QUANTIDADE"
          render={({ field: { onChange, ...formulario } }) => (
            <FormItem>
              <FormLabel>Quantidade:</FormLabel>
              <FormControl>
                <Input
                  onChange={(e) => onChange(Number(e.target.value))}
                  type="number"
                  inputMode="numeric"
                  placeholder="Quantidade do produto"
                  {...formulario}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="w-full">
            Salvar
          </Button>
          <Button
            variant={'destructive'}
            type="button"
            className="w-full"
            onClick={() =>
              setEntrada(RemoverItem({ ID_PRODUTO: produto.ID_PRODUTO }))
            }
          >
            excluir
          </Button>
        </div>
      </form>
    </FormRoot>
  )
}
