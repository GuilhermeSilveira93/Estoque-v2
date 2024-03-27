"use client";
import React from "react";
import * as zod from "zod";
import { useRouter } from "next/navigation";
/* import Image from "next/image";
import { useState } from "react";

import LoadingDots from "./loading-dots"; */
import { useForm } from "react-hook-form";
import { LoginAction } from "./actions/loginAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { UsuarioAtual } from "@/utils/UsuarioAtual";
const loginSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: "Digite um e-mail" })
    .max(150, { message: "Tamanho máximo do e-mail é 150 caracteres." }),
  senha: zod
    .string()
    .min(1, { message: "Digite sua senha" })
    .max(150, { message: "Tamanho máximo da senha é 150 caracteres." }),
});
export type loginType = zod.infer<typeof loginSchema>;
export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginType>({
    defaultValues: { email: "", senha: "" },
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  const login = async (dados: loginType) => {
    const resposta = await LoginAction(dados).catch(() => reset());
    console.log(resposta.message)
    // router.push("/");
  };

  return (
    <>
      {/*@ts-expect-error: tipagem está correta.*/}
      <form action={handleSubmit(login)} className="w-full text-center">
        <label className="text-lg w-12 text-blue12" htmlFor="S_EMAIL">
          E-mail:
        </label>
        <input
          className="w-full rounded-3xl p-1 mb-12 text-blue12 dark:text-blue1 dark:bg-gray-700 border-2 border-blue7 focus:outline-none focus:border-colors-dark-orange"
          {...register("email")}
          name="email"
          type="email"
          max={150}
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        <br />
        <label className="text-lg w-12" htmlFor="S_SENHA">
          Senha:
        </label>
        <input
          className="w-full rounded-3xl p-1 mb-12 text-blue12 dark:text-blue1 dark:bg-gray-700 border-2 border-blue7 focus:outline-none focus:border-colors-dark-orange"
          {...register("senha")}
          name="senha"
          max={150}
          type="password"
        />
        {errors.senha && <p className="text-red-600">{errors.senha.message}</p>}
        <input
          type="submit"
          className="rounded-xl py-1 px-12 border-2 border-colors-dark-orange hover:bg-colors-dark-orange"
          value="Login"
        />
      </form>
    </>
  );
}
