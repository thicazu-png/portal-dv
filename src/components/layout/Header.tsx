import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-white/10 bg-[#071018]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-white">
          Portal D&amp;V
        </Link>

        <nav className="flex gap-4 text-sm text-white/80">
          <Link href="/o-grupo">O Grupo</Link>
          <Link href="/seta">Seta</Link>
          <Link href="/book-music">Book Music</Link>
          <Link href="/commerce">Commerce</Link>
          <Link href="/radios">Rádios</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}