'use server';
import { Acesso } from '@/@classes/(sign-in)/Acesso';
import { loginType } from '@/@types/LoginZod';
import { SetCookie } from '@/@utils';

export const LoginAction = async (dados: loginType) => {
  const { S_EMAIL, S_SENHA } = dados;
  const acesso = await new Acesso().login({ S_EMAIL, S_SENHA });
  const { token, message } = acesso.body;
  if (!token) {
    return { message: acesso.message, success: false };
  }
  SetCookie('token', token);
  return { message, success: true };
};
