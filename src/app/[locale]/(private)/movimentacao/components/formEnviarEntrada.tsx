'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui'
import {
  Form as FormRoot,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { FornecedorType } from '@/@types/api'
import { useEnviarProdutosEntradaForm } from '@/hooks/movimentacao/entrada/useEnviarProdutosEntradaForm'
export const FormEnviarEntrada = ({
  fornecedores,
}: {
  fornecedores: FornecedorType[]
}) => {
  const t = useTranslations('MOVEMENT')
  const { form, onSubmit } = useEnviarProdutosEntradaForm()
  return (
    <FormRoot {...form}>
      <form className="w-full space-y-3" onSubmit={onSubmit}>
        <FormField
          name="ID_FORNECEDOR"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('SUPPLIER')}</FormLabel>
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
                  {fornecedores.map((fornecedor) => (
                    <SelectItem
                      key={fornecedor.ID_FORNECEDOR}
                      value={fornecedor.ID_FORNECEDOR}
                    >
                      {fornecedor.S_NOME}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid">
          <Button type="submit">{t('INSERT')}</Button>
        </div>
      </form>
    </FormRoot>
  )
}
