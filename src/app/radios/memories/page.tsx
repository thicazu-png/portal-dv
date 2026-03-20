import SectionTitle from "@/components/ui/SectionTitle";
import LivePlayer from "@/components/radios/LivePlayer";
import { radios } from "@/data/radios";

export default function MemoriesPage() {
  const radio = radios.find((item) => item.id === "memories");
  if (!radio) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 space-y-8">
      <SectionTitle
        title="Rádio Memories"
        subtitle="Nostalgia e experiência"
        description="Clássicos e flashbacks com curadoria para ouvintes que buscam resgatar emoções e boas histórias."
      />
      <div className="rounded-2xl border border-amber-500/40 bg-zinc-900/75 p-6">
        <p className="text-zinc-300">Programação com foco em sucessos atemporais, quadros especiais e oportunidades de patrocínio em alto engajamento.</p>
      </div>
      <LivePlayer radio={radio} />
    </section>
  );
}