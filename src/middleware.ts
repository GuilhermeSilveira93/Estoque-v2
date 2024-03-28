import { NextRequest, NextResponse } from 'next/server'

import { isTokenExpired } from './utils/auth'
import { userTokenPayLoad } from './utils/UsuarioAtual'
const paginasPublicas = ['/login']
const paginasPrivadas = ['/']

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value || null
  console.log('token')
  console.log(token)
  console.log('token')
  const user: userTokenPayLoad = token
    ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString('utf-8'))
    : token
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
  return NextResponse.next()
}
