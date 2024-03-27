import React from "react";
import { Providers } from "@/providers/providers";
import "../globals.css";
import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Teste from "./components/Teste";

export const metadata: Metadata = {
  title: "DashBoard",
  description: "Desenvolvido por Guilherme Silveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>
      <Providers>
      <main className="flex flex-row">
        <NavBar></NavBar>
        {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
