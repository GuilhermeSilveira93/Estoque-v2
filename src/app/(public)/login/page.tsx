import Image from 'next/image'
import React from 'react'

import logoProd from '@/images/LogoProd.png'

import Form from './formularioLogin'

const Login = () => {
  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-cover bg-center">
      <div className="flex-row bg-colors-dark-gray dark:bg-colors-dark-gray max-h-full w-full max-w-md rounded-3xl px-12 pb-20 border-4 border-colors-dark-orange outline outline-colors-dark-orange overflow-hidden">
        <Image src={logoProd} alt="Login Icon" className="my-12" />
        <Form />
      </div>
    </main>
  )
}
export default Login
