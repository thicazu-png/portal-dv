import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(4,120,87,0.38),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(4,121,167,0.28),transparent_50%),linear-gradient(140deg,#041822,rgba(7,16,24,0.95))]" />
      <div className="relative mx-auto px-6 md:px-10 max-w-6xl text-center text-white">
        <p className="uppercase text-emerald-300 tracking-wider mb-3 font-semibold">Hub Digital de Soluções</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Portal D&V
          <span className="text-cyan-300">: onde a palavra se transforma em música</span>
        </h1>
        <p className="mt-5 text-zinc-200 max-w-3xl mx-auto text-base md:text-lg">
          Um ecossistema premium com conteúdo estratégico, impacto cultural, e expertise em comunicação e criatividade.
          Trilhamos os caminhos para palestras memoráveis, música autoral, marketing eficaz e rádios com audiência fiel.
        </p>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="min-w-[180px]">Conheça o Ecossistema</Button>
          <Button variant="secondary" className="min-w-[180px]">Fale com nosso time</Button>
        </div>
      </div>
    </section>
  );
}