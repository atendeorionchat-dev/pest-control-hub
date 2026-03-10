import { Phone, ArrowRight, Shield, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/bioforte-team.jpg";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

const stats = [
  { icon: Shield, label: "Segurança Total", sub: "Produtos aprovados pela ANVISA" },
  { icon: Users, label: "Equipe Especializada", sub: "Profissionais certificados" },
  { icon: Award, label: "Qualidade Certificada", sub: "ISO 9001 e licenças ambientais" },
  { icon: Clock, label: "Atendimento 24h", sub: "Suporte completo sempre" },
];

const HeroSection = () => (
  <header className="relative min-h-[100svh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Equipe Bioforte - Profissionais de controle de pragas"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />
    </div>

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="animate-fade-in text-primary font-semibold text-sm tracking-widest uppercase mb-4">
          Proteção Profissional para seu Ambiente
        </p>
        <h1 className="animate-fade-in animate-fade-in-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
          Líder em Controle de{" "}
          <span className="text-primary">Pragas</span>
        </h1>
        <p className="animate-fade-in animate-fade-in-delay-2 text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground/80 max-w-xl">
          Mais de 15 anos de experiência oferecendo soluções eficazes e seguras para controle de pragas urbanas.
        </p>
        <div className="animate-fade-in animate-fade-in-delay-3 flex flex-col sm:flex-row gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-whatsapp text-base px-7 py-6 rounded-lg font-semibold gap-2 w-full sm:w-auto">
              Solicitar Orçamento <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="tel:+5516974007842">
            <Button size="lg" variant="outline" className="text-base px-7 py-6 rounded-lg font-semibold gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
              <Phone className="w-4 h-4" /> (16) 97400-7842
            </Button>
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="animate-fade-in animate-fade-in-delay-4 mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-5 border border-primary-foreground/10">
            <s.icon className="w-8 h-8 text-primary mb-3" />
            <p className="font-semibold text-primary-foreground text-sm">{s.label}</p>
            <p className="text-primary-foreground/60 text-xs mt-1">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </header>
);

export default HeroSection;
