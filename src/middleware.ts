import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

import { userTokenPayLoad } from './@types'
import { isTokenExpired } from './@utils'
const idiomas = ['en', 'pt', 'es']
const paginasPublicas = ['/login']
const paginasPrivadasBase = [
  '',
  '/dashboard',
  '/clientes',
  '/empresas',
  '/fornecedores',
  '/produtos',
  '/tipos',
  '/usuarios',
  '/movimentacao',
  '/relatorio',
  '/relatorio/entrada',
  '/relatorio/saida',
]
const paginasPrivadas = idiomas.flatMap((idioma) =>
  paginasPrivadasBase.map((pagina) => `/${idioma}${pagina}`)
)
const handleIntl = createMiddleware({
  locales: ['en', 'pt', 'es'],
  defaultLocale: 'pt',
})

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const token = req.cookies.get('token')?.value
  try {
    const user: userTokenPayLoad = token
      ? JSON.parse(
          Buffer.from(token.split('.')[1]!, 'base64').toString('utf-8')
        )
      : null
    if (!user && paginasPrivadas.includes(path)) {
      return NextResponse.redirect(new URL('/login', req.url))
    } else if (
      user !== null &&
      !isTokenExpired(user.exp) &&
      paginasPublicas.includes(path)
    ) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  const intlResponse = handleIntl(req)

  if (intlResponse) {
    if (path.startsWith('/_next/') || path === '/favicon.ico') {
      return NextResponse.next()
    }
    return intlResponse
  }
}
