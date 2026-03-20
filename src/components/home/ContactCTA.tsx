import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 border-t border-zinc-800 bg-gradient-to-r from-zinc-900/80 via-zinc-950 to-zinc-900">
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center text-white">
        <h3 className="text-3xl md:text-4xl font-bold">Potencialize seu projeto com Portal D&V</h3>
        <p className="mt-4 text-zinc-300">Conecte-se com nossa equipe para propostas customizadas de palestra, música, marketing e rádio.</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="primary" className="w-full sm:w-auto">Solicitar orçamento</Button>
          <Button variant="ghost" className="w-full sm:w-auto">Falar com consultor</Button>
        </div>
      </div>
    </section>
  );
}