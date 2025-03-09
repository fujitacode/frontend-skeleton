"use client"; // クライアントコンポーネント

import { makeServer } from "@/lib/mocks/mirage";
import { useEffect } from "react";

export function MirageProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		makeServer();
	}, []);

	return <>{children}</>;
}
