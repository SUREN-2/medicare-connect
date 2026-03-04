"use client";

import { createContext, useContext, useState } from "react";
import { setAccessToken as setTokenStore } from "@/lib/tokenStore";

type AuthContextType = {
  accessToken: string | null | undefined;
  setAccessToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [accessToken, setAccessTokenState] = useState<
    string | null | undefined
  >(undefined); // 👈 important

  const setAccessToken = (token: string | null) => {
    setAccessTokenState(token);
    setTokenStore(token);
  };

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
