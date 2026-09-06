"use client";
import { useSectionGlow } from "@/hooks/useSectionGlow";

export default function PageClient({ children }: { children: React.ReactNode }) {
  useSectionGlow();
  return <>{children}</>;
}
