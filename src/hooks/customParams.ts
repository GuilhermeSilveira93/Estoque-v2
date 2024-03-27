import { usePathname, useSearchParams } from "next/navigation"

export const useCreateParam = (name: string, value: string) => {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	const param = new URLSearchParams(searchParams)
	param.set(name, value)
	return `${pathName}?${param.toString()}`
}
export const useDeleteParam = (params: Array<string>) => {
	const pathName = usePathname()
	const searchParams = useSearchParams()
	const param = new URLSearchParams(searchParams)
	for (let i = 0; i < params.length; i++) {
		param.delete(params[i])
	}
	return `${pathName}?${param.toString()}`
}
