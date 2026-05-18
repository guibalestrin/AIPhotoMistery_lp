const footerLinks = [
  { label: 'Política de Privacidade', href: '/politica-de-privacidade.html' },
  { label: 'Termos de Uso', href: '/termos-de-uso.html' },
  { label: 'Suporte', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src="/Insta.png" alt="Caverna de Alexandria" className="h-8 w-8 object-contain opacity-90" />
            <div>
              <p className="font-serif text-brand-gold text-sm tracking-[0.15em]">Caverna de Alexandria</p>
              <p className="font-sans text-[10px] text-brand-textMuted tracking-[0.2em] uppercase mt-0.5">
                AI Photo Mastery
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs font-light text-brand-textMuted hover:text-brand-text transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-border/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-sans text-xs font-light text-brand-textMuted/60 leading-relaxed max-w-lg">
            Este produto é destinado a homens adultos que desejam melhorar sua presença digital. Os resultados variam
            individualmente. O sistema não garante resultados específicos em relacionamentos.
          </p>
          <p className="font-sans text-xs font-light text-brand-textMuted/40 whitespace-nowrap">
            &copy; {new Date().getFullYear()} Caverna de Alexandria
          </p>
        </div>
      </div>
    </footer>
  );
}
