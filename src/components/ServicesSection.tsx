import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import servicePragas from "@/assets/service-pragas.jpg";
import servicePassaros from "@/assets/service-passaros.jpg";
import serviceCupins from "@/assets/service-cupins.jpg";
import serviceCaixa from "@/assets/service-caixa.jpg";
import serviceAbelhas from "@/assets/service-abelhas.jpg";
import serviceSanitizacao from "@/assets/service-sanitizacao.jpg";

const WHATSAPP_BASE = "https://wa.me/5516974007842?text=Olá! Gostaria de saber mais sobre ";

const services = [
  {
    image: servicePragas,
    title: "Controle de Pragas Urbanas",
    description: "Metodologias e técnicas de aplicação para o combate à pragas urbanas, como baratas, escorpiões, formigas, ratos, dentre outras.",
  },
  {
    image: servicePassaros,
    title: "Afastamento de Pássaros",
    description: "Técnicas e tecnologias para promoção de barreiras de contenção contra pássaros, como barreiras físicas e/ou barreiras de repelência por campo eletromagnético (Licenciada do Sistema Pigeons Out).",
  },
  {
    image: serviceCupins,
    title: "Descupinização",
    description: "Técnicas que visam o combate aos cupins, que são as principais pragas causadoras de danificações em estruturas prediais e móveis com materiais compostos de celulose.",
  },
  {
    image: serviceCaixa,
    title: "Limpeza de Caixas D'água",
    description: "Remoção mecânica de sujidades, higienização interna e desinfecção de reservatórios de água.",
  },
  {
    image: serviceAbelhas,
    title: "Manejo de Abelhas",
    description: "Técnicas de remoção de abelhas e suas colméias de forma segura, com o objetivo de transportá-las ao local mais adequado e seguro, distante do ambiente urbano.",
  },
  {
    image: serviceSanitizacao,
    title: "Sanitização de Ambientes",
    description: "Técnicas para desinfecção de ambientes contra o novo CORONAVÍRUS, proporcionando assim uma maior prevenção do local contra a COVID-19, além de outras doenças causadas por microrganismos, como VÍRUS, FUNGOS E BACTÉRIAS.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-16 md:py-24 bg-section-gray" aria-labelledby="servicos-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          Conheça nossos serviços
        </span>
        <h2 id="servicos-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-2 mb-4">
          NOSSAS ESPECIALIDADES
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <article key={s.title} className="card-hover bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
            <div className="h-48 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 text-primary">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
              <a
                href={`${WHATSAPP_BASE}${encodeURIComponent(s.title)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="btn-whatsapp rounded-lg text-sm font-medium gap-1.5">
                  Solicitar Orçamento <ArrowRight className="w-3.5 h-3.5" />
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
