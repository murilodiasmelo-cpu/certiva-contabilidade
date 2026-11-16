import { useState } from 'react';
import { CERTIVA_LOGO_URL, COMPANY_INFO, SERVICES } from '../data/certivaData';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export default function Footer({ onSelectService }: FooterProps) {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#09273E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Group Attribution */}
          <div className="md:col-span-5">
            <div className="inline-block bg-white px-4 py-2.5 rounded-sm">
              {!logoError ? (
                <img
                  src={CERTIVA_LOGO_URL}
                  alt="Certiva Contabilidade"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-9 w-auto object-contain"
                />
              ) : (
                <span className="font-display text-lg font-bold text-[#09273E]">
                  CERTIVA CONTABILIDADE
                </span>
              )}
            </div>

            <p className="mt-5 text-sm text-white/80 leading-relaxed max-w-md">
              Assessoria contábil, fiscal, tributária e trabalhista atuando desde{' '}
              {COMPANY_INFO.foundedYear} em Goiânia com foco em qualidade, ética e segurança nas
              decisões empresariais.
            </p>

            <p className="mt-4 text-sm font-semibold text-white">
              {COMPANY_INFO.groupAttribution}
            </p>
          </div>

          {/* Institutional Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-wider text-[#38B55B] mb-4">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#empresa" className="hover:text-white transition-colors">
                  A Empresa e Valores
                </a>
              </li>
              <li>
                <a href="#abertura" className="hover:text-white transition-colors">
                  Abertura de Empresa
                </a>
              </li>
              <li>
                <a href="#links-uteis" className="hover:text-white transition-colors">
                  Links Úteis
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Solicitar Proposta
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Address */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#38B55B] mb-4">
              Serviços e Atendimento
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/80 mb-6">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicos"
                    onClick={() => onSelectService(service.id)}
                    className="hover:text-white transition-colors"
                  >
                    {service.shortTitle}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/15 text-xs sm:text-sm text-white/75 space-y-1">
              <p>{COMPANY_INFO.fullAddress}</p>
              <p className="tabular-nums">
                {COMPANY_INFO.phoneDisplay} · {COMPANY_INFO.email}
              </p>
              <p>
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#38B55B] transition-colors"
                >
                  {COMPANY_INFO.website}
                </a>
                <span className="mx-2 text-white/40" aria-hidden="true">
                  ·
                </span>
                <span className="tabular-nums">{COMPANY_INFO.hours}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Group Strip */}
      <div className="border-t border-white/15 bg-[#061C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/80">
          <p className="font-medium text-white text-center sm:text-left">
            {COMPANY_INFO.groupAttribution}
          </p>
          <p className="tabular-nums text-white/70">
            © {new Date().getFullYear()} {COMPANY_INFO.name} · Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
