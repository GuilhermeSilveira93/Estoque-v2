'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '@/components/ui';

import { loginSchema, loginType } from '@/@types/LoginZod';
import logoProd from '@/images/LogoProd.png';
import logoProdDark from '@/images/LogoProdDark.png';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { LoginAction } from './actions/loginAction';
import LoadingDots from './loading-dots';

export default function Form({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    defaultValues: { S_EMAIL: '', S_SENHA: '' },
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const { theme } = useTheme();
  const login = async (dados: loginType) => {
    setLoading(true);
    const response = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        LoginAction(dados)
          .then((res) => {
            if (res.code === 202) {
              resolve(res);
              router.push('/');
            }
            reject(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    };
    toast.promise(response, {
      loading: 'Consultando seu usuário.',
      success: (data) => {
        return data.message;
      },
      error: (data) => {
        return data.message;
      },
    });
    setLoading(false);
  };
  return (
    <div>
      <form
        /*@ts-expect-error: tipagem está correta.*/
        action={handleSubmit(login)}
        className={className}
      >
        <Image
          src={theme === 'light' ? logoProdDark : logoProd}
          alt="Login Icon"
          loading="lazy"
        />
        <div className="mb-8">
          <label className="text-lg" htmlFor="S_EMAIL">
            E-mail:
          </label>
          <Input
            className="w-full rounded-3xl border-2 p-1 focus:outline-none"
            {...register('S_EMAIL')}
            name="S_EMAIL"
            type="email"
            max={150}
          />
          {errors.S_EMAIL && (
            <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
              {errors.S_EMAIL.message}
            </p>
          )}
        </div>
        <div className="mb-12">
          <label className="w-12 text-lg" htmlFor="S_SENHA">
            Senha:
          </label>
          <Input
            className="w-full rounded-3xl border-2 p-1 focus:outline-none"
            {...register('S_SENHA')}
            name="S_SENHA"
            max={150}
            type="password"
          />
          {errors.S_SENHA && (
            <p className="text-colors-dark-terciaria dark:text-colors-dark-terciaria">
              {errors.S_SENHA.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          value={'Login'}
          disabled={loading}
          className="w-full text-primary-foreground"
        >
          {loading ? <LoadingDots /> : <p>Login</p>}
        </Button>
      </form>
    </div>
  );
}
