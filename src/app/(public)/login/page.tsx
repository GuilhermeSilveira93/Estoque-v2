import React from 'react';

import Form from './formularioLogin';

const Login = () => {
  return (
    <aside className="flex h-screen w-full items-center justify-center rounded-r-3xl border-r-4 border-colors-light-terciaria bg-colors-light-card p-12 dark:border-colors-dark-terciaria dark:bg-colors-dark-card xl:w-2/3 2xl:w-1/3">
      <Form />
    </aside>
  );
};
export default Login;
