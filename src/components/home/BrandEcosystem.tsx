import SectionTitle from "@/components/ui/SectionTitle";

const clubs = [
  { name: "Seta", description: "Palestras e treinamentos para líderes que promovem mudanças." },
  { name: "Book Music", description: "Música autoral e livros que criam relacionamentos emocionais." },
  { name: "Commerce & MKT", description: "Estratégias e campanhas que convertem e fidelizam audiência." },
  { name: "Rádios", description: "Canais segmentados para mensagens de nostalgia e espiritualidade." },
];

export default function BrandEcosystem() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <SectionTitle
        title="Um hub com foco em resultado"
        subtitle="Portal D&V"
        description="Cada marca oferece experiências únicas, mas todas compartilham a mesma qualidade premium e governança estratégica."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {clubs.map((item) => (
          <div key={item.name} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5">
            <h4 className="font-bold text-white text-xl">{item.name}</h4>
            <p className="mt-2 text-zinc-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}