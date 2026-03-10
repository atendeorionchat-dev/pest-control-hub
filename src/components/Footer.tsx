import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-dark-section py-14" role="contentinfo">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Bioforte Dedetizadora</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            Saneamento Ambiental — Protegendo seu ambiente com segurança, tecnologia e mais de 20 anos de experiência.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Unidades</h4>
          <div className="space-y-3 text-sm opacity-70">
            <div>
              <p className="font-medium opacity-100">Ribeirão Preto - SP</p>
              <p>CNPJ: 05.575.745/0001-00</p>
              <p>Bioforte Saneamento Ambiental EIRELI</p>
            </div>
            <div>
              <p className="font-medium opacity-100">Franca - SP</p>
              <p>CNPJ: 18.265.906/0001-01</p>
              <p>Bioforte Franca Saneamento Ambiental LTDA-ME</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0" /> (16) 97400-7842</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 flex-shrink-0" /> contato@bioforte.com.br</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 flex-shrink-0" /> Ribeirão Preto, Franca - SP</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Bioforte Dedetizadora. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
