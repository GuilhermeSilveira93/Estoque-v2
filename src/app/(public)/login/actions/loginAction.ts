'use server';
import { loginType } from '@/@types/LoginZod';
import { SetCookie, api } from '@/@utils';
import { AxiosError } from 'axios';

export const LoginAction = async (dados: loginType) => {
  const { S_EMAIL, S_SENHA } = dados;
  try {
    return await api
      .post('auth/login', {
        S_EMAIL,
        S_SENHA
      })
      .then((res) => {
        const { token, ...rest } = res.data;
        if (token) {
          SetCookie('token', token);
          return rest;
        }
        return rest;
      })
      .catch((errors: AxiosError) => {
        if (errors.code === 'ECONNREFUSED') {
          return { message: 'Erro ao logar, entre em contato com suporte' };
        }
        return errors.response?.data;
      });
  } catch (e) {
    return false;
  }
};
