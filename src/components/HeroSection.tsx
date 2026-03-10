import { Shield, Phone, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logoIcon from "@/assets/logo-icon.png";

const HeroSection = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Profissional de controle de pragas realizando tratamento em ambiente residencial"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-up">
          <img
            src={logoIcon}
            alt="Bioforte Saneamento Ambiental - Logo"
            className="w-20 h-20 mx-auto mb-6 animate-float"
          />
        </div>

        <h1 className="animate-fade-up animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-900 tracking-tight mb-6 text-primary-foreground leading-tight">
          Bioforte{" "}
          <span className="text-gradient">Dedetizadora</span>
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-primary-foreground/80 leading-relaxed font-body">
          Protegemos seu ambiente contra qualquer presença de pragas e vetores
          urbanos, além de microrganismos como vírus, fungos e bactérias.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5500000000000?text=Olá! Gostaria de fazer um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicitar orçamento via WhatsApp"
          >
            <Button size="lg" className="glow-green text-lg px-8 py-6 font-semibold gap-2 rounded-full">
              <Phone className="w-5 h-5" />
              Faça seu Orçamento
            </Button>
          </a>
          <a href="#servicos">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 font-semibold gap-2 rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Shield className="w-5 h-5" />
              Nossos Serviços
            </Button>
          </a>
        </div>

        <a
          href="#servicos"
          className="animate-fade-up animate-fade-up-delay-4 inline-block mt-16"
          aria-label="Ver serviços"
        >
          <ArrowDown className="w-8 h-8 text-primary-foreground/60 animate-bounce" />
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
