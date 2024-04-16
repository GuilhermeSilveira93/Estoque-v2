import React from 'react';

import Form from './formularioLogin';

const Login = () => {
  return (
    <aside className="flex h-screen max-w-[33%] items-center rounded-r-3xl border-r-4 border-colors-light-terciaria bg-colors-light-card p-12 dark:border-colors-dark-terciaria dark:bg-colors-dark-card">
      <Form />
    </aside>
  );
};
export default Login;
