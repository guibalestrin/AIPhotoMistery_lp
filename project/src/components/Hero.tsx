import { ArrowRight, ChevronDown } from 'lucide-react';
const heroImage = '/imagens/Hero.png';
import { scrollToSection } from '../utils/scrollToSection';

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-screen flex flex-col justify-center overflow-hidden pt-6 sm:pt-10 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-bgSecondary" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(142,27,42,0.18) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(244,241,236,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,241,236,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full py-8 sm:py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center rounded-sm border border-brand-gold/30 bg-brand-bgSecondary/70 px-4 py-3 shadow-[0_0_0_1px_rgba(168,138,90,0.05)] backdrop-blur-sm">
              <p className="font-sans text-[10px] sm:text-xs font-medium uppercase tracking-[0.22em] text-brand-gold">
                Raramente a aparência está relacionada a poucos matches e rejeição.
              </p>
            </div>

            <div className="space-y-2">
              <p className="section-label text-[9px] sm:text-[10px]">AI Photo Mastery</p>
              <div className="section-divider w-8 sm:w-12" />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-brand-text">
                Entenda por que você não consegue
                <br className="hidden sm:block" />
                <em className="font-light text-[#C6A969] not-italic"> atrair mulheres online</em> — mesmo não sendo feio e tendo uma boa personalidade.
              </h1>
              <p className="font-sans text-sm sm:text-base md:text-lg font-light leading-[1.7] text-brand-textMuted max-w-md">
               O problema não é aparência. É como sua imagem, presença e percepção digital são interpretadas nas redes sociais e aplicativos.
              </p>
            </div>

            <div className="relative flex flex-col gap-4 lg:hidden">
              <div
                className="relative rounded-sm overflow-hidden"
                style={{ aspectRatio: '3/4', maxHeight: '520px' }}
              >
                <img src={heroImage} alt="Presenca visual premium" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="section-label mb-1"></p>
                      <p className="font-serif text-brand-text text-lg font-light"></p>
                    </div>
                    <div className="" />
                    <div className="text-right">
                      <p className="font-sans text-[10px] text-brand-gold tracking-[0.2em] uppercase mb-1">
                        
                      </p>
                      <p className="font-sans text-[10px] text-brand-textMuted tracking-[0.15em] uppercase">
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('oferta')}
                className="btn-primary gap-2 text-xs sm:text-sm py-3.5 sm:py-4 w-full sm:w-auto justify-center sm:justify-start"
              >
                Acessar o sistema
                <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('transformacoes')}
                className="btn-secondary text-xs sm:text-sm py-3.5 sm:py-4 w-full sm:w-auto justify-center sm:justify-start"
              >
                Ver transformações
              </button>
            </div>

            
          </div>

          <div className="relative hidden lg:flex flex-col gap-4 lg:pl-8">
            <div
              className="relative rounded-sm overflow-hidden"
              style={{ aspectRatio: '3/4', maxHeight: '520px' }}
            >
              <img src={heroImage} alt="Presenca visual premium" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="section-label mb-1">Depois</p>
                    <p className="font-serif text-brand-text text-lg font-light">Presença premium</p>
                  </div>
                  <div className="w-px h-10 bg-brand-gold/40 flex-shrink-0" />
                  <div className="text-right">
                    <p className="font-sans text-[10px] text-brand-gold tracking-[0.2em] uppercase mb-1">
                      Visualmente
                    </p>
                    <p className="font-sans text-[10px] text-brand-textMuted tracking-[0.15em] uppercase">
                      Intencional
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 bg-brand-bgSecondary border border-brand-border rounded p-4 max-w-[160px]">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-2">Sistema</p>
              <p className="font-sans text-xs text-brand-textMuted leading-relaxed">
                AI Photo
                <br />
                Engineering
              </p>
              <div className="mt-3 w-6 h-px bg-brand-red" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-brand-textMuted">Explorar</span>
        <ChevronDown size={14} className="text-brand-textMuted animate-bounce" />
      </div>
    </section>
  );
}
