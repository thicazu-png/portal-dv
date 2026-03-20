import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071018] px-6 text-white">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Página não encontrada</h1>
        <p className="mt-4 text-white/70">
          O endereço acessado não existe ou foi movido.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#071018]"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}