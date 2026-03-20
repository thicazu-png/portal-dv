import { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: "b01",
    title: "Direção Estratégica e Cultura",
    author: "David Pires",
    category: "Gestão e Liderança",
    cover: "/images/livros/direcao-estrategica.jpg",
    description: "Manual de alto impacto para empresas que querem alinhar liderança, propósito e resultados.",
    buyLink: "https://portal-dv.com.br/book/direcao-estrategica",
  },
  {
    id: "b02",
    title: "Composição que Conecta",
    author: "Seta Studio",
    category: "Música e Criatividade",
    cover: "/images/livros/composicao-que-conecta.jpg",
    description: "Estratégias para transformar ideias em canções, jingles e narrativas sonoras memoráveis.",
    buyLink: "https://portal-dv.com.br/book/composicao-conecta",
  },
  {
    id: "b03",
    title: "Marca, Métrica e Mercado",
    author: "Commerce & MKT",
    category: "Marketing Digital",
    cover: "/images/livros/marca-metrica-mercado.jpg",
    description: "Guia prático para construir marcas resilientes com campanhas data-driven e impacto comercial.",
    buyLink: "https://portal-dv.com.br/book/marca-metrica-mercado",
  },
];