'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

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

import { Cliente } from '@/@classes'
import { EmpresaType, ProdutosType } from '@/@types/api'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'

import { useFormRelatorioSaida } from './useFormRelatorioSaida'
export const FormRelatorioSaida = ({
  empresas,
  produtos,
}: {
  empresas: EmpresaType[]
  produtos: ProdutosType[]
}) => {
  const [clientes, setClientes] = useState(
    [] as { ID_CLIENTE: string; S_NOME: string }[]
  )
  const { form, onSubmit } = useFormRelatorioSaida()
  const t = useTranslations('RELATORIO')
  const empresaSelecionada = form.watch('ID_EMPRESA')
  useEffect(() => {
    if (empresaSelecionada) {
      new Cliente()
        .getForCompany({ ID_EMPRESA: empresaSelecionada })
        .then((res) => {
          setClientes(res.body.data)
        })
    }
  }, [empresaSelecionada])
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-1/2">
        <FormField
          control={form.control}
          name="D_DATA"
          render={({ field }) => (
            <FormItem className="flex flex-col w-full">
              <FormLabel>{t('PERIOD')}</FormLabel>
              <div className={cn('grid gap-2')}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start font-normal',
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
                        <span>{t('SELECTADATE')}</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 mt-6" align="center">
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
                          D_INICIO: date?.from,
                          D_FIM: date?.to,
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
          name="ID_EMPRESA"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('COMPANIE')}</FormLabel>
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
                  {empresas.map((empresa) => (
                    <SelectItem
                      key={empresa.ID_EMPRESA}
                      value={empresa.ID_EMPRESA}
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
        {clientes.length > 0 && (
          <FormField
            name="ID_CLIENTE"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('CUSTOMER')}</FormLabel>
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
                    {clientes.map((cliente) => (
                      <SelectItem
                        key={cliente.ID_CLIENTE}
                        value={cliente.ID_CLIENTE}
                      >
                        {cliente.S_NOME}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          name="ID_PRODUTO"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('PRODUCT')}</FormLabel>
              <Select
                {...field}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="placeholder:text-red-500">
                    <SelectValue
                      datatype="string"
                      placeholder={t('PRODUCTPH')}
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

        <Button type="submit" className="w-full mt-4">
          {t('GENERATEREPORT')}
        </Button>
      </form>
    </Form>
  )
}
