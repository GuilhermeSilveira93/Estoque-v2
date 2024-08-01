'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { FornecedorType, ProdutosType } from '@/@types/api'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'

import { useFormRelatorioEntrada } from './useFormRelatorioEntrada'
export const FormRelatorioEntrada = ({
  fornecedores,
  produtos,
}: {
  fornecedores: FornecedorType[]
  produtos: ProdutosType[]
}) => {
  const { form, onSubmit } = useFormRelatorioEntrada()
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-1/2">
        <FormField
          control={form.control}
          name="D_DATA"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel>Período.</FormLabel>
              <div className={cn('grid gap-2')}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={'outline'}
                      className={cn(
                        'w-full text-center font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value?.D_INICIO ? (
                        field.value.D_FIM ? (
                          <>
                            {format(field.value.D_INICIO, 'dd - LLL - y', {
                              locale: ptBR,
                            })}{' '}
                            à{' '}
                            {format(field.value.D_FIM, 'dd - LLL - y', {
                              locale: ptBR,
                            })}
                          </>
                        ) : (
                          format(field.value.D_INICIO, 'dd - LLL - y', {
                            locale: ptBR,
                          })
                        )
                      ) : (
                        <span>Selecione uma data.</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      locale={ptBR}
                      defaultMonth={field.value.D_INICIO}
                      selected={{
                        from: field.value?.D_INICIO,
                        to: field.value?.D_FIM,
                      }}
                      onSelect={(date) => {
                        field.onChange({
                          D_INICIO: date?.from || null,
                          D_FIM: date?.to || null,
                        })
                      }}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
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
                    <SelectValue
                      datatype="string"
                      placeholder="Selecione um produto especifico caso necessario."
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {produtos.map((produto) => (
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
          name="ID_FORNECEDOR"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fornecedor</FormLabel>
              <Select
                {...field}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="placeholder:text-red-500">
                    <SelectValue
                      datatype="string"
                      placeholder="Selecione um fornecedor especifico caso necessario."
                    />
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
        <Button type="submit" className="w-full mt-4">
          Gerar Relatório
        </Button>
      </form>
    </Form>
  )
}
