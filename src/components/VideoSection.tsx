import { Play } from "lucide-react";

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
          Assista ao vídeo e conheça um pouco mais sobre nosso trabalho e a satisfação dos nossos clientes.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border shadow-lg">
          {/* Placeholder for embedded video – replace src with actual video URL */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Bioforte Dedetizadora - Conheça nosso trabalho"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          {/* If no iframe, show a play button placeholder */}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          * Substitua o vídeo acima pelo vídeo institucional da Bioforte
        </p>
      </div>
    </div>
  </section>
);

export default VideoSection;
