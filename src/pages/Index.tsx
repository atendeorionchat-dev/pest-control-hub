import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bioforte Dedetizadora",
  description:
    "Empresa especializada em controle de pragas urbanas, descupinização, afastamento de pássaros, limpeza de caixas d'água, manejo de abelhas e sanitização de ambientes.",
  url: "https://bioforte.com.br",
  telephone: "+5500000000000",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  priceRange: "$$",
  areaServed: "Brasil",
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Bioforte Dedetizadora | Controle de Pragas e Saneamento Ambiental</title>
        <meta
          name="description"
          content="Bioforte Dedetizadora: controle de pragas urbanas, descupinização, afastamento de pássaros, limpeza de caixas d'água e sanitização. Solicite seu orçamento!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bioforte.com.br" />
        <meta property="og:title" content="Bioforte Dedetizadora | Controle de Pragas" />
        <meta property="og:description" content="Soluções completas em saneamento ambiental. Solicite seu orçamento sem compromisso!" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        <HeroSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
