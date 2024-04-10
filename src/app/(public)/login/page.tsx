import Image from 'next/image'
import React from 'react'

import logoProd from '@/images/LogoProd.png'

import Form from './formularioLogin'

const Login = () => {
  return (
    <Form
      className={
        'max-w-md rounded-3xl p-12 bg-colors-light-card dark:bg-colors-dark-card bg-pri border-4 border-colors-light-terciaria dark:border-colors-dark-terciaria'
      }
    >
      <Image src={logoProd} alt="Login Icon" loading="lazy" />
    </Form>
  )
}
export default Login
