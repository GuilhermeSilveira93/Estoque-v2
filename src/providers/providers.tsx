"use client";
import React from "react";
import { ReactNode } from "react";
import { ThemeProviders } from "./themeProvider";
type Props = {
  children: ReactNode;
};
export const Providers = ({ children }: Props) => {
  return <ThemeProviders>{children}</ThemeProviders>;
};
