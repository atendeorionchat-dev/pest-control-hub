import {
  Bug,
  Bird,
  TreeDeciduous,
  Droplets,
  Flower2,
  SprayCanIcon,
} from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Controle de Pragas Urbanas",
    description:
      "Metodologias e técnicas de aplicação para o combate à pragas urbanas, como baratas, escorpiões, formigas, ratos, dentre outras.",
  },
  {
    icon: Bird,
    title: "Afastamento de Pássaros",
    description:
      "Técnicas e tecnologias para promoção de barreiras de contenção contra pássaros, como barreiras físicas e/ou barreiras de repelência por campo eletromagnético (Licenciada do Sistema Pigeons Out).",
  },
  {
    icon: TreeDeciduous,
    title: "Descupinização",
    description:
      "Técnicas que visam o combate aos cupins, que são as principais pragas causadoras de danificações em estruturas prediais e móveis com materiais compostos de celulose.",
  },
  {
    icon: Droplets,
    title: "Limpeza de Caixas D'água",
    description:
      "Remoção mecânica de sujidades, higienização interna e desinfecção de reservatórios de água.",
  },
  {
    icon: Flower2,
    title: "Manejo de Abelhas",
    description:
      "Técnicas de remoção de abelhas e suas colméias de forma segura, com o objetivo de transportá-las ao local mais adequado e seguro, distante do ambiente urbano.",
  },
  {
    icon: SprayCanIcon,
    title: "Sanitização de Ambientes",
    description:
      "Técnicas para desinfecção de ambientes contra o CORONAVÍRUS, proporcionando maior prevenção contra a COVID-19, além de outras doenças causadas por vírus, fungos e bactérias.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background" aria-labelledby="servicos-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase mb-4">
            Conheça nossos serviços
          </span>
          <h2
            id="servicos-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight mb-4"
          >
            Nossas{" "}
            <span className="text-gradient">Especialidades</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas em saneamento ambiental para proteger sua casa, empresa e família.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`card-elevated bg-card rounded-2xl p-8 border border-border/50 group animate-fade-up animate-fade-up-delay-${index < 6 ? index : 5}`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-700 mb-3 text-card-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
