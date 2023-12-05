"use client"

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type NextAuthProps = {
    children: ReactNode
}

export const NextAuthProvider = ({children}: NextAuthProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

