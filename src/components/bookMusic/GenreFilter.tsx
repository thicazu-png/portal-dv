type GenreFilterProps = {
  genres: string[];
  selected: string;
  onChange: (genre: string) => void;
};

export default function GenreFilter({ genres, selected, onChange }: GenreFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {genres.map((genre) => (
        <button
          key={genre}
          type="button"
          onClick={() => onChange(genre)}
          className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
            selected === genre
              ? "bg-emerald-400/20 border-emerald-400 text-emerald-200"
              : "border-zinc-700 text-zinc-200 hover:border-emerald-300 hover:text-emerald-200"
          }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}