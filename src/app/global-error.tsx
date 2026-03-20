"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Global error:", error);

  return (
    <html lang="pt-BR">
      <body className="bg-[#071018] text-white">
        <main className="flex min-h-screen items-center justify-center px-6">
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Erro global
            </p>
            <h1 className="mt-3 text-3xl font-semibold">
              Ocorreu um erro crítico na aplicação.
            </h1>
            <p className="mt-4 text-white/70">
              Revise o layout principal e os componentes compartilhados.
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
                Ir para a home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}