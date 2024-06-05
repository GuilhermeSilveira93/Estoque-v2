'use server';
import { Acesso } from '@/@classes/(sign-in)/Acesso';
import { loginType } from '@/@types/LoginZod';
import { SetCookie } from '@/@utils';
import { AxiosError } from 'axios';

export const LoginAction = async (
  dados: loginType
): Promise<{ message: string }> => {
  const { S_EMAIL, S_SENHA } = dados;
  try {
    return await new Acesso()
      .login({ S_EMAIL, S_SENHA })
      .then((res) => {
        if (res) {
          const { token, message } = res.body;
          if (token) {
            SetCookie('token', token);
            return { message };
          }
          return { message };
        }
      })
      .catch((errors: AxiosError) => {
        if (errors.code === 'ECONNREFUSED') {
          return {
            message:
              'Sistema temporariamente fora do ar. Tente novamente mais tarde.'
          };
        }
        return { message: errors?.response?.data as string };
      });
  } catch (e) {
    return {
      message: 'Sistema temporariamente fora do ar. Tente novamente mais tarde.'
    };
  }
};
