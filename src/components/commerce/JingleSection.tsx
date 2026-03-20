import Button from "@/components/ui/Button";

export default function JingleSection() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-[#0f2f3a] to-[#071018] p-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl text-cyan-200 font-bold">Jingle personalizado com inteligência de marca</h3>
          <p className="text-zinc-300 mt-3">
            Solução end-to-end: conceito, letra, produção e entrega final para campanhas, eventos e ativos de comunicação.
          </p>
        </div>
        <Button variant="primary">Solicitar jingle</Button>
      </div>
    </section>
  );
}