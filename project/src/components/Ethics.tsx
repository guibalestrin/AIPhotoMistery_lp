const fourElementsImage = '/imagens/4elementos.png';

const teaches = [
  'Apresentação visual',
  'Percepção digital',
  'Estética masculina moderna',
  'Branding pessoal',
  'Comunicação visual estratégica',
];

export default function Ethics() {
  return (
    <section className="section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 bg-brand-gold/5 rounded-sm blur-3xl" />
            <div className="relative rounded-sm overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="imagens/Ethics.png"
                alt="Estetica masculina moderna"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
            </div>
            
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">Etica & Percepção</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text">
                IA não cria atração.
                <br />
                <em className="text-brand-gold not-italic">Ela amplifica percepção.</em>
              </h2>
            </div>

            <p className="body-text">
              O ambiente digital sempre foi uma extensão da percepção social. Mulheres já utilizam maquiagem,
              iluminação, ângulos, filtros, e ensaios fotográficos.
            </p>

            <div className="space-y-2">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold mb-3">O sistema ensina</p>
              {teaches.map((t) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-brand-gold/60" />
                  <span className="font-sans text-sm font-light text-brand-text">{t}</span>
                </div>
              ))}
            </div>

            <p className="body-text">A IA funciona como ferramenta visual - da mesma forma que:</p>

            <div className="overflow-hidden rounded-sm border border-brand-border bg-brand-bgSecondary/40">
              <img
                src={fourElementsImage}
                alt="Fotografia profissional, edicao e direcao criativa, producao editorial e social branding"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="highlight-box">
              <p className="font-serif text-lg text-brand-text font-light italic">
                "Não é sobre fabricar um personagem. É sobre melhorar a apresentação."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
