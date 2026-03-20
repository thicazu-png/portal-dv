const topics = [
  "Liderança visionária",
  "Comunicação de alto impacto",
  "Inovação e cultura ágil",
  "Estratégia em transformação",
  "Engajamento e performance",
  "Inteligência emocional" ,
];

export default function TopicsGrid() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {topics.map((topic) => (
        <div key={topic} className="rounded-lg border border-zinc-700 p-4 bg-zinc-950/50">
          <h5 className="text-sm font-semibold text-white">{topic}</h5>
          <p className="text-zinc-300 text-xs mt-1">Experiência e metodologia para ciclos de capacitação memoráveis.</p>
        </div>
      ))}
    </div>
  );
}