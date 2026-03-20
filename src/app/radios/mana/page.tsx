import SectionTitle from "@/components/ui/SectionTitle";
import LivePlayer from "@/components/radios/LivePlayer";
import { radios } from "@/data/radios";

export default function ManaPage() {
  const radio = radios.find((item) => item.id === "mana");
  if (!radio) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 space-y-8">
      <SectionTitle
        title="Rádio Maná"
        subtitle="Fé e conexão espiritual"
        description="Conteúdo edificante e programas inspiradores para audiência que busca mensagens de esperança."
      />
      <div className="rounded-2xl border border-yellow-400/40 bg-zinc-900/75 p-6">
        <p className="text-zinc-300">Música, entrevistas e reflexões com abordagem contemporânea para fortalecer propósito e comunidade.</p>
      </div>
      <LivePlayer radio={radio} />
    </section>
  );
}