type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  accent?: string;
};

export default function Card({ className, accent, children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-950/70 shadow-lg shadow-black/40 p-5 ${className ?? ""}`}
      style={accent ? { boxShadow: `0 10px 30px ${accent}30` } : undefined}
      {...props}
    >
      {children}
    </div>
  );
}