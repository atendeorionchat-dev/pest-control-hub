import {
  Zap,
  Layers,
  Users,
  Award,
  Heart,
  Handshake,
} from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Rápido Atendimento",
    description: "Dedicação total em fazer um rápido atendimento, de forma ágil e facilitando a vida de nossos clientes.",
  },
  {
    icon: Layers,
    title: "Serviços Diferenciados",
    description: "Variedade nos serviços que oferecemos, buscando atender as demandas de nossos parceiros.",
  },
  {
    icon: Users,
    title: "Proximidade ao Cliente",
    description: "Acompanhamento de perto com o cliente, buscando sempre estar à plena disposição para atender suas demandas.",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Qualidade é um dos nossos principais valores, buscando encantar nossos clientes desde o primeiro contato até a prestação de nossos serviços.",
  },
  {
    icon: Heart,
    title: "Amor pelo que faz",
    description: "A BIOFORTE é mais que uma empresa, mas sim uma família, um time preparado para lhe atender com prontidão.",
  },
  {
    icon: Handshake,
    title: "Honestidade",
    description: "Clareza total com nossos clientes, buscando sempre resolver seus problemas da forma mais efetiva.",
  },
];

const DifferentialsSection = () => (
  <section className="py-16 md:py-24 bg-section-gray" aria-labelledby="diferenciais-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          NOSSOS DIFERENCIAIS
        </span>
        <h2 id="diferenciais-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
          Por que escolher a Bioforte?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {differentials.map((d) => (
          <div key={d.title} className="card-hover bg-card rounded-2xl p-7 border border-border shadow-sm text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <d.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">{d.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
