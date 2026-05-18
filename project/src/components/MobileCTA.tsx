import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 pointer-events-none transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="pointer-events-auto bg-brand-bg/95 backdrop-blur-md border-t border-brand-border px-4 py-3 safe-area-pb">
        <button type="button" onClick={() => scrollToSection('oferta')} className="btn-primary w-full gap-2 text-xs sm:text-sm py-3.5 justify-center">
          Acessar o sistema
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
