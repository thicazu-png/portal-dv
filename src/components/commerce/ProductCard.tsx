import { Product } from "@/types/product";
import Card from "@/components/ui/Card";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <img src={product.image} alt={product.title} className="w-full h-36 rounded-lg object-cover" />
      <div className="mt-3 space-y-2">
        <h4 className="text-white text-lg font-bold">{product.title}</h4>
        <p className="text-zinc-300 text-sm">{product.description}</p>
        <div className="flex flex-wrap gap-2 mt-1 text-xs text-cyan-200">
          {product.featureTags.map((tag) => (
            <span key={`${product.id}-${tag}`} className="rounded-full border border-cyan-500/30 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}