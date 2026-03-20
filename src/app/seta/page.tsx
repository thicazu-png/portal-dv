import SectionTitle from "@/components/ui/SectionTitle";
import TopicsGrid from "@/components/seta/TopicsGrid";
import SpeakerCard from "@/components/seta/SpeakerCard";
import { speakers } from "@/data/speakers";
import Button from "@/components/ui/Button";

export default function SetaPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 space-y-10">
      <div className="rounded-2xl border border-amber-500/40 bg-zinc-900/70 p-7">
        <SectionTitle
          title="Seta"
          subtitle="Treinamentos e autoridade"
          description="Palestras e programas que ampliam performance, engajamento e liderança estratégica."
        />
        <p className="mt-4 text-zinc-300">Direção, impacto e treinamento com curadoria de palestrantes de alto nível para ambientes corporativos e eventos de mercado.</p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">Temas de palestras</h3>
        <TopicsGrid />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white">Palestrantes em destaque</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>

      <div className="bg-zinc-900/65 border border-amber-500/30 p-6 rounded-2xl">
        <p className="text-zinc-300">A Seta está pronta para projetos corporativos, eventos e capacitações sob medida em três ciclos: descoberta, ação e resultados.</p>
        <Button variant="primary" className="mt-4">Solicitar proposta</Button>
      </div>
    </section>
  );
}