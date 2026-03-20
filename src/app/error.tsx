"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071018] px-6 text-white">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
          Erro de aplicação
        </p>
        <h1 className="mt-3 text-3xl font-semibold">
          Algo deu errado ao carregar esta página.
        </h1>
        <p className="mt-4 text-white/70">
          Tente novamente. Se o problema continuar, revise a rota ou o componente.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#071018]"
          >
            Tentar novamente
          </button>

          <a
            href="/"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </main>
  );
}