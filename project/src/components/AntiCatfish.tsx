const antiCatfishImage = '/imagens/Anti_Catfish.png';

const focus = [
  'Naturalidade',
  'Plausibilidade social',
  'Consistência visual',
  'Estética realista',
  'Percepção premium',
];

const notFocus = [
  'Mansões falsas',
  'Carros alugados',
  'Riqueza artificial',
  'Lifestyle fake',
  'Visual plástico de IA',
];

const outcomes = [
  'Naturais',
  'Sofisticadas',
  'Editoriais',
  'Visualmente fortes',
  'Autenticamente melhores',
];

export default function AntiCatfish() {
  return (
    <section className="section-shell">
      <div className="absolute inset-0 bg-brand-bgSecondary/25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">Anti-Catfish Framework</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text mb-4 sm:mb-6">
            O sistema não foi criado para fabricar uma persona falsa.
          </h2>
          <p className="body-text max-w-xl mx-auto">
            O foco é criar fotos que pareçam naturais, sofisticadas e visualmente fortes — nunca exageradas ou artificiais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="rounded-sm overflow-hidden border border-brand-border/60 bg-brand-bgSecondary/40">
            <img
              src={antiCatfishImage}
              alt="Exemplo visual do Anti-Catfish Framework"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {/* Focus column */}
          <div className="card-premium">
            <p className="section-label mb-4">O foco é</p>
            <div className="space-y-2.5">
              {focus.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="font-sans text-sm font-light text-brand-text">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not focus column */}
          <div className="card-premium border-brand-red/20">
            <p className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-brand-red mb-4">Não é</p>
            <div className="space-y-2.5">
              {notFocus.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-3 h-px bg-brand-red/40 flex-shrink-0" />
                  <span className="font-sans text-sm font-light text-brand-textMuted line-through decoration-brand-red/30">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome column */}
          <div className="card-premium border-brand-gold/20">
            <p className="font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-brand-gold mb-4">Resultado</p>
            <p className="body-text mb-4 text-xs">Fotos que parecem:</p>
            <div className="space-y-2.5">
              {outcomes.map((o) => (
                <div key={o} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-brand-gold/60 flex-shrink-0" />
                  <span className="font-sans text-sm font-light text-brand-text">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block border border-brand-border rounded px-8 py-5">
            <p className="font-serif text-base md:text-lg text-brand-text font-light">
              O objetivo é reduzir a diferença entre como você é percebido online
            </p>
            <div className="flex items-center justify-center gap-4 my-3">
              <div className="w-8 h-px bg-brand-border" />
              <span className="font-sans text-xs tracking-widest text-brand-gold uppercase">e</span>
              <div className="w-8 h-px bg-brand-border" />
            </div>
            <p className="font-serif text-base md:text-lg text-brand-gold font-light italic">
              seu potencial real de presença.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
