import { MapPin, Building2, Handshake, UserCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

type UnitType = "propria" | "franquia" | "licenciado";

interface Unit {
  name: string;
  state: string;
  type: UnitType;
}

const units: Unit[] = [
  { name: "Ribeirão Preto", state: "SP", type: "propria" },
  { name: "Franca", state: "SP", type: "propria" },
  { name: "Uberaba", state: "MG", type: "franquia" },
  { name: "Araraquara", state: "SP", type: "licenciado" },
  { name: "Guarapuava", state: "PR", type: "licenciado" },
  { name: "Barretos", state: "SP", type: "franquia" },
];

const typeConfig: Record<UnitType, { label: string; color: string; icon: typeof Building2 }> = {
  propria: { label: "Unidade Própria", color: "bg-primary", icon: Building2 },
  franquia: { label: "Franquia", color: "bg-accent", icon: Handshake },
  licenciado: { label: "Licenciado", color: "bg-muted-foreground", icon: UserCheck },
};

const UnitsSection = () => (
  <section className="py-20 md:py-28 bg-background" aria-labelledby="unidades-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          Estamos perto de você
        </span>
        <h2 id="unidades-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-foreground">
          Conheça nossas unidades
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Unidades próprias, franquias e licenciados espalhados pelo Brasil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        {/* Map */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-lg h-[420px] md:h-[540px]">
          <iframe
            title="Localização das unidades Bioforte"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-53.0%2C-26.5%2C-44.0%2C-19.0&layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Right side */}
        <div className="lg:col-span-2 space-y-4">
          {/* Legend */}
          <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
            <p className="text-xs font-bold tracking-widest uppercase text-foreground mb-4">Legenda</p>
            <div className="space-y-3">
              {Object.values(typeConfig).map((t) => {
                const Icon = t.icon;
                return (
                  <span key={t.label} className="flex items-center gap-3 text-sm text-foreground">
                    <span className={`w-8 h-8 rounded-lg ${t.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </span>
                    {t.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Unit cards */}
          {units.map((u) => {
            const config = typeConfig[u.type];
            const Icon = config.icon;
            return (
              <div key={u.name} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <span className={`w-10 h-10 rounded-xl ${config.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-card-foreground">{u.name}</p>
                  <p className="text-xs text-muted-foreground">{config.label}</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {u.state}
                </span>
              </div>
            );
          })}

          <div className="pt-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-whatsapp text-base px-6 py-6 rounded-lg font-bold gap-2 w-full">
                <MessageCircle className="w-5 h-5" /> Fale com a unidade mais próxima
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UnitsSection;
