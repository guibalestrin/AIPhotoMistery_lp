import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-shell">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-bg" />
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(142,27,42,0.2) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(244,241,236,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,236,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-10 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2">
            <p className="section-label text-[9px] sm:text-[10px]">Caverna de Alexandria</p>
            <div className="w-12 h-px bg-brand-gold mx-auto" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-brand-text max-w-2xl mx-auto">
            Seu perfil não precisa parecer genérico.
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg font-light text-brand-textMuted max-w-xl mx-auto leading-relaxed">
            Construa uma presença digital mais forte, sofisticada e visualmente intencional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://pay.kiwify.com.br/YeSpnD6"
              target="_blank"
              rel="noreferrer"
              className="btn-primary gap-2"
            >
              Acessar o sistema
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-4">
            {['Sistema replicável', 'Acesso imediato', 'Garantia incluída'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-gold" />
                <span className="font-sans text-xs font-light text-brand-textMuted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
