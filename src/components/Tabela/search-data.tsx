'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

import { useCustomParam } from '@/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import * as zod from 'zod'

const SearchSchema = zod.object({
  Search: zod.string().optional()
})
// eslint-disable-next-line prettier/prettier
type SearchSchemaType = zod.infer<typeof SearchSchema>
type SearchProps = {
  Search: string
}
export const SearchData = ({ Search }: SearchProps) => {
  const router = useRouter()
  const {createParam, deleteParam} = useCustomParam()
  const {handleSubmit, register} = useForm<SearchSchemaType>({
    defaultValues: {Search},
    resolver: zodResolver(SearchSchema)
  })
  const handleSearch = (data: SearchSchemaType) => {
    let sendTo = ''
    if (data.Search !== undefined && data.Search !== '') {
      sendTo = createParam('Search',data.Search)  
    }else{
      sendTo = deleteParam(['Search'])
    }
    router.push(sendTo)
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <div className="relative w-full border">
        <input
          className="outline-none bg-colors-light-card dark:bg-colors-dark-card p-2 w-full focus:outline-colors-dark-secundaria dark:focus:outline-colors-dark-terciaria"
          type="text"
          placeholder="Pesquisar"
          {...register('Search')}
        />
        <X className="absolute text-blue12 hover:scale-150 w-4 h-4 top-3 right-3 cursor-pointer" onClick={()=> {
          const sendTo = deleteParam([''])
          router.push(sendTo)
        }} />
      </div>
    </form>
  )
}
