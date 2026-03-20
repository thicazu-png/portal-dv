import { Speaker } from "@/types/speaker";
import Card from "@/components/ui/Card";

type SpeakerCardProps = {
  speaker: Speaker;
};

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <img src={speaker.avatar} alt={speaker.name} className="h-14 w-14 rounded-full object-cover border border-emerald-300" />
        <div>
          <h4 className="text-white text-lg font-bold">{speaker.name}</h4>
          <p className="text-zinc-300 text-sm">{speaker.title}</p>
        </div>
      </div>
      <p className="text-zinc-300 text-sm">{speaker.bio}</p>
      <div className="flex flex-wrap gap-2">
        {speaker.specialties.map((tag) => (
          <span key={`${speaker.id}-${tag}`} className="rounded-full border border-cyan-500/30 px-2 py-1 text-[11px] text-cyan-200">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-emerald-300">{speaker.highlight}</p>
    </Card>
  );
}