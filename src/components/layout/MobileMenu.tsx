"use client";

import Link from "next/link";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  items?: { label: string; href: string }[];
};

export default function MobileMenu({ open, onClose, items = mainNavigation }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all ease-in-out duration-300 bg-black/60 backdrop-blur-sm",
        open ? "opacity-100 visible" : "opacity-0 invisible"
      )}
      onClick={onClose}
    >
      <aside
        className={cn(
          "absolute right-0 top-0 h-full w-64 bg-stone-950 border-l border-zinc-800 p-5",
          open ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="py-2 px-3 rounded-lg hover:bg-white/10 text-zinc-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}