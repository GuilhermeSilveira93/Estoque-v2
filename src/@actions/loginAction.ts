'use server';
import { Acesso } from '@/@classes/(sign-in)/Acesso';
import { loginType } from '@/@types/LoginZod';
import { SetCookie } from '@/@utils';

export const FuncLoginAction = async (
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
  } catch (errors) {
    throw new Error(errors, { cause: 'NOTFOUND' });
  }
};
