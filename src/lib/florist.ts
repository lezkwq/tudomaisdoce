export const business = {
  name: "Floricultura Tudo Mais Doce",
  phone: "5547996603083",
  instagram: "https://www.instagram.com/floricultura_tudomaisdoce/",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua%20Tabatinga%201733%20Iriri%C3%BA%20Joinville%20SC",
  rating: 4.8,
  reviewCount: 50,
  followers: 1403,
};

export function whatsappUrl(
  message = "Olá! Gostaria de conhecer as opções de flores e presentes.",
) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const categories = [
  {
    name: "Buquês",
    image: "/images/produto_buques.jpg",
    alt: "Buquê de flores brancas e rosadas com embalagem pink e laço dourado",
    description: "Combinações de flores e cores para surpreender em diferentes ocasiões.",
    message: "Olá! Gostaria de conhecer as opções de buquês.",
  },
  {
    name: "Girassóis",
    image: "/images/produto_girassois.png",
    alt: "Buquê de girassóis e flores brancas com embalagem clara e laço dourado",
    description: "Uma escolha cheia de cor para deixar o dia de alguém ainda mais especial.",
    message: "Olá! Gostaria de conhecer os buquês de girassóis.",
  },
  {
    name: "Kits e presentes",
    image: "/images/produto_kits_presentes.png",
    alt: "Flores, rosas e chocolates delicadamente embalados para presente",
    description: "Flores e chocolates reunidos em um presente preparado com cuidado.",
    message: "Olá! Gostaria de conhecer os kits e presentes disponíveis.",
  },
];

export const gallery = [
  {
    image: "/images/instagram_01.jpg",
    alt: "Buquê de rosas vermelhas e flores rosadas com folhagens",
  },
  {
    image: "/images/instagram_02.jpg",
    alt: "Buquê de girassóis amarelos com pequenas flores brancas",
  },
  {
    image: "/images/instagram_03.png",
    alt: "Girassol e rosas azuis em embalagem azul e laço de cetim",
  },
  {
    image: "/images/instagram_04.jpg",
    alt: "Rosas vermelhas com flores brancas em embalagem kraft",
  },
];

export const reviews = [
  {
    name: "Jessica Medeiros Moraes dos Santos",
    quote:
      "Atendimento e produtos de ótima qualidade! Respondem rápido e serviço agilizado. Estão de parabéns!",
  },
  {
    name: "Gisele Schmitt",
    quote:
      "Pedi para fazer uma cesta personalizada com o valor que eu poderia pagar e ela foi super compreensível em adaptar pra mim.",
  },
  {
    name: "Caroline dos Santos",
    quote:
      "Tudo muito maravilhoso, desde o orçamento, aos preparativos e entrega. Tudo feito com muito cuidado, e foram muito atenciosos a todo momento.",
  },
  {
    name: "moises soares",
    quote: "Pedi 10horas da manhã. Antes de meio dia estava entregue estão de parabéns.",
  },
  {
    name: "Eloiza Anunciacao",
    quote:
      "Ótimo atendimento, chegou tudo bem arrumadinho e pontual ao horário que marcamos. Serviço de qualidade amei",
  },
  {
    name: "Kercia Silva",
    quote:
      "Ah eu amei o atendimento, super atenciosa. Fiz um pedido bem em cima da hora e mesmo assim fui atendido com muita atenção. Leo amou muito o presente.",
  },
  {
    name: "wendel lopes",
    quote: "Sempre muito bem atendido. Atenciosos, caprichosos e dedicados. Recomendo...",
  },
  {
    name: "Daniel RJ",
    quote: "Muito bom, com ótimos preços e atendimento excelente! Recomendo a todos.",
  },
];

export const floristSchema = {
  "@context": "https://schema.org",
  "@type": "Florist",
  name: business.name,
  telephone: "+55 47 99660-3083",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Tabatinga, 1733, Iririú",
    addressLocality: "Joinville",
    addressRegion: "SC",
    postalCode: "89224-051",
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  sameAs: [business.instagram],
};
