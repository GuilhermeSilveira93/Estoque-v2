import Image from 'next/image'
import React from 'react'

import logoProd from '@/images/LogoProd.png'

import Form from './formularioLogin'

const Login = () => {
  return (
    <aside className="max-w-md flex items-center rounded-r-3xl h-screen p-12 bg-colors-light-card dark:bg-colors-dark-card border-r-4 border-colors-light-terciaria dark:border-colors-dark-terciaria">
      <Form>
        <Image src={logoProd} alt="Login Icon" loading="lazy" />
      </Form>
    </aside>
  )
}
export default Login
