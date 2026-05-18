const proofImages = [
  {
    src: 'imagens/1.png',
    desc: '',
  },
  {
    src: 'imagens/6.png',
    desc: '',
  },
  {
    src: 'imagens/4.png',
    desc: '',
  },
  {
    src: 'imagens/2.png',
    desc: '',
  },
  {
    src: 'imagens/5.png',
    desc: '',
  },
  {
    src: 'imagens/3.png',
    desc: '',
  },
];

export default function Proofs() {
  return (
    <section className="section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">Exemplos</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text max-w-2xl mx-auto mb-4">
            Exemplos do tipo de presença visual que o sistema ajuda a construir.
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-base font-light leading-[1.7] text-brand-textMuted max-w-lg mx-auto">
            Posicionamento visual mais forte. Estética mais sofisticada. Perfis mais coerentes. Presença digital mais premium.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {proofImages.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-sm overflow-hidden cursor-pointer"
              style={{ aspectRatio: '3 / 4' }}
            >
              <img
                src={img.src}
                alt={img.desc}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-sans text-xs font-light text-brand-text tracking-wide">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
