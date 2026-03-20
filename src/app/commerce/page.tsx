import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/commerce/ProductCard";
import JingleSection from "@/components/commerce/JingleSection";
import ServiceCard from "@/components/commerce/ServiceCard";
import { products } from "@/data/products";

const services = [
  { title: "Planejamento estratégico", description: "Mapeamento de jornada, oportunidades e roadmap de comunicação.", action: "Start em 3 semanas" },
  { title: "Campanhas omnichannel", description: "Integração digital e offline com dashboards e resultados transparentes.", action: "+ 50% em engajamento" },
  { title: "Consultoria criativa", description: "Insights de tendências, storytelling e roteiro para ativação de marca.", action: "Programa contínuo" },
];

export default function CommercePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 space-y-10">
      <div className="rounded-2xl border border-cyan-500/40 bg-zinc-900/70 p-7">
        <SectionTitle
          title="Commerce & MKT"
          subtitle="Estratégias de performance"
          description="Marketing integrado com foco em geração de leads, vendas e fortalecimento de marca por meio de criação sonora e visual."
        />
      </div>

      <JingleSection />

      <div>
        <h3 className="text-2xl font-bold text-white">Produtos e soluções</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900/60 p-6">
        <h4 className="text-lg font-semibold text-white">Serviços</h4>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <ServiceCard key={item.title} title={item.title} description={item.description} action={item.action} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900/60 p-6">
        <p className="text-zinc-300">Entre em contato para lançar sua marca com posicionamento comercial sofisticado e escala operacional.</p>
      </div>
    </section>
  );
}