import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import servicePragas from "@/assets/service-pragas.jpg";
import servicePassaros from "@/assets/service-passaros.jpg";
import serviceCupins from "@/assets/service-cupins.jpg";
import serviceCaixa from "@/assets/service-caixa.jpg";
import serviceAbelhas from "@/assets/service-abelhas.jpg";
import serviceSanitizacao from "@/assets/service-sanitizacao.jpg";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de saber mais sobre o serviço de ";

const services = [
  {
    image: servicePragas,
    title: "Controle de Pragas Urbanas",
    description:
      "Metodologias e técnicas de aplicação para o combate à pragas urbanas, como baratas, escorpiões, formigas, ratos, dentre outras.",
    whatsappSuffix: "Controle de Pragas",
  },
  {
    image: servicePassaros,
    title: "Afastamento de Pássaros",
    description:
      "Técnicas e tecnologias para promoção de barreiras de contenção contra pássaros, como barreiras físicas e/ou barreiras de repelência por campo eletromagnético.",
    whatsappSuffix: "Afastamento de Pássaros",
  },
  {
    image: serviceCupins,
    title: "Descupinização",
    description:
      "Técnicas que visam o combate aos cupins, que são as principais pragas causadoras de danificações em estruturas prediais e móveis com materiais compostos de celulose.",
    whatsappSuffix: "Descupinização",
  },
  {
    image: serviceCaixa,
    title: "Limpeza de Caixas D'água",
    description:
      "Remoção mecânica de sujidades, higienização interna e desinfecção de reservatórios de água.",
    whatsappSuffix: "Limpeza de Caixas D'água",
  },
  {
    image: serviceAbelhas,
    title: "Manejo de Abelhas",
    description:
      "Técnicas de remoção de abelhas e suas colméias de forma segura, com o objetivo de transportá-las ao local mais adequado e seguro, distante do ambiente urbano.",
    whatsappSuffix: "Manejo de Abelhas",
  },
  {
    image: serviceSanitizacao,
    title: "Sanitização de Ambientes",
    description:
      "Técnicas para desinfecção de ambientes contra o CORONAVÍRUS, proporcionando maior prevenção contra a COVID-19, além de outras doenças causadas por vírus, fungos e bactérias.",
    whatsappSuffix: "Sanitização de Ambientes",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 md:py-28 bg-secondary" aria-labelledby="servicos-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          Nossos Serviços
        </span>
        <h2 id="servicos-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-foreground">
          Soluções Completas em Controle de Pragas
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Oferecemos serviços especializados com tecnologia de ponta e profissionais certificados para garantir a segurança do seu ambiente.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service) => (
          <article key={service.title} className="card-service bg-card rounded-2xl overflow-hidden border border-border group">
            <div className="relative h-52 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-lg font-bold mb-2 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <a
                href={`${WHATSAPP_LINK}${encodeURIComponent(service.whatsappSuffix)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-1.5 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground rounded-lg text-sm font-medium">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
