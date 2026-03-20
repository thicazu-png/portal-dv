import { Book } from "@/types/book";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="flex items-stretch gap-4">
      <img src={book.cover} alt={book.title} className="h-28 w-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h4 className="text-white font-semibold">{book.title}</h4>
        <p className="text-zinc-300 text-sm">{book.author} • {book.category}</p>
        <p className="text-zinc-400 text-sm mt-2">{book.description}</p>
        <div className="mt-3 flex justify-end">
          <a href={book.buyLink} target="_blank" rel="noreferrer" className="rounded-xl border border-cyan-300 px-3 py-1 text-xs text-cyan-100 hover:bg-cyan-400/20">
            Saiba mais
          </a>
        </div>
      </div>
    </Card>
  );
}