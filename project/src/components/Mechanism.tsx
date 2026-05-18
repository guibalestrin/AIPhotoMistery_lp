const mechanismImage = '/imagens/Mecanismo2.png';

export default function Mechanism() {
  return (
    <section id="sistema" className="section-shell">
      <div className="absolute inset-0 bg-brand-bgSecondary/20" />
      <div
        className="absolute inset-0 opacity-10"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(168,138,90,0.28) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto">
          <p className="section-label mb-4">O Mecanismo</p>
          <h2 className="headline-lg mb-6">
            O mecanismo é simples:
            <br />
            <em className="text-brand-gold not-italic">percepção bem projetada.</em>
          </h2>
          <p className="body-text">
            O AI Photo Mastery utiliza IA, direcao visual e engenharia perceptiva para construir fotos que parecem mais
            sofisticadas, naturais, premium e visualmente intencionais.
          </p>
        </div>

        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-sm border border-brand-border/60 bg-brand-bgSecondary/40">
            <img src={mechanismImage} alt="Visao geral do mecanismo" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <div className="border border-brand-red/30 bg-brand-redDark/10 rounded p-6 md:p-8 text-center space-y-3">
            <p className="font-serif text-xl text-brand-text font-light">Você não está aprendendo IA.</p>
            <div className="w-8 h-px bg-brand-red mx-auto" />
            <p className="font-sans text-sm text-brand-textMuted font-light leading-relaxed">
              Você está aprendendo como construir presença digital estrategicamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
