"use client";

import { useMemo, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import GenreFilter from "@/components/bookMusic/GenreFilter";
import MusicCard from "@/components/bookMusic/MusicCard";
import AudioPreviewPlayer from "@/components/bookMusic/AudioPreviewPlayer";
import BookCard from "@/components/bookMusic/BookCard";
import Button from "@/components/ui/Button";
import { musics } from "@/data/musics";
import { books } from "@/data/books";

export default function BookMusicPage() {
  const genres = useMemo(() => Array.from(new Set(musics.map((item) => item.genre))), []);
  const [selectedGenre, setSelectedGenre] = useState<string>(genres[0] || "");
  const filtered = useMemo(() => musics.filter((item) => item.genre === selectedGenre), [selectedGenre]);

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-16 space-y-10">
      <div className="rounded-2xl border border-orange-500/40 bg-zinc-900/70 p-7">
        <SectionTitle
          title="Book Music"
          subtitle="Composições e licenciamento"
          description="Obras autorais e catálogo estratégico para campanhas, cenas e produções.
"
        />
        <p className="mt-4 text-zinc-300">Conectamos composições, tracks e livros ao seu projeto, com qualidade e exclusividade.</p>
      </div>

      <div className="rounded-2xl border border-orange-500/40 bg-zinc-900/60 p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-white">Filtro por gênero</h3>
          <GenreFilter genres={genres} selected={selectedGenre} onChange={setSelectedGenre} />
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {filtered.map((music) => (
            <MusicCard key={music.id} music={music} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Prévia de produção</h3>
        {filtered.slice(0, 2).map((music) => (
          <AudioPreviewPlayer key={music.id} music={music} />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Livros autorais</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div className="bg-zinc-900/75 border border-orange-500/30 p-6 rounded-2xl">
        <p className="text-zinc-300">Necessita licenciar composições ou publicação autoral? Nossa equipe entrega solução end-to-end.</p>
        <Button variant="primary" className="mt-4">Contato para licenciamento</Button>
      </div>
    </section>
  );
}