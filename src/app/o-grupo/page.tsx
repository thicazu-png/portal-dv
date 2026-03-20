import SectionTitle from "@/components/ui/SectionTitle";

export default function GrupoPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16">
      <SectionTitle
        title="O Grupo"
        subtitle="Visão institucional"
        description="Portal D&V é o hub que reúne marcas especializadas em conteúdo, música, experiência e comunicação estratégica."
      />
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <p className="text-zinc-300 leading-relaxed">
          Nascido da expertise de múltiplas frentes, o Portal D&V atua como um ecossistema de soluções para empresas e eventos.
          Com abordagem integrada, posicionamos cada unidade (Seta, Book Music, Commerce & MKT, Rádios) com governança de marca e impacto.
        </p>
      </div>
    </section>
  );
}