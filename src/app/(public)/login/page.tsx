import Image from 'next/image'
import React from 'react'

import logoProd from '@/images/LogoProd.png'

import Form from './formularioLogin'

const Login = () => {
  return (
    <div className="flex-row bg-colors-light-card dark:bg-colors-dark-card max-w-md w-full rounded-3xl px-12 pb-20 border-4 border-colors-light-terciaria dark:border-colors-dark-terciaria overflow-hidden">
      <Image src={logoProd} alt="Login Icon" className="my-12" loading="lazy" />
      <Form />
    </div>
  )
}
export default Login
