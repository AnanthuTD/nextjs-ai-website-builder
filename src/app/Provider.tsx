'use client'

import { Toaster } from "@/components/ui/sonner";
import React, { ReactNode } from "react";

function Provider({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<Toaster />
		</>
	);
}

export default Provider;
