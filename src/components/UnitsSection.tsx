import { MapPin, MessageCircle } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

type UnitType = "propria" | "franquia" | "licenciado";

interface Unit {
  name: string;
  state: string;
  type: UnitType;
  lat: number;
  lng: number;
}

const units: Unit[] = [
  { name: "Ribeirão Preto", state: "SP", type: "propria", lat: -21.1767, lng: -47.8208 },
  { name: "Franca", state: "SP", type: "propria", lat: -20.5389, lng: -47.4009 },
  { name: "Uberaba", state: "MG", type: "franquia", lat: -19.7472, lng: -47.9319 },
  { name: "Araraquara", state: "SP", type: "licenciado", lat: -21.7845, lng: -48.1780 },
  { name: "Guarapuava", state: "PR", type: "licenciado", lat: -25.3935, lng: -51.4562 },
  { name: "Barretos", state: "SP", type: "franquia", lat: -20.5573, lng: -48.5677 },
];

const typeConfig: Record<UnitType, { label: string; color: string; markerColor: string }> = {
  propria: { label: "Unidade Própria", color: "bg-primary", markerColor: "#1a7a3a" },
  franquia: { label: "Franquia", color: "bg-accent", markerColor: "#2a9d5c" },
  licenciado: { label: "Licenciado", color: "bg-chart-4", markerColor: "#f59e0b" },
};

const createIcon = (color: string) =>
  L.divIcon({
    className: "",
    html: `<div style="width:18px;height:18px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
  });

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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Map */}
        <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border shadow-lg h-[400px] md:h-[480px]">
          <MapContainer
            center={[-22.0, -48.5]}
            zoom={6}
            scrollWheelZoom={false}
            className="w-full h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {units.map((u) => (
              <Marker key={u.name} position={[u.lat, u.lng]} icon={createIcon(typeConfig[u.type].markerColor)}>
                <Popup>
                  <strong>{u.name} - {u.state}</strong>
                  <br />
                  {typeConfig[u.type].label}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Unit list */}
        <div className="lg:col-span-2 space-y-3">
          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl bg-secondary border border-border">
            <span className="text-sm font-semibold text-foreground mr-1">Legenda:</span>
            {Object.values(typeConfig).map((t) => (
              <span key={t.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={`w-3 h-3 rounded-full ${t.color}`} />
                {t.label}
              </span>
            ))}
          </div>

          {units.map((u) => (
            <div key={u.name} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-card-foreground">{u.name}</p>
                <p className="text-xs text-muted-foreground">{u.state}</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full text-primary-foreground ${typeConfig[u.type].color}`}>
                {typeConfig[u.type].label}
              </span>
            </div>
          ))}

          <div className="pt-4">
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
