import SectionTitle from "@/components/ui/SectionTitle";
import RadioCard from "@/components/radios/RadioCard";
import { radios } from "@/data/radios";

export default function RadiosHighlight() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <SectionTitle
        title="Rádios em destaque"
        subtitle="Rádio Memories & Rádio Maná"
        description="Duas experiências sonoras com público segmentado e presença estratégica para marcas e plataformas."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {radios.map((radio) => (
          <RadioCard key={radio.id} radio={radio} />
        ))}
      </div>
    </section>
  );
}