import { Phone, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

const benefits = [
  "Atendimento rápido e profissional",
  "Produtos aprovados pela ANVISA",
  "Garantia em todos os serviços",
  "Orçamento sem compromisso",
];

const CTASection = () => (
  <section className="py-20 md:py-28 section-dark relative overflow-hidden" aria-labelledby="cta-heading">
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h2 id="cta-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
        Precisa de Controle de Pragas?
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-80">
        Entre em contato conosco e receba um orçamento personalizado. Atendemos em Ribeirão Preto, Franca, Uberaba, Araraquara e Guarapuava.
      </p>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
        {benefits.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm md:text-base opacity-90">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="btn-whatsapp text-base px-8 py-6 rounded-lg font-bold gap-2 w-full sm:w-auto">
            <MessageCircle className="w-5 h-5" /> Chamar no WhatsApp
          </Button>
        </a>
        <a href="tel:+5516974007842">
          <Button size="lg" variant="outline" className="text-base px-8 py-6 rounded-lg font-bold gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
            <Phone className="w-5 h-5" /> (16) 97400-7842
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
