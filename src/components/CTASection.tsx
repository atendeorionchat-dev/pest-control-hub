import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

const CTASection = () => (
  <section className="py-16 md:py-24 bg-hero" aria-labelledby="cta-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase">
        DESTAQUE PARA FUNCIONALIDADES
      </span>
      <h2 id="cta-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground mt-2 mb-4">
        Está à procura de algum dos nossos serviços?
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
        Toque no Botão abaixo que você será redirecionado(a) para o nosso atendimento imediatamente
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-10 py-7 rounded-xl font-bold gap-2 w-full sm:w-auto">
            <MessageCircle className="w-5 h-5" /> Fale Conosco no WhatsApp
          </Button>
        </a>
        <a href="tel:+5516974007842">
          <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-xl font-bold gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
            <Phone className="w-5 h-5" /> (16) 97400-7842
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
