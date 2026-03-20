import { LEGAL_FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-300 border-t border-zinc-800 py-10">
      <div className="mx-auto px-6 md:px-10 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg">Portal D&V</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            Hub de conteúdo, soluções e experiências em treinamento, música, marketing e rádio.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Serviços Principais</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>Seta: Palestras e treinamentos</li>
            <li>Book Music: Composições e licenciamento</li>
            <li>Commerce & MKT: Branding e jingles</li>
            <li>Rádios: Memories e Maná</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contato</h4>
          <p className="mt-3 text-sm text-zinc-300">contato@portal-dv.com.br</p>
          <p className="text-sm text-zinc-300">+55 11 99999-9999</p>
        </div>
      </div>
      <div className="mt-8 border-t border-zinc-800 pt-5 text-center text-xs text-zinc-500">
        <p>{LEGAL_FOOTER}</p>
      </div>
    </footer>
  );
}