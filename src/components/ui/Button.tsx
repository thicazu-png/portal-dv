import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const base =
    "rounded-xl py-3 px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300";

  const variants = {
    primary: "bg-gradient-to-r from-[#0f5b70] to-[#0a8e8e] text-white hover:brightness-110",
    secondary: "bg-white/10 border border-cyan-300 text-cyan-100 hover:bg-white/15",
    ghost: "bg-transparent text-cyan-300 hover:text-cyan-100",
  } as const;

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}