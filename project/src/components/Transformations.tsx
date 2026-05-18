const transformations = [
  {
    label: 'Invisível → Magnético',
    before: 'imagens/antes_europeu.png',
    after: 'imagens/depois_europeu.png',
  },
  {
    label: 'Genérico → Premium',
    before: 'imagens/antes_negro.png',
    after: 'imagens/depois_negro.png',
  },
  {
    label: 'Comum → Intencional',
    before: 'imagens/antes_asiatico.png',
    after: 'imagens/depois_asiatico.png',
  },
  {
    label: 'Fraco → Sofisticado',
    before: 'imagens/antes_indio.png',
    after: 'imagens/depois_indio.png',
  },
];

export default function Transformations() {
  return (
    <section id="transformacoes" className="section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">Transformações</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text max-w-2xl mx-auto">
            Veja o tipo de transformação perceptiva que o sistema foi criado para gerar.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {transformations.map((t) => (
            <div key={t.label} className="group relative rounded-sm overflow-hidden">
              <div className="flex gap-1" style={{ aspectRatio: '2/1' }}>
                {/* Before */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={t.before}
                    alt="Antes"
                    className="w-full h-full object-cover  brightness-80"
                  />
                  <div className="absolute inset-0 bg-brand-bg/40" />
                  <div className="absolute top-3 left-3">
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-brand-textMuted bg-brand-bg/80 px-2 py-0.5 rounded-sm">
                      Antes
                    </span>
                  </div>
                </div>
                {/* After */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={t.after}
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/50 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-brand-text bg-brand-redDark/80 px-2 py-0.5 rounded-sm">
                      Depois
                    </span>
                  </div>
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-bg/90 to-transparent p-4">
                <p className="font-serif text-brand-text text-lg font-light">{t.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
