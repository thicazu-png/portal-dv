import { Radio } from "@/types/radio";
import Card from "@/components/ui/Card";

type RadioCardProps = {
  radio: Radio;
};

export default function RadioCard({ radio }: RadioCardProps) {
  return (
    <Card className="flex gap-4">
      <img src={radio.cover} alt={radio.name} className="h-24 w-24 rounded-lg object-cover" />
      <div className="flex-1">
        <h4 className="text-white text-lg font-bold">{radio.name}</h4>
        <p className="text-zinc-300 text-sm">{radio.tagline}</p>
        <p className="text-zinc-400 text-xs mt-1">{radio.description}</p>
      </div>
    </Card>
  );
}