import { Star } from "lucide-react";

const testimonials = [
  { name: "Marcos Lima", time: "há 2 semanas", text: "Excelente atendimento! Profissionais muito capacitados e atenciosos. Resolveram meu problema de cupins rapidamente." },
  { name: "Fernanda Oliveira", time: "há 1 mês", text: "Serviço de qualidade! Equipe pontual e muito profissional. Super recomendo a Bioforte." },
  { name: "Carlos Eduardo", time: "há 1 mês", text: "Já é a terceira vez que contrato e sempre fico satisfeito. Atendimento excelente e resultados garantidos!" },
  { name: "Patricia Santos", time: "há 2 meses", text: "Muito satisfeita com o serviço! Eliminaram as baratas do meu apartamento. Recomendo!" },
  { name: "Roberto Silva", time: "há 3 meses", text: "Empresa séria e comprometida. Fizeram um ótimo trabalho de desratização na minha empresa." },
  { name: "Ana Paula Costa", time: "há 3 meses", text: "Atendimento nota 10! Resolveram o problema de formigas que eu tinha há anos. Muito obrigada!" },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-secondary" aria-labelledby="depoimentos-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          Avaliações do Google
        </span>
        <h2 id="depoimentos-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-2 text-foreground">
          O que nossos clientes dizem
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-bold text-foreground">4.9</span>
          <span className="text-muted-foreground">• 127 avaliações</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-sm text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.time}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
          </article>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento." target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="btn-whatsapp text-base px-8 py-6 rounded-lg font-bold gap-2">
            <MessageCircle className="w-5 h-5" /> Quero um Orçamento Sem Compromisso
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
