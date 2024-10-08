import React from 'react'

import Form from './formularioLogin'

const Login = async () => {
  return (
    <aside className="flex h-screen w-1/3 items-center justify-center rounded-r-3xl border-r-4 border-colors-light-terciaria bg-colors-light-card p-12 dark:border-colors-dark-terciaria dark:bg-colors-dark-card">
      <Form />
    </aside>
  )
}
export default Login
