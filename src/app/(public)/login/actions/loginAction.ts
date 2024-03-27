"use server";
import { http } from "@/utils/httpAxios";
import { loginType } from "../formularioLogin";
import { AxiosError } from "axios";
import { SetCookie } from "@/utils";

export const LoginAction = async (dados: loginType) => {
  const { email, senha } = dados;
  try {
    return await http
      .post("/auth/login", {
        S_EMAIL: email,
        S_SENHA: senha,
      })
      .then(async (res) => {
        if (res) {
          SetCookie('token', res.data.token)
          return res.data
        }
        
      })
      .catch((errors: AxiosError) => {
        return errors.response?.data;
      });
  } catch (e) {
    return false;
  }
};
