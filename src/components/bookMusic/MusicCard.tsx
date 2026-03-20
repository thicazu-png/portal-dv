import { Music } from "@/types/music";
import Card from "@/components/ui/Card";

type MusicCardProps = {
  music: Music;
};

export default function MusicCard({ music }: MusicCardProps) {
  return (
    <Card>
      <div className="flex gap-4">
        <img src={music.cover} alt={music.title} className="h-24 w-24 rounded-lg object-cover" />
        <div className="flex-1">
          <h4 className="text-white font-bold">{music.title}</h4>
          <p className="text-zinc-300 text-sm">{music.artist}</p>
          <p className="text-zinc-400 text-xs mt-1">{music.genre} • {music.duration}</p>
          <p className="text-cyan-300 text-xs mt-2">Licenciamento disponível</p>
        </div>
      </div>
    </Card>
  );
}