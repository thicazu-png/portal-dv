import SectionTitle from "@/components/ui/SectionTitle";

export default function FounderConnection() {
  return (
    <section className="py-16 border-t border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionTitle
          title="Conexão institucional"
          subtitle="David Pires Advocacia"
          description="Parceira independente com serviços jurídicos corporativos, mantida em esfera separada com referência técnica e compromisso ético."
        />
        <p className="mt-5 text-zinc-300">
          A advocacia permanece em ambiente próprio, oferecendo suporte legal especializado para projetos e operações do grupo, mantendo total independência e sobriedade.
        </p>
      </div>
    </section>
  );
}