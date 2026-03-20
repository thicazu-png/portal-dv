import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

const pillars = [
  { title: "Seta", description: "Treinamentos, palestras e coaching executivo para resultados duradouros.", color: "amber" },
  { title: "Book Music", description: "Composições, licenciamento musical e livros autorais cativantes.", color: "orange" },
  { title: "Commerce & MKT", description: "Branding, campanhas e jingles de performance comprovada.", color: "cyan" },
  { title: "Rádios", description: "Rádio Memories e Rádio Maná: audiência segmentada e engajamento forte.", color: "gold" },
];

export default function PillarsSection() {
  return (
    <section className="py-20">
      <SectionTitle
        title="Nossas vertentes"
        subtitle="Ecossistema Portal D&V"
        description="Uma plataforma integrada com frentes independentes e a mesma direção estratégica para ampliar autoridade e monetização."
      />
      <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2">
        {pillars.map((item) => (
          <article key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <Badge color={item.color as any}>{item.title}</Badge>
            </div>
            <p className="mt-3 text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}