export default function InvisibleCost() {
  const pains = [
    'Fotos sem direção visual',
    'Perfis genéricos',
    'Baixa presença digital',
    'Estética inconsistente',
    'Falta de posicionamento visual',
    'Presença social fraca',
  ];

  return (
    <section className="section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">O Custo Invisível</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text max-w-3xl mx-auto">
            A maioria dos homens perde percepção<br className="hidden md:block" />
            <em className="font-light text-[#C6A969] not-italic"> antes da primeira mensagem.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Comparison visuals */}
          <div className="flex gap-2 sm:gap-4">
            {/* Before */}
            <div className="flex-1 space-y-2 sm:space-y-3">
              <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src="imagens\Antes.png"
                  alt="Antes"
                  className="w-full h-full object-cover filter grayscale brightness-80"
                />
                <div className="absolute inset-0 bg-brand-bg/30" />
                <div className="absolute bottom-3 left-3">
                 
                </div>
              </div>
              <p className="font-sans text-[10px] sm:text-xs text-brand-textMuted text-center tracking-wide">Percepção fraca</p>
            </div>

            {/* Divider */}
            <div className="flex flex-col items-center justify-center gap-2 pt-4 sm:pt-8 flex-shrink-0">
              <div className="w-px h-4 sm:h-8 bg-brand-border" />
              <span className="font-serif text-brand-gold text-base sm:text-lg">→</span>
              <div className="w-px h-4 sm:h-8 bg-brand-border" />
            </div>

            {/* After */}
            <div className="flex-1 space-y-3">
              <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src="imagens/Depois.png"
                  alt="Depois"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  
                </div>
              </div>
              <p className="font-sans text-xs text-brand-gold text-center tracking-wide">Presença premium</p>
            </div>
          </div>

          {/* Right — content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              {pains.map((p) => (
                <div key={p} className="flex items-center gap-4 py-3 border-b border-brand-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
                  <span className="font-sans text-sm font-light text-brand-textMuted">{p}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 body-text">
              <p>
                Muitos homens acreditam que estão sendo avaliados apenas pela aparência.
              </p>
              <p>
                Mas no ambiente digital moderno, percepção é construída por sinais visuais.
              </p>
              <p className="text-brand-text font-light">
                Homens medianos com percepção forte frequentemente performam melhor do que homens naturalmente atraentes com presença visual fraca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
