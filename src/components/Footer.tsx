import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <span className="font-display text-xl font-bold text-background">
            Bioforte Dedetizadora
          </span>
        </div>
        <p className="text-background/60 text-sm mb-4">
          Saneamento Ambiental — Protegendo seu ambiente com segurança e tecnologia.
        </p>
        <p className="text-background/40 text-xs">
          © {new Date().getFullYear()} Bioforte Dedetizadora. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
