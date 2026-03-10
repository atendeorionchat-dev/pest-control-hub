import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar no WhatsApp"
    className="floating-whatsapp btn-whatsapp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default FloatingWhatsApp;
