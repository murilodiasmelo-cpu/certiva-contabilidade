import { ArrowRight, Check, Clock, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/certivaData';

interface HeroProps {
  onRequestQuote: () => void;
}

const HIGHLIGHTS = [
  { value: 'Desde 2008', label: 'Atuação consolidada no mercado empresarial' },
  { value: '6 Áreas', label: 'Assessoria contábil, fiscal, tributária e trabalhista' },
  { value: '08:00 – 18:00', label: 'Atendimento de segunda a sexta-feira' },
  { value: 'Centro-Oeste', label: 'Sede estruturada em Goiânia - GO' },
];

export default function Hero({ onRequestQuote }: HeroProps) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá, equipe Certiva Contabilidade! Gostaria de falar com um contador.'
  )}`;

  return (
    <section id="inicio" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left column: Minimalist statement & WhatsApp + Quote actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-[#5A6065] mb-4">
              <span>{COMPANY_INFO.cityState}</span>
              <span className="mx-2 text-slate-300" aria-hidden="true">
                ·
              </span>
              <span>Desde {COMPANY_INFO.foundedYear}</span>
              <span className="mx-2 text-slate-300" aria-hidden="true">
                ·
              </span>
              <span>Parque Amazônia</span>
            </p>

            <h1 className="font-display text-[clamp(2.15rem,3.6vw,3.25rem)] leading-[1.1] font-bold text-[#09273E] tracking-tight text-balance">
              Contabilidade objetiva e segura para o crescimento da sua empresa.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#5A6065] leading-relaxed max-w-xl">
              Assessoria contábil, fiscal, tributária e trabalhista com atendimento próximo, ético e
              focado em decisões empresariais claras.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#38B55B] hover:bg-[#2C9649] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#09273E] focus-visible:ring-offset-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </a>

              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#09273E] bg-white border border-slate-300 hover:border-[#09273E] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38B55B]"
              >
                Solicitar Proposta
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right column: Light minimalist overview card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full lg:h-full bg-[#F7F9FB] text-[#09273E] p-7 sm:p-9 rounded-sm border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <span className="font-display text-base font-bold tracking-tight text-[#09273E]">
                    Assessoria Empresarial
                  </span>
                  <span className="font-mono text-xs tabular-nums text-[#5A6065]">
                    {COMPANY_INFO.foundedYear} — {new Date().getFullYear()}
                  </span>
                </div>

                <ul className="mt-6 space-y-3.5 text-sm text-[#09273E]">
                  {[
                    'Abertura, regularização e encerramento de empresas',
                    'Escrituração fiscal e planejamento tributário',
                    'Departamento trabalhista e obrigações do eSocial',
                    'Demonstrações contábeis e balanços gerenciais',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#38B55B] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 space-y-2 text-xs sm:text-sm text-[#5A6065]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#38B55B] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#38B55B] shrink-0" />
                  <span className="tabular-nums">{COMPANY_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist 4-column summary strip */}
      <div className="border-t border-b border-slate-200/80 bg-[#F7F9FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
            {HIGHLIGHTS.map((item) => (
              <div key={item.value} className="py-5 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <p className="font-display text-xl sm:text-2xl font-bold text-[#09273E] tabular-nums">
                  {item.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-[#5A6065] leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
