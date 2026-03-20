import { Music } from "@/types/music";

type AudioPreviewPlayerProps = {
  music: Music;
};

export default function AudioPreviewPlayer({ music }: AudioPreviewPlayerProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 flex flex-col md:flex-row items-center gap-4">
      <img src={music.cover} alt={music.title} className="h-20 w-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h4 className="text-white font-semibold">{music.title}</h4>
        <p className="text-zinc-300 text-sm">{music.artist} • {music.genre}</p>
        <p className="text-zinc-400 text-xs">Prévia fictícia de áudio para demonstração.</p>
      </div>
      <button className="rounded-xl bg-cyan-400/20 border border-cyan-300 px-4 py-2 text-xs font-semibold text-cyan-100">
        Ouvir preview
      </button>
    </div>
  );
}