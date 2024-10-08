'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

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

import { getClientForCompany } from '@/@actions/movimentacao/getClientForCompany'
import { EmpresaType } from '@/@types/api'
import { useEnviarProdutosSaidaForm } from '@/hooks/movimentacao/entrada/useEnviarProdutoSaidaForm'
export const FormEnviarSaida = ({ empresas }: { empresas: EmpresaType[] }) => {
  const { form, onSubmit } = useEnviarProdutosSaidaForm()
  const [clientes, setClientes] = useState(
    [] as { ID_CLIENTE: string; S_NOME: string }[]
  )
  const t = useTranslations('MOVEMENT')
  const empresaSelecionada = form.watch('ID_EMPRESA')
  useEffect(() => {
    if (empresaSelecionada) {
      getClientForCompany({ empresaSelecionada }).then((res) => {
        setClientes(res)
      })
    }
  }, [empresaSelecionada])
  return (
    <FormRoot {...form}>
      <form className="w-full space-y-3" onSubmit={onSubmit}>
        <FormField
          name="ID_EMPRESA"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('COMPANY')}</FormLabel>
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
        {clientes?.length > 0 && (
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
        {form.watch('ID_CLIENTE') && (
          <div className="grid">
            <Button variant={'secondary'} type="submit">
              {t('PRODOUT')}
            </Button>
          </div>
        )}
      </form>
    </FormRoot>
  )
}
