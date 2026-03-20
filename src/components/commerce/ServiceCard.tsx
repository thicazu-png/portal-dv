import Card from "@/components/ui/Card";

type ServiceCardProps = {
  title: string;
  description: string;
  action: string;
};

export default function ServiceCard({ title, description, action }: ServiceCardProps) {
  return (
    <Card>
      <h4 className="text-white text-xl font-semibold">{title}</h4>
      <p className="text-zinc-300 mt-2 text-sm">{description}</p>
      <p className="mt-4 text-emerald-300 font-medium">{action}</p>
    </Card>
  );
}