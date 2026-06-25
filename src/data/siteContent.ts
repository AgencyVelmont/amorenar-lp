import heroImage from "@/assets/hero-bg-amorenar.png";
import heroDesktopImage from "@/assets/hero-horizontal-amorenar.png";
import heroMainImage from "@/assets/hero-main-amorenar.png";
import serviceLedImage from "@/assets/service-led.png";
import serviceNaturalImage from "@/assets/service-natural-amorenar.png";

export const INSTAGRAM_URL = "https://www.instagram.com/amorenar.rachel/";

export const locations = {
  novaBandeirantes: {
    name: "Nova Bandeirantes",
    status: "Agenda aberta",
    whatsapp: "556681148761",
    message:
      "Olá, Rachel! Vim pela página da AMORENAR e quero agendar meu bronzeamento em Nova Bandeirantes. Pode me enviar os horários disponíveis?",
  },
  novaMonteVerde: {
    name: "Nova Monte Verde",
    status: "Em breve",
    path: "/nova-monte-verde",
  },
};

export const buildLocationWhatsappUrl = (location: typeof locations.novaBandeirantes) =>
  `https://wa.me/${location.whatsapp}?text=${encodeURIComponent(location.message)}`;

export const images = {
  hero: heroMainImage,
  heroDesktop: heroDesktopImage,
  serviceLed: serviceLedImage,
};

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#escolher-cidade", label: "Cidades" },
];

export const experienceBenefits = [
  "Atendimento personalizado",
  "Cuidado em cada detalhe",
  "Pagamento após o procedimento",
];

export const services = [
  {
    id: "natural",
    number: "01",
    title: "Bronze Natural",
    description:
      "Uma experiência personalizada para conquistar uma marquinha bonita, uniforme e feita para valorizar o seu corpo.",
    image: serviceNaturalImage,
    items: [
      "Preparação personalizada da marquinha.",
      "Atendimento individual e cuidadoso.",
      "Orientações antes do procedimento.",
      "Recomendações para os cuidados posteriores.",
    ],
  },
  {
    id: "led",
    number: "02",
    title: "Bronze com LED Azul",
    description:
      "Uma experiência mais completa, unindo o bronzeamento feminino ao uso do LED azul como recurso complementar durante o atendimento.",
    image: serviceLedImage,
    items: [
      "Preparação personalizada da marquinha.",
      "Atendimento individual.",
      "Sessão complementar com LED azul.",
      "Orientações antes e depois do procedimento.",
    ],
  },
];

export const faqs = [
  {
    q: "Quando o pagamento é realizado?",
    a: "O pagamento é feito após a realização do procedimento.",
  },
  {
    q: "Preciso agendar com antecedência?",
    a: "Sim. Os atendimentos acontecem com horário marcado.",
  },
  {
    q: "Onde a AMORENAR atende?",
    a: "Atualmente, os agendamentos estão disponíveis em Nova Bandeirantes. Nova Monte Verde estará disponível em breve.",
  },
];
