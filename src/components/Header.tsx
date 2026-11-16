import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CERTIVA_LOGO_URL } from '../data/certivaData';

interface HeaderProps {
  onRequestQuote: () => void;
}

const NAV_LINKS = [
  { label: 'A Empresa', href: '#empresa' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Abertura', href: '#abertura' },
  { label: 'Links Úteis', href: '#links-uteis' },
  { label: 'Contato', href: '#contato' },
];

export default function Header({ onRequestQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    onRequestQuote();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand mark (single element) */}
        <a
          href="#inicio"
          aria-label="Certiva Contabilidade - Página inicial"
          className="shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B] rounded-sm"
        >
          {!logoError ? (
            <img
              src={CERTIVA_LOGO_URL}
              alt="Certiva Contabilidade"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="h-9 sm:h-10 w-auto object-contain"
            />
          ) : (
            <span className="font-display text-xl font-bold tracking-tight text-[#09273E] whitespace-nowrap">
              CERTIVA CONTABILIDADE
            </span>
          )}
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5A6065]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:text-[#09273E] hover:border-[#38B55B] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile drawer trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#09273E] hover:bg-[#103A5C] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B] focus-visible:ring-offset-2"
          >
            Solicitar Proposta
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#09273E] border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-4">
          <nav aria-label="Navegação móvel" className="flex flex-col divide-y divide-slate-100">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-sm font-medium text-[#09273E] hover:text-[#38B55B] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#09273E] hover:bg-[#103A5C] rounded-sm transition-colors cursor-pointer"
              >
                Solicitar Proposta
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
