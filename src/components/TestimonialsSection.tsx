import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Leudilene",
    role: "Proprietária",
    company: "Casa de Sucos Delícias da Terra",
    text: "A Bioforte faz parte da nossa história há 7 anos, sempre com qualidade no atendimento, qualidade garantida dos serviços realizados, uma equipe de técnicos sempre bem equipados e muito educados. Eu confio na Bioforte e recomendo.",
  },
  {
    name: "David",
    role: "Proprietário",
    company: "Cantô Restaurante",
    text: "Eficiência, qualidade e rapidez nos serviços prestados, a Bioforte atende todos os requisitos com total excelência. Dispondo de equipamentos de primeira e profissionais altamente qualificados. Estou totalmente satisfeito com a Bioforte.",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-background" aria-labelledby="depoimentos-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          QUEM CONHECE RECOMENDA!
        </span>
        <h2 id="depoimentos-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-4">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {testimonials.map((t) => (
          <article key={t.name} className="bg-card rounded-2xl p-8 border border-border shadow-sm card-hover">
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role} — {t.company}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Professionalism block */}
      <div className="bg-hero rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-4">
          100% de Profissionalismo e Competência
        </h3>
        <p className="text-primary-foreground/80 leading-relaxed">
          A Bioforte vem há mais de 20 anos se aprimorando em atender tanto empresas como domicílios da forma mais profissional e segura, através de capacitações e treinamentos com toda equipe.
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
