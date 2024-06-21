'use server';
import { Acesso } from '@/@classes/(sign-in)/Acesso';
import { loginType } from '@/@types/LoginZod';
import { SetCookie } from '@/@utils';

export const LoginAction = async (
  dados: loginType
): Promise<{ message: string }> => {
  const { S_EMAIL, S_SENHA } = dados;
  try {
    const acesso = await new Acesso().login({ S_EMAIL, S_SENHA });
    const { token, message } = acesso.body;
    if (!token)
      throw new Error(message, {
        cause: 'USERNOTFOUND'
      });
    SetCookie('token', token);
    return { message };
  } catch (error) {
    throw new Error((error as Error).message as string, {
      cause: (error as Error).cause
    });
  }
};
