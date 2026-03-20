import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "p01",
    title: "Jingle Corporativo Premium",
    description: "Criação de identidade sonora exclusiva, alinhada à estratégia de marca e jornada do cliente.",
    category: "Jingleria",
    image: "/images/produtos/jingle-corporativo.jpg",
    price: "sob consulta",
    featureTags: ["Composição custom", "Direção criativa", "Estúdio profissional"],
  },
  {
    id: "p02",
    title: "Branding 360°",
    description: "Sistema de branding completo: identidade visual, posicionamento verbal e trilha sonora associada.",
    category: "Marca",
    image: "/images/produtos/branding.jpg",
    price: "sob consulta",
    featureTags: ["Pesquisa e validade", "Playbook estratégico", "Lançamento integrado"],
  },
  {
    id: "p03",
    title: "Campanha Multicanal High-Performance",
    description: "Implementação de campanhas publicitárias para impacto rápido e escala com monitoramento contínuo.",
    category: "Performance",
    image: "/images/produtos/campanha-multicanal.jpg",
    featureTags: ["Ads", "Conteúdo viral", "Otimização em tempo real"],
  },
  {
    id: "p04",
    title: "Casting de Palestrantes Especializados",
    description: "Acesso a talentos com temas de gestão, inovação e cultura para eventos corporativos e congressos.",
    category: "Seta",
    image: "/images/produtos/casting.jpg",
    featureTags: ["Curadoria", "Pré-seleção", "Acompanhamento de apresentação"],
  },
];