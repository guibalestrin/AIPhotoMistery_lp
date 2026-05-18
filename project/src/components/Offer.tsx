import { Shield, Check } from 'lucide-react';
import offerImage from '../../imagens/oferta.png';
import bonusImage from '../../imagens/bonus.png';
import offerStackImage from '../../imagens/offer_stack.png';

const includes = [
  'AI Photo Mastery System',
  'Digital Perception',
  'Attractive Identity Framework',
  'AI Photo Generation System',
  'Profile Optimization',
  'Fast Execution Workflow',
  '+4 Materiais bônus exclusivos',
];

function trackInitiateCheckout() {
  const metaPixel = (
    window as Window & {
      fbq?: (action: 'track', eventName: string, params?: Record<string, string | number>) => void;
    }
  ).fbq;

  if (typeof metaPixel !== 'function') return;

  metaPixel('track', 'InitiateCheckout', {
    content_name: 'AI Photo Mastery',
    content_category: 'Oferta',
  });
}

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
              <a
                href="https://pay.kiwify.com.br/YeSpnD6"
                target="_blank"
                rel="noreferrer"
                onClick={trackInitiateCheckout}
                className="block overflow-hidden rounded-sm border border-brand-border/60 bg-brand-bgSecondary/40 transition-opacity hover:opacity-95"
              >
                <img src={offerStackImage} alt="Oferta AI Photo Mastery com acesso ao sistema" className="w-full h-full object-cover" />
              </a>
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
