type BadgeProps = {
  children: React.ReactNode;
  color?: "amber" | "emerald" | "copper" | "gold" | "cyan";
};

const palette = {
  amber: "bg-amber-500/20 text-amber-300 border border-amber-300/30",
  emerald: "bg-emerald-500/20 text-emerald-300 border border-emerald-300/30",
  copper: "bg-orange-500/20 text-orange-200 border border-orange-200/30",
  gold: "bg-yellow-400/20 text-yellow-200 border border-yellow-200/30",
  cyan: "bg-cyan-500/20 text-cyan-200 border border-cyan-200/30",
};

export default function Badge({ children, color = "cyan" }: BadgeProps) {
  return <span className={`text-xs font-medium rounded-full px-3 py-1 ${palette[color]}`}>{children}</span>;
}