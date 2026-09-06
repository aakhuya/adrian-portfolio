import { cn } from "@/utils/cn";
interface Props { children: React.ReactNode; className?: string; }
export default function Card({ children, className }: Props) {
  return (
    <div className={cn("bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-candy-blue/40 hover:shadow-xl hover:shadow-candy-blue/5", className)}>
      {children}
    </div>
  );
}
