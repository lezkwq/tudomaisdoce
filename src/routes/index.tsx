import { createFileRoute } from "@tanstack/react-router";
import {
  Header,
  Hero,
  Credibility,
  About,
  Shop,
  HowItWorks,
  InstagramGallery,
  Footer,
} from "@/components/florist-site";
import { floristSchema } from "@/lib/florist";

const title = "Floricultura Tudo Mais Doce | Buquês e Presentes em Joinville";
const ogImage =
  "https://id-preview--ddb2026b-38dc-4ff0-a0e6-e02bc9d39875.lovable.app/images/logo_tudo_mais_doce.png";
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
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1080" },
      { property: "og:image:height", content: "1080" },
      { name: "twitter:image", content: ogImage },
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
        <HowItWorks />
        <InstagramGallery />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floristSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
