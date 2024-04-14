import Image from 'next/image';
import React from 'react';

import logoProd from '@/images/LogoProd.png';

import Form from './formularioLogin';

const Login = () => {
  return (
    <aside className="flex h-screen max-w-[50%] items-center rounded-r-3xl border-r-4 border-colors-light-terciaria bg-colors-light-card p-12 dark:border-colors-dark-terciaria dark:bg-colors-dark-card">
      <Form>
        <Image src={logoProd} alt="Login Icon" loading="lazy" />
      </Form>
    </aside>
  );
};
export default Login;
