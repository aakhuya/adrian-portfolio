import Link from "next/link";
import { cn } from "@/utils/cn";

interface Props {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  className?: string;
}

export default function Button({ children, href, primary = false, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center min-h-[48px] px-8 py-3 text-sm font-medium rounded-md transition-all duration-200",
        primary
          ? "bg-candy-blue text-onyx hover:bg-white border border-transparent"
          : "border border-candy-blue/40 text-candy-blue hover:bg-candy-blue/10",
        className
      )}
    >
      {children}
    </Link>
  );
}
