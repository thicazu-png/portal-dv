"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = useMemo(() => mainNavigation, []);

  return (
    <nav className="w-full md:max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
      <Link href="/" className="text-white font-bold text-xl tracking-tight">
        Portal D&V
      </Link>

      <div className="hidden md:flex gap-6 text-sm text-zinc-200 font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="py-2 px-3 rounded-xl hover:bg-white/10 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir menu"
        className="md:hidden rounded-lg p-2 border border-zinc-600 text-zinc-100"
      >
        <span>{open ? "✕" : "☰"}</span>
      </button>

      <MobileMenu open={open} onClose={() => setOpen(false)} items={navItems} />
    </nav>
  );
}