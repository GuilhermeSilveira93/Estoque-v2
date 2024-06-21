'use server';
import { cookies } from 'next/headers';

export const DeleteCookie = async (key: string) => {
  try {
    cookies().delete(key);
    return { message: 'Deslogado com sucesso!' };
  } catch (error) {
    throw new Error((error as Error).message as string, {
      cause: (error as Error).cause
    });
  }
};
