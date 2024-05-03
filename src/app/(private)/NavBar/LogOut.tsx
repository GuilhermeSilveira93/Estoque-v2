'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui';

import { DeleteCookie } from '@/@actions/LogOut';
import { toast } from 'sonner';
export const LogoutButton = () => {
  const router = useRouter();
  const LogOut = async () => {
    const deleteCookie = (): Promise<{ message: string }> => {
      return new Promise((resolve, reject) => {
        DeleteCookie('token')
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            router.push('/login');
          });
      });
    };
    toast.promise(deleteCookie, {
      loading: 'saindo...',
      success: (data) => {
        return data.message;
      },
      error: (data) => {
        return data.message;
      }
    });
  };

  return (
    <Button
      className="w-full text-secondary-foreground"
      variant={'secondary'}
      onClick={LogOut}
    >
      Sair
    </Button>
  );
};
