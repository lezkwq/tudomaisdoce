import { useEffect, useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { business, categories, gallery, reviews, whatsappUrl } from "@/lib/florist";

const navigation = [
  ["Início", "#inicio"],
  ["Flores", "#flores"],
  ["Presentes", "#presentes"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

export function WhatsAppButton({
  children = "Conversar pelo WhatsApp",
  message,
  hero = false,
}: {
  children?: React.ReactNode;
  message?: string;
  hero?: boolean;
}) {
  return (
    <Button asChild variant={hero ? "hero" : "editorial"}>
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        <SiWhatsapp aria-hidden="true" />
        {children}
      </a>
    </Button>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className={`site-header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="header-inner">
        <a
          href="#inicio"
          className="wordmark"
          aria-label="Tudo Mais Doce — início"
          onClick={() => setOpen(false)}
        >
          Tudo Mais Doce<span>FLORICULTURA</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="header-contact"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar pelo WhatsApp"
        >
          <SiWhatsapp aria-hidden="true" />
          <span>Vamos conversar</span>
        </a>
        <Button
          variant="ghost"
          size="icon"
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação celular">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <picture className="hero-picture">
        <source
          media="(max-width: 767px)"
          srcSet="/images/hero_mobile.jpg"
          width="768"
          height="1365"
        />
        <img
          src="/images/hero_desktop.jpg"
          width="1365"
          height="768"
          alt="Buquê de gérberas amarelas, flores brancas e folhagens em embalagem pêssego"
          fetchPriority="high"
        />
      </picture>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Flores e presentes em Joinville</p>
          <h1 id="hero-title">
            Escolha o presente.
            <br />
            <em>A gente cuida</em>
            <br />
            dos detalhes.
          </h1>
          <p className="hero-description">
            Buquês, cestas e presentes personalizados, preparados com carinho para cada ocasião.
          </p>
          <WhatsAppButton hero />
        </div>
      </div>
    </section>
  );
}

export function Credibility() {
  return (
    <section className="credibility" aria-label="Nossa floricultura em números">
      <div>
        <span className="credibility-number">
          4,8
          <span className="tiny-star">
            <Star fill="currentColor" aria-hidden="true" />
          </span>
        </span>
        <p>50 avaliações no Google</p>
      </div>
      <div>
        <span className="credibility-number">1.403</span>
        <p>seguidores no Instagram</p>
      </div>
      <div>
        <span className="credibility-number credibility-word">Carinho até a entrega</span>
        <p>Entrega via motoboy</p>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="about-section section-space" aria-labelledby="about-title">
      <div className="about-inner">
        <p className="eyebrow">Um pouco sobre nós</p>
        <h2 id="about-title">
          Presentes que se tornam
          <br />
          <em>gestos de carinho.</em>
        </h2>
        <div className="about-copy">
          <p>A Tudo Mais Doce é feita para transformar presentes em gestos de carinho.</p>
          <p>
            Por aqui, cada pedido começa com uma conversa. Você conta a ocasião, explica o que está
            procurando e a gente ajuda a encontrar uma opção que combine com o seu momento e com o
            seu orçamento.
          </p>
          <p>
            Trabalhamos com buquês, arranjos, cestas de café da manhã e kits presente. Tudo
            preparado com atenção aos detalhes, atendimento próximo e cuidado até a entrega.
          </p>
          <p>
            Também personalizamos cestas conforme o valor que você pretende investir. A ideia é
            encontrar uma opção bonita e especial, respeitando o seu orçamento.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Shop() {
  return (
    <section id="flores" className="shop-section" aria-labelledby="shop-title">
      <div className="section-heading">
        <p className="eyebrow">Para cada ocasião, um carinho</p>
        <h2 id="shop-title">Nossas flores e presentes</h2>
        <p>Encontre uma forma especial de demonstrar carinho.</p>
      </div>
      <div className="shop-products">
        {categories.map((category, index) => (
          <article
            className="category"
            key={category.name}
            id={index === 2 ? "presentes" : undefined}
          >
            <div className="square-photo">
              <img
                src={category.image}
                width="800"
                height="800"
                alt={category.alt}
                loading="lazy"
              />
            </div>
            <div className="category-copy">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Button asChild variant="hero">
                <a href={whatsappUrl(category.message)} target="_blank" rel="noopener noreferrer">
                  Consultar opções
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
      <div className="basket-callout">
        <p>
          Também montamos cestas de café da manhã
          <br className="desktop-break" /> personalizadas conforme o seu orçamento.
        </p>
        <Button asChild variant="editorialLink">
          <a
            href={whatsappUrl(
              "Olá! Gostaria de montar uma cesta personalizada. Meu orçamento é...",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero montar minha cesta
          </a>
        </Button>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="reviews-title">
      <div className="section-heading">
        <p className="eyebrow">Histórias de carinho</p>
        <h2 id="reviews-title">Quem já presenteou com a gente</h2>
        <p>Avaliações de quem confiou no nosso cuidado.</p>
      </div>
      <div className="reviews-window">
        <div className="reviews-track">
          {[0, 1].map((copy) => (
            <div
              className="reviews-sequence"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {reviews.map((review) => (
                <figure className="review" key={review.name}>
                  <div className="review-stars" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star size={13} fill="currentColor" key={i} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote>“{review.quote}”</blockquote>
                  <figcaption>{review.name}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Converse com a gente",
    description:
      "Chame pelo WhatsApp e conte qual é a ocasião, para quem é o presente e o que você está procurando.",
  },
  {
    title: "Combine os detalhes",
    description:
      "A gente conversa sobre as opções, personalização e orçamento para encontrar a melhor combinação.",
  },
  {
    title: "Receba seu presente",
    description:
      "Depois de combinar os detalhes, organizamos a preparação e a entrega via motoboy.",
  },
];

export function HowItWorks() {
  return (
    <section className="order-section section-space" aria-labelledby="order-title">
      <div className="section-heading">
        <p className="eyebrow">Do primeiro oi à entrega</p>
        <h2 id="order-title">Pedir é simples</h2>
      </div>
      <ol className="order-steps">
        {steps.map((step, i) => (
          <li key={step.title}>
            <span className="step-number">0{i + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
      <div className="order-cta">
        <WhatsAppButton message="Olá! Quero preparar um presente especial. Podemos conversar sobre as opções?" />
      </div>
    </section>
  );
}

export function InstagramGallery() {
  return (
    <section className="instagram-section" aria-labelledby="instagram-title">
      <div className="section-heading">
        <h2 id="instagram-title">Um pouco do que sai por aqui</h2>
        <p>Acompanhe nossas flores e presentes no Instagram.</p>
        <Button variant="editorialLink" asChild>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer">
            <SiInstagram aria-hidden="true" />
            Acompanhe nossos momentos
          </a>
        </Button>
      </div>
      <div className="instagram-grid">
        {gallery.map((photo) => (
          <a
            className="square-photo"
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            key={photo.image}
            aria-label={`Ver no Instagram: ${photo.alt}`}
          >
            <img src={photo.image} alt={photo.alt} width="800" height="800" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#inicio" className="wordmark">
            Tudo Mais Doce<span>FLORICULTURA</span>
          </a>
          <p>
            Flores e presentes preparados com carinho, atenção aos detalhes e cuidado até a entrega.
          </p>
        </div>
        <div>
          <h3>Encontre seu presente</h3>
          <nav aria-label="Navegação do rodapé">
            <a href="#flores">Buquês e girassóis</a>
            <a href="#presentes">Kits e presentes</a>
            <a
              href={whatsappUrl(
                "Olá! Gostaria de montar uma cesta personalizada. Meu orçamento é...",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cestas personalizadas
            </a>
            <a href="#sobre">Sobre a Tudo Mais Doce</a>
          </nav>
        </div>
        <div>
          <h3>Estamos em Joinville</h3>
          <address>
            Rua Tabatinga, 1733
            <br />
            Iririú, Joinville — SC
            <br />
            CEP 89224-051
          </address>
          <a className="footer-map" href={business.maps} target="_blank" rel="noopener noreferrer">
            Ver localização no Google Maps
          </a>
        </div>
        <div>
          <h3>Vamos conversar</h3>
          <p>
            Pedidos e dúvidas?
            <br />
            Nosso atendimento é pelo WhatsApp.
          </p>
          <div className="footer-social">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <SiWhatsapp />
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <SiInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Floricultura Tudo Mais Doce</span>
        <span>Feito de flores. Feito de carinho.</span>
      </div>
    </footer>
  );
}

export function MobileWhatsAppCTA() {
  return (
    <div className="mobile-whatsapp">
      <WhatsAppButton />
    </div>
  );
}
