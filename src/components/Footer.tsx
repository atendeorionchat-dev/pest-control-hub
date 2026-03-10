import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark py-14" role="contentinfo">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-display text-xl font-bold mb-3">Bioforte Dedetizadora</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Saneamento Ambiental — Protegendo seu ambiente com segurança, tecnologia e mais de 15 anos de experiência.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Contato</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (16) 97400-7842</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contato@bioforte.com.br</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Ribeirão Preto, Franca, Uberaba</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Serviços</h4>
          <ul className="space-y-1.5 text-sm opacity-70">
            <li>Controle de Pragas Urbanas</li>
            <li>Descupinização</li>
            <li>Afastamento de Pássaros</li>
            <li>Limpeza de Caixas D'água</li>
            <li>Manejo de Abelhas</li>
            <li>Sanitização de Ambientes</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Bioforte Dedetizadora. Todos os direitos reservados. CNPJ: 18.265.906/0001-01
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
