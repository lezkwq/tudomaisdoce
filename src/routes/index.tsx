import { createFileRoute } from "@tanstack/react-router";
import {
  Header,
  Hero,
  Credibility,
  About,
  Shop,
  Testimonials,
  HowItWorks,
  InstagramGallery,
  Footer,
  MobileWhatsAppCTA,
} from "@/components/florist-site";
import { floristSchema } from "@/lib/florist";

const title = "Floricultura Tudo Mais Doce | Buquês e Presentes em Joinville";
const description =
  "Buquês, arranjos, cestas de café da manhã e kits presente em Joinville. Atendimento pelo WhatsApp, personalização conforme seu orçamento e entrega por motoboy.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Credibility />
        <About />
        <Shop />
        <Testimonials />
        <HowItWorks />
        <InstagramGallery />
      </main>
      <Footer />
      <MobileWhatsAppCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floristSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
