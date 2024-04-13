import { cookies } from 'next/headers';
export const SetCookie = (key: string, value: string) => {
  cookies().set(key, value, { secure: true });
};

export const DeleteCookie = (key: string) => {
  cookies().delete(key);
};
