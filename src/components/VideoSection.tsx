const VideoSection = () => (
  <section className="py-16 md:py-24 bg-background" aria-labelledby="video-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="video-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        Veja o que nossos Clientes tem a dizer:
      </h2>
      <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
        Conheça a experiência de quem já confia na Bioforte.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Depoimento de cliente Bioforte 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Depoimento de cliente Bioforte 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      <p className="text-center text-muted-foreground text-xs mt-4">
        * Substitua pelos vídeos reais de depoimentos da Bioforte
      </p>
    </div>
  </section>
);

export default VideoSection;
