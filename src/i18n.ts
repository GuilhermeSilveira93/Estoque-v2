import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
const locales = ['en', 'pt', 'es']
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()
  return {
    messages: (await import(`./@constants/idioma/${locale}.json`)).default,
  }
})
