import { Shield, Check, LockKeyhole, BadgeCheck, Headphones } from 'lucide-react';
const offerImage = '/imagens/oferta.png';
const bonusImage = '/imagens/bonus.png';
const offerStackImage = '/imagens/offer_stack.png';
import { trackInitiateCheckout } from '../utils/trackInitiateCheckout';

const includes = [
  'AI Photo Mastery System',
  'Digital Perception',
  'Attractive Identity Framework',
  'AI Photo Generation System',
  'Profile Optimization',
  'Fast Execution Workflow',
  '+4 Materiais bônus exclusivos',
];

const offerHighlights = [
  { icon: Shield, title: 'GARANTIA', strong: '7 DIAS', subtitle: 'RISCO ZERO' },
  { icon: LockKeyhole, title: 'ACESSO', strong: 'IMEDIATO', subtitle: '100% ONLINE' },
  { icon: BadgeCheck, title: 'CONTEÚDO', strong: 'PREMIUM', subtitle: 'ALTO VALOR' },
  { icon: Headphones, title: 'SUPORTE', strong: 'DEDICADO', subtitle: 'PARA ALUNOS' },
];

export default function Offer() {
  return (
    <section id="oferta" className="section-shell">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bgSecondary/40 to-brand-bg" />
      <div
        className="absolute inset-0 opacity-15"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(142,27,42,0.25) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-10 sm:mb-12">
          <p className="section-label text-[9px] sm:text-[10px] mb-3 sm:mb-4">Oferta</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-text">
            Entre agora no
            <br />
            <em className="text-brand-gold not-italic">AI Photo Mastery</em>
          </h2>
          <div className="mx-auto mt-6 max-w-2xl overflow-hidden rounded-sm border border-brand-border/60 bg-brand-bgSecondary/40">
            <img src={offerImage} alt="Oferta AI Photo Mastery" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-brand-bgSecondary border border-brand-border rounded-sm overflow-hidden">
          <div className="p-8 md:p-10 border-b border-brand-border">
            <p className="section-label mb-6">Incluso no sistema</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-sm border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-brand-gold" strokeWidth={2} />
                  </div>
                  <span className="font-sans text-sm font-light text-brand-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-brand-border bg-brand-bg/40 p-4 sm:p-6 md:p-8">
            <div className="mx-auto max-w-2xl">
              <div className="overflow-hidden rounded-sm border border-brand-border/60 bg-brand-bgSecondary/40">
                <img src={bonusImage} alt="Bônus AI Photo Mastery" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="mx-auto max-w-2xl">
              <div className="overflow-hidden rounded-sm border border-brand-border/60 bg-brand-bgSecondary/40 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7">
                <div className="mb-5 overflow-hidden rounded-sm border border-brand-border/60 bg-brand-bgSecondary/40 sm:mb-6">
                  <img src={offerStackImage} alt="Oferta AI Photo Mastery com acesso ao sistema" className="w-full h-full object-cover" />
                </div>

                <a
                  href="https://pay.kiwify.com.br/YeSpnD6"
                  target="_blank"
                  rel="noreferrer"
                  onClick={trackInitiateCheckout}
                  className="offer-cta-glow group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-[#f3c977]/70 bg-[linear-gradient(180deg,#f4c45f_0%,#d8a43d_48%,#b97919_100%)] px-5 py-4 text-center shadow-[0_0_0_1px_rgba(255,215,130,0.25),0_0_34px_rgba(241,184,72,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,215,130,0.4),0_0_42px_rgba(241,184,72,0.48)] sm:px-8 sm:py-5"
                >
                  <div className="offer-cta-sheen pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.12)_35%,rgba(255,255,255,0.36)_50%,rgba(255,255,255,0.12)_65%,transparent_100%)] opacity-70" />
                  <LockKeyhole size={20} className="relative z-10 text-[#17120a]" strokeWidth={2.4} />
                  <div className="relative z-10">
                    <p className="font-sans text-base font-extrabold uppercase tracking-[0.04em] text-[#17120a] sm:text-[1.85rem] sm:leading-none">
                      QUERO ACESSAR O AI PHOTO MASTERY
                    </p>
                    <p className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2b1d09] sm:text-xs">
                      ACESSO IMEDIATO • 100% ONLINE • GARANTIA DE 7 DIAS
                    </p>
                  </div>
                </a>

                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-brand-border/40 pt-5 sm:mt-6 sm:grid-cols-4 sm:gap-6 sm:pt-6">
                  {offerHighlights.map(({ icon: Icon, title, strong, subtitle }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Icon size={24} className="mt-0.5 flex-shrink-0 text-brand-gold" strokeWidth={1.8} />
                      <div className="min-w-0">
                        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-brand-text">
                          {title}
                        </p>
                        <p className="font-sans text-[15px] font-semibold uppercase leading-tight text-brand-text">
                          {strong}
                        </p>
                        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-brand-textMuted">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-brand-border pt-8 flex items-start gap-4">
              <Shield size={20} className="text-brand-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <p className="font-sans text-sm font-medium text-brand-text mb-1">Garantia de satisfação</p>
                <p className="font-sans text-xs font-light text-brand-textMuted leading-relaxed">
                  Se você aplicar o sistema e não perceber melhora clara na qualidade perceptiva do seu perfil, poderá
                  solicitar reembolso dentro do prazo definido. Sem questionamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
