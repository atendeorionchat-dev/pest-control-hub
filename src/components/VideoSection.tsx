import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5516974007842?text=Olá! Gostaria de fazer um orçamento.";

const videos = [
  { src: "https://www.youtube.com/embed/g_3u3VzRIv4", title: "Depoimento de cliente Bioforte 1" },
  { src: "https://www.youtube.com/embed/3-1c1Th0W6Y", title: "Depoimento de cliente Bioforte 2" },
];

const VideoSection = () => (
  <section className="py-20 md:py-28 bg-background" aria-labelledby="video-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">
          Conheça a Bioforte
        </span>
        <h2 id="video-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3 mb-4 text-foreground">
          Veja o que nossos clientes dizem
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Assista aos depoimentos e conheça a satisfação de quem já contratou nossos serviços.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {videos.map((v) => (
          <div key={v.src} className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border shadow-lg">
            <iframe
              className="w-full h-full"
              src={v.src}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="btn-whatsapp text-base px-8 py-6 rounded-lg font-bold gap-2">
            <MessageCircle className="w-5 h-5" /> Faça seu Orçamento Grátis
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default VideoSection;
