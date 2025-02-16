"use client"; // クライアントコンポーネント

import { useEffect } from "react";
import { makeServer } from "@/lib/mocks/mirage";

export function MirageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    makeServer();
  }, []);

  return <>{children}</>;
}
