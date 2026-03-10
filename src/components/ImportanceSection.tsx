import { ShieldAlert } from "lucide-react";

const ImportanceSection = () => (
  <section className="py-16 md:py-24 bg-background" aria-labelledby="importancia-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          IMPORTÂNCIA
        </span>
        <h2 id="importancia-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 mb-6">
          Proteja seu ambiente contra pragas causadoras de doenças e prejuízos financeiros
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Grande parte das pragas podem causar doenças nas pessoas que frequentam os mesmos ambientes onde elas se infestam, resultando em riscos aos seus amigos e familiares ou pessoas que estão sob sua responsabilidade (funcionários e clientes). Além disso, algumas pragas podem causar sérios danos materiais, como ocorre com os cupins, os quais a infestação pode ocasionar em estragos irreversíveis de móveis e utensílios, além de danificar estruturas.
        </p>
      </div>
    </div>
  </section>
);

export default ImportanceSection;
