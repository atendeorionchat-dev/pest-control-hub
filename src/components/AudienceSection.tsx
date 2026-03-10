import { Users, Building2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

const AudienceSection = () => (
  <section className="py-16 md:py-24 bg-section-gray" aria-labelledby="publico-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          PARA QUEM É?
        </span>
        <h2 id="publico-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4">
          Atendimento Personalizado
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Atendemos desde residências até grandes empresas, todas com a mesma excelência, do primeiro atendimento até a execução do serviço. Nossas metodologias de trabalho são aplicadas conforme a necessidade dos nossos clientes, buscando sempre por resultados eficazes e consistentes.
        </p>
      </div>

      {/* Companies CTA */}
      <div className="bg-hero rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
        <span className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase">
          PROTEJA O SEU AMBIENTE DE TRABALHO
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mt-2 mb-6">
          Junte-se a mais de <span className="text-accent-foreground">987 empresas</span> que estão protegendo suas instalações
        </h3>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-8 py-6 rounded-xl font-bold gap-2">
            <MessageCircle className="w-5 h-5" /> Solicitar Orçamento
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default AudienceSection;
