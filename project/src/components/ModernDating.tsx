const afterHeroImage = '/imagens/After_Hero.png';

export default function ModernDating() {
  const signals = ['Status', 'Lifestyle', 'Inteligência social', 'Autopercepção', 'Sofisticação'];

  return (
    <section className="section-shell">
      <div className="absolute inset-0 bg-brand-bgSecondary/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">O Ambiente Digital</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text">
                O dating moderno é visual
                <br />
                <em className="font-light text-[#C6A969] not-italic"> antes de ser verbal.</em>
              </h2>
            </div>

            <div className="rounded-sm overflow-hidden border border-brand-border/60 bg-brand-bgSecondary/40 lg:hidden">
              <img
                src={afterHeroImage}
                alt="Exemplo de presenca digital moderna"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 sm:space-y-4 body-text text-[13px] sm:text-sm md:text-base">
              <p>Aplicativos e redes sociais comprimiram julgamento social em segundos.</p>
              <p>Hoje, percepcão visual funciona como linguagem silenciosa.</p>
              <p>Iluminação, composição, roupas, ambiente, expressão e presença digital comunicam:</p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              {signals.map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="w-3 sm:w-4 h-px bg-brand-gold flex-shrink-0" />
                  <span className="font-sans text-[12px] sm:text-sm font-light text-brand-text tracking-wide">{s}</span>
                </div>
              ))}
            </div>

            <p className="body-text">antes mesmo da primeira conversa.</p>

            <div className="highlight-box">
              <p className="font-serif text-lg text-brand-text font-light italic">
                "O problema não é que os homens modernos não tenham personalidade. O problema é que a maioria transmite baixa percepção digital."
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-redDark/10 to-transparent rounded-sm blur-2xl" />
            <div className="relative rounded-sm overflow-hidden border border-brand-border/60 bg-brand-bgSecondary/40">
              <img
                src={afterHeroImage}
                alt="Exemplo de presenca digital moderna"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-bg border border-brand-border rounded p-5 max-w-[200px]">
              <p className="section-label mb-2">Percepção</p>
              <p className="font-serif text-brand-text text-base font-light leading-snug">
                precede personalidade no ambiente digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
