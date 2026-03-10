import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Atendimento rápido e profissional",
  "Produtos seguros e certificados",
  "Garantia em todos os serviços",
  "Orçamento sem compromisso",
];

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 hero-gradient relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-primary-foreground mb-6">
          Solicite seu Orçamento Agora
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Entre em contato pelo WhatsApp e receba um orçamento personalizado sem compromisso.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 text-primary-foreground/90 text-sm md:text-base">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5500000000000?text=Olá! Gostaria de fazer um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento via WhatsApp"
        >
          <Button
            size="lg"
            className="glow-green text-lg px-10 py-7 font-bold gap-3 rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Phone className="w-6 h-6" />
            Chamar no WhatsApp
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
