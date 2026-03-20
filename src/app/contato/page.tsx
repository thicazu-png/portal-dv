import SectionTitle from "@/components/ui/SectionTitle";
import SmartContactForm from "@/components/forms/SmartContactForm";

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16">
      <SectionTitle
        title="Contato"
        subtitle="Fale conosco"
        description="Preencha o formulário e nossa equipe entrará em contato em até 24h úteis.
"
      />
      <div className="mt-8">
        <SmartContactForm />
      </div>
    </section>
  );
}