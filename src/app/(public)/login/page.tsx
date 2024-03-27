import React from 'react'
import Image from 'next/image'
import Form from './formularioLogin'
import logoProd from '@/images/logo_prod.png';
import { UsuarioAtual } from '@/utils/UsuarioAtual';
const Login = () => {
  console.time()
  console.log(UsuarioAtual())
  console.timeEnd()
  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-softrack-pattern bg-cover bg-center">
      <div className="flex-row bg-colors-dark-gray dark:bg-colors-dark-gray max-h-full w-full max-w-md rounded-3xl px-12 py-20 border-4 border-colors-dark-orange outline outline-colors-dark-orange overflow-hidden">
        <Image src={logoProd} alt='Login Icon'/>
        <Form />
      </div>
    </main>
  )
}
export default Login