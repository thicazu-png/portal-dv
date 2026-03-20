import { Radio } from "@/types/radio";

export const mainNavigation = [
  { label: "O Grupo", href: "/o-grupo" },
  { label: "Seta", href: "/seta" },
  { label: "Book Music", href: "/book-music" },
  { label: "Commerce", href: "/commerce" },
  { label: "Rádios", href: "/radios" },
  { label: "Contato", href: "/contato" },
];

export const radiosNavigation: Radio[] = [
  {
    id: "memories",
    name: "Rádio Memories",
    tagline: "Nostalgia e flashback com curadoria afetiva",
    description: "Programação rica em clássicos e experiências sonoras que conectam gerações.",
    streamSample: "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
    cover: "/images/radios/memories.jpg",
    accent: "#b3742a",
  },
  {
    id: "mana",
    name: "Rádio Maná",
    tagline: "Fé e conexão espiritual em ondas inspiradoras",
    description: "Conteúdo com música, talk shows e mensagens edificantes para a alma.",
    streamSample: "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
    cover: "/images/radios/mana.jpg",
    accent: "#d9b26f",
  },
];