"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SiteContent } from "@/lib/content";

/**
 * Makes the merged content (data files + saved admin edits) available to client
 * components. The layout is a server component: it reads the store once per
 * request and hands the result down through here, so nothing on the client ever
 * fetches it and there is no loading state.
 */
const SiteContext = createContext<SiteContent | null>(null);

export function SiteProvider({
  value,
  children,
}: {
  value: SiteContent;
  children: ReactNode;
}) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContent {
  const value = useContext(SiteContext);
  if (!value) {
    throw new Error("useSite must be used inside <SiteProvider> — see src/app/(site)/layout.tsx");
  }
  return value;
}
