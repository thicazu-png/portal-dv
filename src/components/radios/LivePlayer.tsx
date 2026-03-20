import { Radio } from "@/types/radio";

type LivePlayerProps = {
  radio: Radio;
};

export default function LivePlayer({ radio }: LivePlayerProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 flex flex-col sm:flex-row items-center gap-4">
      <div className="flex-1">
        <h4 className="text-white font-semibold">{radio.name}</h4>
        <p className="text-zinc-300 text-sm">{radio.streamSample}</p>
      </div>
      <button className="rounded-lg border border-emerald-400 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-400/20">Ouvir</button>
    </div>
  );
}