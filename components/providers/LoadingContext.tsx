"use client";

import { createContext, useContext, useState } from "react";

interface LoadingState {
  ready: boolean;
  setReady: (v: boolean) => void;
}

const Ctx = createContext<LoadingState>({ ready: false, setReady: () => {} });

export const useLoading = () => useContext(Ctx);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  return <Ctx.Provider value={{ ready, setReady }}>{children}</Ctx.Provider>;
}
