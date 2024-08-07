import { NextRequest, NextResponse } from 'next/server'

import { userTokenPayLoad } from './@types'
import { isTokenExpired } from './@utils'
const paginasPublicas = ['/login']
const paginasPrivadas = [
  '/',
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

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  try {
    const user: userTokenPayLoad = token
      ? JSON.parse(
          Buffer.from(token.split('.')[1]!, 'base64').toString('utf-8')
        )
      : null
    const path = req.nextUrl.pathname
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

  return NextResponse.next()
}
