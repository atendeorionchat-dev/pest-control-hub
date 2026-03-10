import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/bioforte-team.jpg";
import logoIcon from "@/assets/logo-icon.png";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

const HeroSection = () => (
  <header className="bg-hero relative overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center">
        <img
          src={logoIcon}
          alt="Bioforte Saneamento Ambiental"
          className="w-16 h-16 mx-auto mb-6"
          loading="eager"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
          Bioforte Dedetizadora
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed mb-8">
          Protegemos seu ambiente contra qualquer presença de pragas e vetores
          urbanos, além de microrganismos como vírus, fungos e bactérias.
        </p>

        <img
          src={heroImg}
          alt="Equipe Bioforte - Profissionais de controle de pragas"
          className="mx-auto rounded-2xl shadow-2xl max-w-2xl w-full mb-10"
          loading="eager"
        />

        <p className="text-lg md:text-xl font-bold text-primary-foreground mb-4">
          Toque no Botão e faça seu orçamento agora mesmo em nosso WhatsApp:
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-lg px-10 py-7 rounded-xl font-bold gap-2">
            <MessageCircle className="w-5 h-5" /> Faça seu Orçamento
          </Button>
        </a>
      </div>
    </div>
  </header>
);

export default HeroSection;
