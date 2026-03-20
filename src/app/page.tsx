import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#071018] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            Portal D&amp;V
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Onde a palavra se transforma em música e a experiência em direção.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
            Um ecossistema digital que integra palestras, composições, rádios e
            soluções de marketing em uma única arquitetura de marca.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/seta"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#071018]"
            >
              Conhecer a Seta
            </Link>
            <Link
              href="/book-music"
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white"
            >
              Explorar Book Music
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            Estrutura do ecossistema
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Cada vertical com sua identidade. Todas conectadas pela mesma visão.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold text-emerald-300">Seta</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Palestras, treinamentos e autoridade para empresas, eventos e ações
              de desenvolvimento.
            </p>
            <Link href="/seta" className="mt-6 inline-block text-sm font-medium text-white">
              Ver página →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold text-orange-300">Book Music</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Composições, licenciamento musical e livros autorais em um catálogo
              organizado e escalável.
            </p>
            <Link
              href="/book-music"
              className="mt-6 inline-block text-sm font-medium text-white"
            >
              Ver página →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold text-cyan-300">Commerce &amp; MKT</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Branding, jingles, campanhas e produtos para transformar presença em
              resultado.
            </p>
            <Link
              href="/commerce"
              className="mt-6 inline-block text-sm font-medium text-white"
            >
              Ver página →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              Rádios
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              A trilha sonora que amplia a experiência do portal.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-amber-400">
                Rádio Memories
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Flashbacks, emoção e ambientação para uma navegação mais viva.
              </p>
              <Link
                href="/radios/memories"
                className="mt-6 inline-block text-sm font-medium text-white"
              >
                Acessar rádio →
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold text-yellow-200">
                Rádio Maná
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Música, mensagem e conexão espiritual como extensão do ecossistema.
              </p>
              <Link
                href="/radios/mana"
                className="mt-6 inline-block text-sm font-medium text-white"
              >
                Acessar rádio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
            Contato
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Um portal para negócios, conteúdo e expansão de marca.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
            O Portal D&amp;V foi pensado para organizar verticais, gerar leads e
            permitir crescimento modular sem perder coerência de posicionamento.
          </p>

          <div className="mt-8">
            <Link
              href="/contato"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#071018]"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}