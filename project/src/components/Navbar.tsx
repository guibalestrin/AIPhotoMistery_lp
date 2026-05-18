import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 safe-area-pt ${
        scrolled ? 'bg-brand-bg/95 backdrop-blur-md border-b border-brand-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between h-14 sm:h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img src="/Insta.png" alt="Caverna de Alexandria" className="h-7 sm:h-8 w-7 sm:w-8 object-contain" />
          <span className="font-serif text-brand-gold text-xs sm:text-sm tracking-[0.15em] hidden sm:block">
            Caverna
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <button type="button" onClick={() => scrollToSection('sistema')} className="body-text text-xs tracking-widest hover:text-brand-text transition-colors">
            O Sistema
          </button>
          <button type="button" onClick={() => scrollToSection('transformacoes')} className="body-text text-xs tracking-widest hover:text-brand-text transition-colors">
            Transformações
          </button>
          <button type="button" onClick={() => scrollToSection('oferta')} className="btn-primary py-2.5 px-6 text-xs">
            Acessar
          </button>
        </div>

        <button
          className="md:hidden text-brand-textMuted hover:text-brand-text transition-colors p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-brand-bg/98 backdrop-blur-md border-b border-brand-border px-4 py-6 flex flex-col gap-4 safe-area-pb">
          <button
            type="button"
            className="body-text text-sm tracking-widest hover:text-brand-text transition-colors py-2"
            onClick={() => {
              setMenuOpen(false);
              scrollToSection('sistema');
            }}
          >
            O Sistema
          </button>
          <button
            type="button"
            className="body-text text-sm tracking-widest hover:text-brand-text transition-colors py-2"
            onClick={() => {
              setMenuOpen(false);
              scrollToSection('transformacoes');
            }}
          >
            Transformações
          </button>
          <button
            type="button"
            className="btn-primary py-3.5 text-xs w-full justify-center"
            onClick={() => {
              setMenuOpen(false);
              scrollToSection('oferta');
            }}
          >
            Acessar o Sistema
          </button>
        </div>
      )}
    </nav>
  );
}
