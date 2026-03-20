import SectionTitle from "@/components/ui/SectionTitle";
import RadioCard from "@/components/radios/RadioCard";
import LivePlayer from "@/components/radios/LivePlayer";
import { radios } from "@/data/radios";
import Button from "@/components/ui/Button";

export default function RadiosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 space-y-10">
      <div className="rounded-2xl border border-yellow-500/40 bg-zinc-900/70 p-7">
        <SectionTitle
          title="Rádios"
          subtitle="Memories e Maná"
          description="Programas com identidade própria para públicos específicos, com oportunidades de patrocínio e conteúdo institucional."
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {radios.map((radio) => (
          <RadioCard key={radio.id} radio={radio} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {radios.map((radio) => (
          <LivePlayer key={radio.id} radio={radio} />
        ))}
      </div>

      <div className="rounded-2xl border border-yellow-400/30 bg-zinc-900/60 p-6">
        <h3 className="text-white font-semibold text-xl">Anuncie nas rádios</h3>
        <p className="mt-2 text-zinc-300">Programação estratégica para gerar awareness e conversões em público fiel e engajado.</p>
        <Button variant="primary" className="mt-4">Solicitar mídia kit</Button>
      </div>
    </section>
  );
}